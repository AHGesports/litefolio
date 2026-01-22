# Device mockup libraries for Astro.js with video autoplay

The best solution for Astro.js device mockups with video autoplay is the **Device-Mockup Web Component**, which requires just a single HTML tag with a video source. For more customization, **Devices.css** offers modern Apple/Google device frames with manual video embedding. Both are MIT-licensed, require zero configuration, and support autoplay through the essential `autoplay muted playsinline loop` attributes that browsers require.

## Five libraries that meet all requirements

After evaluating dozens of options, these libraries combine free licensing, easy integration, video support, and Astro compatibility:

| Library | Type | Video Support | Best For |
|---------|------|---------------|----------|
| **Device-Mockup Web Component** | Web Component | Built-in autoplay | Simplest integration |
| **Devices.css (picturepan2)** | Pure CSS | Manual embed | Modern Apple/Google devices |
| **Marvel Devices.css** | Pure CSS | Manual embed | Wide phone variety |
| **Flowbite** | Tailwind CSS | Manual embed | Tailwind projects |
| **daisyUI** | Tailwind CSS | Manual embed | Tailwind with themes |

All five are MIT-licensed and work seamlessly with Astro.js since they require only CSS or vanilla JavaScript—no React/Vue dependencies needed.

## Device-Mockup Web Component offers the easiest video integration

This framework-agnostic web component automatically applies `autoplay`, `loop`, `muted`, and `playsinline` attributes to videos. You simply point it at an MP4 file:

```html
<!-- Install via CDN in your Astro layout -->
<script src="https://cdn.jsdelivr.net/gh/DevManSam777/device-mockup@main/device-mockup.js" defer></script>

<!-- Then use anywhere in your .astro files -->
<device-mockup type="laptop" src="/videos/demo.mp4" alt="Desktop App Demo" width="600"></device-mockup>
<device-mockup type="phone" src="/videos/mobile.mp4" alt="Mobile App Demo" height="400"></device-mockup>
<device-mockup type="tablet" src="/videos/tablet.webm" alt="Tablet Demo" width="450"></device-mockup>
```

The component detects video files by extension and automatically configures playback. It supports **laptop** (16:9), **phone** (9:16), and **tablet** (4:3) mockups with WebM/MP4 video and AVIF/WebP/PNG image fallbacks.

## Devices.css provides the most realistic device frames

This pure CSS library renders pixel-perfect **iPhone 14 Pro**, **MacBook Pro**, **iPad Pro**, **Apple Watch**, and **Google Pixel** devices using only HTML structure and CSS styling. Since it's framework-agnostic, integration with Astro requires just importing the CSS:

```astro
---
// src/components/PhoneMockup.astro
import 'devices.css';
---

<div class="device device-iphone-14-pro">
  <div class="device-frame">
    <div class="device-screen">
      <video autoplay loop muted playsinline style="width:100%;height:100%;object-fit:cover;">
        <source src="/videos/app-demo.mp4" type="video/mp4">
      </video>
    </div>
  </div>
  <div class="device-stripe"></div>
  <div class="device-header"></div>
  <div class="device-sensors"></div>
  <div class="device-btns"></div>
  <div class="device-power"></div>
</div>
```

Available device classes include `device-iphone-14-pro`, `device-iphone-x`, `device-macbook-pro`, `device-ipad-pro`, `device-imac`, `device-google-pixel-6-pro`, and `device-apple-watch-ultra`. Color variants like `device-gold`, `device-silver`, and `device-spacegray` modify the frame appearance.

## MacBook mockup with video example

For laptop/desktop demos, Devices.css offers several options:

```astro
---
// src/components/LaptopMockup.astro
import 'devices.css';

interface Props {
  videoSrc: string;
  device?: 'macbook-pro' | 'macbook' | 'imac' | 'surface-book';
}
const { videoSrc, device = 'macbook-pro' } = Astro.props;
---

<div class={`device device-${device}`}>
  <div class="device-frame">
    <div class="device-screen">
      <video autoplay loop muted playsinline preload="auto">
        <source src={videoSrc} type="video/mp4">
      </video>
    </div>
  </div>
  <div class="device-stripe"></div>
  <div class="device-header"></div>
  <div class="device-btns"></div>
  <div class="device-power"></div>
</div>

<style>
  .device-screen video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
```

Usage in any Astro page:

```astro
---
import LaptopMockup from '../components/LaptopMockup.astro';
---

<LaptopMockup videoSrc="/videos/saas-demo.mp4" device="macbook-pro" />
```

## Flowbite works best for Tailwind CSS projects

If your Astro project uses Tailwind CSS, Flowbite's device mockups require no additional dependencies—just copy the utility classes:

