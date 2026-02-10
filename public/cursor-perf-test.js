/**
 * Cursor Performance Test Suite v2.0
 *
 * QUICK START: Just paste this in console, then run cursorPerf.help()
 */
(function() {
  'use strict';

  let metrics = {
    frameTimes: [],
    longFrames: 0,
    totalFrames: 0,
    startTime: 0,
    lastFrameTime: 0,
    isRunning: false,
    duration: 5000,
  };

  let fpsOverlay = null;
  let fpsValueEl = null;
  let fpsModeEl = null;
  let fpsAnimationId = null;

  function calcStats(times) {
    if (times.length === 0) return null;
    const sorted = [...times].sort((a, b) => a - b);
    const avg = times.reduce((a, b) => a + b, 0) / times.length;
    return {
      avg: avg,
      fps: 1000 / avg,
      min: sorted[0],
      max: sorted[sorted.length - 1],
      p50: sorted[Math.floor(sorted.length * 0.5)],
      p95: sorted[Math.floor(sorted.length * 0.95)],
      p99: sorted[Math.floor(sorted.length * 0.99)],
      count: times.length,
    };
  }

  function getCursorInfo() {
    const cursor = document.getElementById('cursor');
    if (!cursor) return null;
    const styles = getComputedStyle(cursor);
    return {
      element: cursor,
      hasLowPerfClass: cursor.classList.contains('low-performance'),
      backdropFilter: styles.backdropFilter,
      contain: styles.contain,
    };
  }

  function measureFrame(resolve) {
    const now = performance.now();
    const frameTime = now - metrics.lastFrameTime;
    metrics.lastFrameTime = now;

    if (frameTime > 0 && frameTime < 500) {
      metrics.frameTimes.push(frameTime);
      metrics.totalFrames++;
      if (frameTime > 16.67) metrics.longFrames++;
    }

    if (now - metrics.startTime < metrics.duration) {
      requestAnimationFrame(function() { measureFrame(resolve); });
    } else {
      metrics.isRunning = false;
      resolve(calcStats(metrics.frameTimes));
    }
  }

  function resetMetrics() {
    metrics.frameTimes = [];
    metrics.longFrames = 0;
    metrics.totalFrames = 0;
    metrics.startTime = performance.now();
    metrics.lastFrameTime = performance.now();
  }

  function printResults(stats, label) {
    label = label || 'CURSOR PERFORMANCE';
    if (!stats) {
      console.log('No data collected. Did you move the mouse?');
      return;
    }

    const cursor = getCursorInfo();
    const droppedPct = ((metrics.longFrames / metrics.totalFrames) * 100).toFixed(1);

    console.log('\n' + '='.repeat(60));
    console.log('  ' + label);
    console.log('='.repeat(60));
    console.log('\n  FRAME TIMING');
    console.log('  Average FPS:    ' + stats.fps.toFixed(1) + ' fps');
    console.log('  Average:        ' + stats.avg.toFixed(2) + ' ms');
    console.log('  Median (p50):   ' + stats.p50.toFixed(2) + ' ms');
    console.log('  95th %ile:      ' + stats.p95.toFixed(2) + ' ms');
    console.log('  99th %ile:      ' + stats.p99.toFixed(2) + ' ms');
    console.log('  Max:            ' + stats.max.toFixed(2) + ' ms');
    console.log('\n  DROPPED FRAMES');
    console.log('  Count:          ' + metrics.longFrames + ' / ' + metrics.totalFrames);
    console.log('  Percentage:     ' + droppedPct + '%');
    console.log('\n  CURSOR STATE');
    console.log('  Mode:           ' + (cursor && cursor.hasLowPerfClass ? 'LOW-PERF' : 'HIGH-PERF'));
    console.log('  backdrop-filter:' + ((cursor && cursor.backdropFilter) || 'none'));
    console.log('\n  VERDICT');

    if (stats.avg < 12 && parseFloat(droppedPct) < 5) {
      console.log('  ✅ EXCELLENT - Smooth 60+ FPS');
    } else if (stats.avg < 16.67 && parseFloat(droppedPct) < 10) {
      console.log('  ✅ GOOD - Consistent 60 FPS');
    } else if (stats.avg < 20 && parseFloat(droppedPct) < 20) {
      console.log('  ⚠️ ACCEPTABLE - Some frame drops');
    } else {
      console.log('  ❌ POOR - Noticeable lag');
    }
    console.log('='.repeat(60) + '\n');

    return stats;
  }

  window.cursorPerf = {
    start: function(seconds) {
      seconds = seconds || 5;
      if (metrics.isRunning) {
        console.log('Test already running...');
        return;
      }

      metrics.duration = seconds * 1000;
      metrics.isRunning = true;
      resetMetrics();

      console.log('\n🔬 Starting ' + seconds + '-second test. Move your mouse!\n');

      return new Promise(function(resolve) {
        requestAnimationFrame(function() { measureFrame(resolve); });
      }).then(function(stats) {
        return printResults(stats);
      });
    },

    compare: function() {
      if (!window.cursorDebug) {
        console.error('cursorDebug API not available');
        return;
      }

      console.log('\n🔬 COMPARISON TEST - Keep moving your mouse!\n');

      var highPerfStats, lowPerfStats;
      var highPerfDropped, highPerfTotal, lowPerfDropped, lowPerfTotal;

      console.log('Testing HIGH-PERF mode...');
      window.cursorDebug.setLowPerf(false);

      return new Promise(function(r) { setTimeout(r, 500); })
        .then(function() {
          metrics.duration = 5000;
          metrics.isRunning = true;
          resetMetrics();
          return new Promise(function(resolve) {
            requestAnimationFrame(function() { measureFrame(resolve); });
          });
        })
        .then(function(stats) {
          highPerfStats = stats;
          highPerfDropped = metrics.longFrames;
          highPerfTotal = metrics.totalFrames;

          console.log('\nTesting LOW-PERF mode...');
          window.cursorDebug.setLowPerf(true);
          return new Promise(function(r) { setTimeout(r, 500); });
        })
        .then(function() {
          metrics.isRunning = true;
          resetMetrics();
          return new Promise(function(resolve) {
            requestAnimationFrame(function() { measureFrame(resolve); });
          });
        })
        .then(function(stats) {
          lowPerfStats = stats;
          lowPerfDropped = metrics.longFrames;
          lowPerfTotal = metrics.totalFrames;

          console.log('\n' + '='.repeat(60));
          console.log('  COMPARISON RESULTS');
          console.log('='.repeat(60));
          console.log('\n                    HIGH-PERF    LOW-PERF');
          console.log('  Average FPS:      ' + highPerfStats.fps.toFixed(1).padStart(8) + '    ' + lowPerfStats.fps.toFixed(1).padStart(8));
          console.log('  Avg Frame Time:   ' + highPerfStats.avg.toFixed(2).padStart(7) + 'ms   ' + lowPerfStats.avg.toFixed(2).padStart(7) + 'ms');
          console.log('  Dropped Frames:   ' + String(highPerfDropped).padStart(8) + '    ' + String(lowPerfDropped).padStart(8));

          var highPerfOk = highPerfStats.avg < 18 && (highPerfDropped/highPerfTotal) < 0.15;
          console.log('\n  RECOMMENDATION: ' + (highPerfOk ? 'HIGH-PERF works well' : 'Use LOW-PERF mode'));
          console.log('='.repeat(60) + '\n');

          window.cursorDebug.setLowPerf(!highPerfOk);
          return { highPerf: highPerfStats, lowPerf: lowPerfStats };
        });
    },

    showFPS: function() {
      if (fpsOverlay) return;

      fpsOverlay = document.createElement('div');
      fpsOverlay.style.cssText = 'position:fixed;top:10px;right:10px;background:rgba(0,0,0,0.8);color:#0f0;font-family:monospace;font-size:14px;padding:8px 12px;border-radius:4px;z-index:99999;pointer-events:none;';

      fpsValueEl = document.createElement('div');
      fpsValueEl.style.cssText = 'font-size:18px;font-weight:bold;';
      fpsValueEl.textContent = '-- FPS';

      fpsModeEl = document.createElement('div');
      fpsModeEl.style.cssText = 'font-size:11px;color:#888;';
      fpsModeEl.textContent = 'Mode: --';

      fpsOverlay.appendChild(fpsValueEl);
      fpsOverlay.appendChild(fpsModeEl);
      document.body.appendChild(fpsOverlay);

      var frames = 0;
      var lastTime = performance.now();
      var fps = 0;

      function updateFPS() {
        frames++;
        var now = performance.now();
        if (now - lastTime >= 1000) {
          fps = Math.round(frames * 1000 / (now - lastTime));
          frames = 0;
          lastTime = now;
        }

        var cursor = getCursorInfo();
        var mode = (cursor && cursor.hasLowPerfClass) ? 'LOW' : 'HIGH';
        var color = fps >= 55 ? '#0f0' : fps >= 30 ? '#ff0' : '#f00';

        fpsValueEl.style.color = color;
        fpsValueEl.textContent = fps + ' FPS';
        fpsModeEl.textContent = 'Mode: ' + mode + '-PERF';

        fpsAnimationId = requestAnimationFrame(updateFPS);
      }

      updateFPS();
      console.log('FPS overlay shown. Use cursorPerf.hideFPS() to hide.');
    },

    hideFPS: function() {
      if (fpsOverlay) {
        fpsOverlay.remove();
        fpsOverlay = null;
      }
      if (fpsAnimationId) {
        cancelAnimationFrame(fpsAnimationId);
        fpsAnimationId = null;
      }
      console.log('FPS overlay hidden.');
    },

    stress: function(seconds) {
      seconds = seconds || 10;
      console.log('\n🔥 STRESS TEST - ' + seconds + ' seconds\n');

      resetMetrics();
      metrics.duration = seconds * 1000;
      metrics.isRunning = true;

      var angle = 0;
      var centerX = window.innerWidth / 2;
      var centerY = window.innerHeight / 2;
      var radius = Math.min(centerX, centerY) * 0.8;

      var moveInterval = setInterval(function() {
        angle += 0.1;
        document.dispatchEvent(new MouseEvent('mousemove', {
          clientX: centerX + Math.cos(angle) * radius,
          clientY: centerY + Math.sin(angle) * radius,
          bubbles: true
        }));
      }, 16);

      return new Promise(function(resolve) {
        requestAnimationFrame(function() { measureFrame(resolve); });
      }).then(function(stats) {
        clearInterval(moveInterval);
        return printResults(stats, 'STRESS TEST RESULTS');
      });
    },

    help: function() {
      console.log('\n' + '='.repeat(60));
      console.log('  CURSOR PERFORMANCE TEST SUITE');
      console.log('='.repeat(60));
      console.log('\n  COMMANDS');
      console.log('  cursorPerf.start(5)    Run 5-second test');
      console.log('  cursorPerf.compare()   Compare high vs low perf');
      console.log('  cursorPerf.stress(10)  10-second stress test');
      console.log('  cursorPerf.showFPS()   Show live FPS overlay');
      console.log('  cursorPerf.hideFPS()   Hide FPS overlay');
      console.log('\n  CURSOR DEBUG API');
      console.log('  cursorDebug.setLowPerf(true/false)  Toggle mode');
      console.log('  cursorDebug.getState()              Get state');
      console.log('  cursorDebug.getDeviceInfo()         Get device info');
      console.log('\n  URL PARAMETERS');
      console.log('  ?cursor=lowperf    Force low-perf mode');
      console.log('  ?cursor=highperf   Force high-perf mode');
      console.log('='.repeat(60) + '\n');
    }
  };

  console.log('✅ Cursor Performance Test loaded. Run cursorPerf.help()');
})();