```astro
---
// iPhone-style phone mockup with video
---

<div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
  <!-- Notch -->
  <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
  <!-- Volume buttons -->
  <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
  <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
  <!-- Power button -->
  <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
  <!-- Screen -->
  <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px]">
    <video autoplay loop muted playsinline class="w-[272px] h-[572px] object-cover">
      <source src="/videos/mobile-app.mp4" type="video/mp4">
    </video>
  </div>
</div>
```

For a laptop mockup with Tailwind:

```html
<!-- MacBook-style laptop -->
<div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[294px] max-w-[512px]">
  <div class="rounded-lg overflow-hidden h-[278px]">
    <video autoplay loop muted playsinline class="h-[278px] w-full object-cover">
      <source src="/videos/webapp-demo.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div class="relative mx-auto bg-gray-300 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[21px] max-w-[597px]">
  <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[96px] h-[8px] bg-gray-500"></div>
</div>
```

## Video autoplay requires four essential attributes

Browsers enforce strict autoplay policies. For reliable playback across Chrome, Safari, Firefox, and mobile browsers, **always include all four attributes**:

```html
<video autoplay muted playsinline loop preload="auto">
  <source src="/video.webm" type="video/webm">
  <source src="/video.mp4" type="video/mp4">
</video>
```

- **`autoplay`** — Initiates playback without user interaction
- **`muted`** — Required by all browsers; unmuted autoplay is blocked
- **`playsinline`** — Prevents iOS Safari from hijacking to fullscreen
- **`loop`** — Restarts video continuously for demo purposes

Add a JavaScript fallback for edge cases where autoplay still fails:

```astro
<script>
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('video[autoplay]').forEach(async (video) => {
      try {
        await video.play();
      } catch (err) {
        video.controls = true; // Show controls if autoplay blocked
      }
    });
  });
</script>
```

## Astro-specific integration patterns

**Method 1: Import CSS from npm packages**
```astro
---
// Works with devices.css installed via npm
import 'devices.css';
---
```

**Method 2: Link external CSS in layout**
```astro
---
// src/layouts/Layout.astro
---
<head>
  <link rel="stylesheet" href="https://cdn.example.com/devices.css">
</head>
```

**Method 3: Web components load automatically**
```astro
<head>
  <script src="https://cdn.jsdelivr.net/gh/DevManSam777/device-mockup@main/device-mockup.js" defer></script>
</head>
<body>
  <device-mockup type="phone" src="/demo.mp4"></device-mockup>
</body>
```

For view transitions, add `transition:persist` to maintain video playback state during navigation:

```astro
<video autoplay muted loop playsinline transition:persist>
  <source src="/demo.mp4" type="video/mp4">
</video>
```

## Complete reusable component example

Here's a production-ready Astro component supporting all three device types:

```astro
---
// src/components/DeviceFrame.astro
import 'devices.css';

interface Props {
  type: 'iphone' | 'macbook' | 'ipad';
  videoSrc: string;
  color?: 'black' | 'silver' | 'gold';
}

const { type, videoSrc, color = 'black' } = Astro.props;

const deviceClasses = {
  iphone: 'device-iphone-14-pro',
  macbook: 'device-macbook-pro', 
  ipad: 'device-ipad-pro'
};
---

<div class={`device ${deviceClasses[type]} device-${color}`}>
  <div class="device-frame">
    <div class="device-screen">
      <video autoplay loop muted playsinline preload="auto">
        <source src={videoSrc} type="video/mp4">
      </video>
    </div>
  </div>
  <div class="device-stripe"></div>
  <div class="device-header"></div>
  <div class="device-sensors"></div>
  <div class="device-btns"></div>
  <div class="device-power"></div>
</div>

<style>
  .device-screen video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
</style>
```

Usage:

```astro
---
import DeviceFrame from '../components/DeviceFrame.astro';
---

<section class="hero">
  <DeviceFrame type="iphone" videoSrc="/videos/mobile-app.mp4" color="silver" />
  <DeviceFrame type="macbook" videoSrc="/videos/desktop-app.mp4" />
  <DeviceFrame type="ipad" videoSrc="/videos/tablet-app.mp4" color="gold" />
</section>
```

## Conclusion

For the fastest implementation, use the **Device-Mockup Web Component** with a single script tag and HTML element. For pixel-perfect device frames with more customization, **Devices.css** provides the most realistic mockups while remaining pure CSS. Tailwind users should leverage **Flowbite's** utility-class approach. All solutions are MIT-licensed, support video autoplay when using the required `autoplay muted playsinline loop` attributes, and integrate seamlessly with Astro's component model without requiring client-side JavaScript frameworks.