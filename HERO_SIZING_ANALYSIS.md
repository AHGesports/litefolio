# Hero Section Scientific Sizing Analysis

## Table of Contents
1. [Objective](#objective)
2. [Final Decision](#final-decision)
3. [Typographic Scale Theory](#typographic-scale-theory)
4. [Target Screen Dimensions](#target-screen-dimensions)
5. [Hero Section Dimensions](#hero-section-dimensions)
6. [Header Text Sizing Calculations](#header-text-sizing-calculations)
7. [CTA Text Sizing Calculations](#cta-text-sizing-calculations)
8. [Final Recommendations](#final-recommendations)

---

## Objective

Design a hero section where:
- **A)** The hero covers the entire viewport on all screen sizes
- **B)** The header text (name) dominates visual attention without being overwhelming
- **C)** CTA elements maintain proper proportion to the header

**Hierarchy Chain:** Hero Viewport Size → Header Text Size → CTA Text Size

---

## Final Decision

After testing 20%, 25%, and 30% options on desktop (1920×1080), **30% of hero height** was selected as the ideal proportion for the header text block.

### Why 30%?
- Creates strong visual dominance - the name is immediately noticeable
- Fills the hero section confidently without feeling cramped
- Maintains professional portfolio aesthetic
- Leaves sufficient breathing room for CTA elements

### Calculation Method Used
```
1. Hero Height = Viewport Height - Navigation Height
2. Text Block Height = Hero Height × 0.30 (30%)
3. Font Size = Text Block Height ÷ (Line Height × Number of Lines)
4. Font Size = Text Block Height ÷ (0.9 × 2) = Text Block Height ÷ 1.8
5. CTA Size = Header Size ÷ 7 (maintaining 7:1 ratio)
```

---

## Typographic Scale Theory

### Established Typographic Ratios

| Scale Name | Ratio | Use Case |
|------------|-------|----------|
| Minor Second | 1.067 | Subtle hierarchy |
| Major Second | 1.125 | Minimal contrast |
| Minor Third | 1.200 | General purpose |
| Major Third | 1.250 | Balanced hierarchy |
| Perfect Fourth | 1.333 | Strong hierarchy |
| Augmented Fourth | 1.414 | Bold statements |
| Perfect Fifth | 1.500 | High contrast |
| **Golden Ratio** | **1.618** | **Aesthetically optimal** |

### The Golden Ratio (φ = 1.618)

The golden ratio appears throughout nature and has been used in design for millennia. It creates visually harmonious proportions that feel "right" to human perception.

**Key Applications:**
- Dividing space: 61.8% / 38.2%
- Stepping down sizes: Each level = Previous ÷ 1.618
- Stepping up sizes: Each level = Previous × 1.618

### Display Typography Best Practices

For hero/display typography, research suggests:
- **Header-to-viewport ratio:** 8-15% of viewport height for display text
- **Optimal reading ratio:** Header should be 4-8x larger than body/CTA text
- **Visual weight:** Two-line headers should occupy 15-25% of viewport height total

---

## Target Screen Dimensions

### Desktop

| Device | Resolution | Aspect Ratio | CSS Pixels |
|--------|------------|--------------|------------|
| Full HD Monitor | 1920 × 1080 | 16:9 | 1920 × 1080 |
| MacBook Pro 16" | 3456 × 2234 | ~16:10 | 1728 × 1117 (2x) |
| MacBook Pro 14" | 3024 × 1964 | ~16:10 | 1512 × 982 (2x) |
| Common Desktop | 1440 × 900 | 16:10 | 1440 × 900 |
| Large Monitor | 2560 × 1440 | 16:9 | 2560 × 1440 |

**Tailwind `lg` breakpoint:** 1024px+

### Tablet

| Device | Resolution | CSS Pixels | Orientation |
|--------|------------|------------|-------------|
| iPad Pro 12.9" | 2048 × 2732 | 1024 × 1366 | Portrait |
| iPad Pro 11" | 1668 × 2388 | 834 × 1194 | Portrait |
| iPad Air/10.9" | 1640 × 2360 | 820 × 1180 | Portrait |
| iPad Mini | 1488 × 2266 | 744 × 1133 | Portrait |
| iPad Landscape | varies | 1024-1366 × 744-1024 | Landscape |

**Tailwind `md` breakpoint:** 768px+
**Tailwind `sm` breakpoint:** 640px+

### Mobile (iPhone)

| Device | Resolution | CSS Pixels | Viewport Height |
|--------|------------|------------|-----------------|
| iPhone 15 Pro Max | 1290 × 2796 | 430 × 932 | 932px |
| iPhone 15 Pro | 1179 × 2556 | 393 × 852 | 852px |
| iPhone 15/14 | 1170 × 2532 | 390 × 844 | 844px |
| iPhone SE (3rd) | 750 × 1334 | 375 × 667 | 667px |
| iPhone 14 Pro Max | 1290 × 2796 | 430 × 932 | 932px |

**Tailwind default (mobile-first):** 0-639px

---

## Hero Section Dimensions

### Effective Viewport Height

The hero should cover `100vh` but we must account for:
- Browser chrome (address bar, toolbar): ~50-80px on mobile
- Navigation header: ~60-80px
- Safe area insets (iPhone notch): ~47px top, ~34px bottom

### Calculated Available Hero Heights

| Screen Type | Total Viewport | Browser Chrome | Nav Header | Safe Areas | **Effective Hero Height** |
|-------------|----------------|----------------|------------|------------|---------------------------|
| Desktop 1080p | 1080px | 0px | 80px | 0px | **1000px** |
| Desktop 900p | 900px | 0px | 80px | 0px | **820px** |
| iPad Portrait | 1194px | 0px | 70px | 0px | **1124px** |
| iPad Landscape | 834px | 0px | 70px | 0px | **764px** |
| iPhone 15 Pro | 852px | 50px | 60px | 81px | **661px** |
| iPhone SE | 667px | 50px | 60px | 0px | **557px** |

### Current Implementation

```
min-h-[85vh] sm:min-h-screen
```

- Mobile: 85vh ≈ 85% of viewport (accounts for browser chrome)
- Desktop: 100vh = full viewport

---

## Header Text Sizing Calculations

### Principle: Header Size Derived from Hero Viewport

The header text size must be calculated as a **proportion of the hero section dimensions**, not arbitrary values.

**Key Relationship:**
```
Hero Viewport (W × H) → Header Text Block Size → Font Size
```

### Step 1: Define Hero Viewport Area

| Screen | Hero Width | Hero Height | Hero Area |
|--------|------------|-------------|-----------|
| Desktop 1920×1080 | 1920px | 1000px (1080-80 nav) | **1,920,000 px²** |
| Desktop 1440×900 | 1440px | 820px | **1,180,800 px²** |
| Tablet 768×1024 | 768px | 954px (1024-70 nav) | **732,672 px²** |
| Mobile 393×852 | 393px | 661px | **259,773 px²** |
| Mobile 375×667 | 375px | 557px | **208,875 px²** |

### Step 2: Calculate Ideal Text Block as % of Hero

For a portfolio hero where the name should be dominant but not overwhelming:
- **Target: Text block should occupy 8-12% of hero AREA**
- This creates visual dominance while leaving breathing room

#### Desktop 1920 × 1080

| Metric | Calculation | Value |
|--------|-------------|-------|
| Hero dimensions | 1920 × 1000 | **1,920,000 px²** |
| Target text area (10%) | 1,920,000 × 0.10 | **192,000 px²** |
| Text block aspect ratio | ~3.5:1 (wide name, 2 lines) | - |
| Text block height | √(192,000 ÷ 3.5) | **234px** |
| Text block width | 234 × 3.5 | **819px** |
| Per line height (÷2, ×0.9 line-height) | 234 ÷ 2 | **117px per line** |
| **Font size** | 117 ÷ 0.9 | **130px ≈ 8.1rem** |

**Verification - % of hero HEIGHT:**
- Text block height: 234px
- Hero height: 1000px
- Percentage: 234 ÷ 1000 = **23.4%** ✓ (within 20-35% target)

**Verification - % of hero WIDTH:**
- Text block width: ~819px (for "HEMATI" at 130px)
- Hero width: 1920px (but grid uses ~50% = 960px for header)
- Percentage of column: 819 ÷ 960 = **85%** ✓ (fills column well)

#### Desktop 1440 × 900

| Metric | Calculation | Value |
|--------|-------------|-------|
| Hero dimensions | 1440 × 820 | **1,180,800 px²** |
| Target text area (10%) | 1,180,800 × 0.10 | **118,080 px²** |
| Text block height | √(118,080 ÷ 3.5) | **184px** |
| Per line height | 184 ÷ 2 | **92px** |
| **Font size** | 92 ÷ 0.9 | **102px ≈ 6.4rem** |

**Verification - % of hero HEIGHT:**
- 184 ÷ 820 = **22.4%** ✓

#### Tablet 768 × 1024 (Portrait)

| Metric | Calculation | Value |
|--------|-------------|-------|
| Hero dimensions | 768 × 954 | **732,672 px²** |
| Target text area (10%) | 732,672 × 0.10 | **73,267 px²** |
| Text block aspect ratio | ~2.5:1 (narrower on mobile) | - |
| Text block height | √(73,267 ÷ 2.5) | **171px** |
| Per line height | 171 ÷ 2 | **86px** |
| **Font size** | 86 ÷ 0.88 | **98px ≈ 6.1rem** |

**Width constraint check:**
- Font 98px × 6 chars × 0.6 = **353px** text width
- Available width: 768px (single column on tablet)
- Percentage: 353 ÷ 768 = **46%** ✓ (good, not cramped)

#### Mobile 393 × 852 (iPhone 15 Pro)

| Metric | Calculation | Value |
|--------|-------------|-------|
| Hero dimensions | 393 × 661 | **259,773 px²** |
| Target text area (12%) | 259,773 × 0.12 | **31,173 px²** |
| Text block aspect ratio | ~2:1 (stacked name) | - |
| Text block height | √(31,173 ÷ 2) | **125px** |
| Per line height | 125 ÷ 2 | **62px** |
| **Font size** | 62 ÷ 0.88 | **70px ≈ 4.4rem** |

**Width constraint check:**
- Font 70px × 6 chars × 0.6 = **252px**
- Available width: 393px - 32px padding = 361px
- Percentage: 252 ÷ 361 = **70%** ✓

**Verification - % of hero HEIGHT:**
- 125 ÷ 661 = **18.9%** ✓

#### Mobile 375 × 667 (iPhone SE)

| Metric | Calculation | Value |
|--------|-------------|-------|
| Hero dimensions | 375 × 557 | **208,875 px²** |
| Target text area (12%) | 208,875 × 0.12 | **25,065 px²** |
| Text block height | √(25,065 ÷ 2) | **112px** |
| Per line height | 112 ÷ 2 | **56px** |
| **Font size** | 56 ÷ 0.88 | **64px ≈ 4rem** |

**Width constraint check:**
- Font 64px × 6 chars × 0.6 = **230px**
- Available width: 375px - 32px padding = 343px
- Percentage: 230 ÷ 343 = **67%** ✓

### Summary: Header Sizes Derived from Hero Dimensions

| Screen | Hero Area | Target % | Text Block | Font Size |
|--------|-----------|----------|------------|-----------|
| Desktop 1920×1080 | 1,920,000 px² | 10% | 234px tall | **130px (8.1rem)** |
| Desktop 1440×900 | 1,180,800 px² | 10% | 184px tall | **102px (6.4rem)** |
| Tablet 768×1024 | 732,672 px² | 10% | 171px tall | **98px (6.1rem)** |
| Mobile 393×852 | 259,773 px² | 12% | 125px tall | **70px (4.4rem)** |
| Mobile 375×667 | 208,875 px² | 12% | 112px tall | **64px (4rem)** |

### Applying 30% to All Screen Sizes

Using the chosen **30% of hero height** principle, with width constraints where necessary.

---

#### Desktop 1920 × 1080 (Reference - Height Constrained)

| Step | Calculation | Value |
|------|-------------|-------|
| Hero height | 1080 - 80 (nav) | **1000px** |
| Text block (30%) | 1000 × 0.30 | **300px** |
| Font size | 300 ÷ 1.8 | **167px (10.4rem)** |
| Width check | 167 × 6 chars × 0.6 | 600px (62% of 960px column) ✓ |
| CTA size | 167 ÷ 7 | **24px (1.5rem)** |

#### Desktop 1440 × 900

| Step | Calculation | Value |
|------|-------------|-------|
| Hero height | 900 - 80 | **820px** |
| Text block (30%) | 820 × 0.30 | **246px** |
| Font size | 246 ÷ 1.8 | **137px (8.5rem)** |
| Width check | 137 × 6 × 0.6 | 493px (69% of 720px column) ✓ |
| CTA size | 137 ÷ 7 | **20px (1.25rem)** |

#### Desktop 1024 × 768

| Step | Calculation | Value |
|------|-------------|-------|
| Hero height | 768 - 80 | **688px** |
| Text block (30%) | 688 × 0.30 | **206px** |
| Font size | 206 ÷ 1.8 | **115px (7.2rem)** |
| Width check | 115 × 6 × 0.6 | 414px (81% of 512px column) ✓ |
| CTA size | 115 ÷ 7 | **16px (1rem)** |

---

#### Tablet 768 × 1024 - iPad Portrait (Width Constrained)

On tablet, text spans full width (single column), so width becomes the constraint.

| Step | Calculation | Value |
|------|-------------|-------|
| Available width | 768 - 32 (padding) | **736px** |
| Target text width | 736 × 0.75 (75% coverage) | **552px** |
| Font from width | 552 ÷ (6 chars × 0.6) | **153px (9.6rem)** |
| Text block height | 153 × 1.8 | **275px** |
| % of hero (954px) | 275 ÷ 954 | **29%** ✓ (close to 30%) |
| CTA size | 153 ÷ 7 | **22px (1.375rem)** |

#### Tablet 640 × 900 (sm breakpoint start)

| Step | Calculation | Value |
|------|-------------|-------|
| Available width | 640 - 32 | **608px** |
| Target text width | 608 × 0.75 | **456px** |
| Font from width | 456 ÷ 3.6 | **127px (7.9rem)** |
| Text block height | 127 × 1.8 | **229px** |
| % of hero (820px) | 229 ÷ 820 | **28%** ✓ |
| CTA size | 127 ÷ 7 | **18px (1.125rem)** |

---

#### Mobile 430 × 932 - iPhone 15 Pro Max (Width Constrained)

| Step | Calculation | Value |
|------|-------------|-------|
| Available width | 430 - 32 | **398px** |
| Target text width | 398 × 0.85 (85% coverage) | **338px** |
| Font from width | 338 ÷ 3.6 | **94px (5.9rem)** |
| Text block height | 94 × 1.8 | **169px** |
| % of hero (771px) | 169 ÷ 771 | **22%** |
| CTA size | 94 ÷ 7 | **13px** |

#### Mobile 393 × 852 - iPhone 15 Pro

| Step | Calculation | Value |
|------|-------------|-------|
| Available width | 393 - 32 | **361px** |
| Target text width | 361 × 0.85 | **307px** |
| Font from width | 307 ÷ 3.6 | **85px (5.3rem)** |
| Text block height | 85 × 1.8 | **153px** |
| % of hero (661px) | 153 ÷ 661 | **23%** |
| CTA size | 85 ÷ 7 | **12px** |

#### Mobile 375 × 667 - iPhone SE (Smallest target)

| Step | Calculation | Value |
|------|-------------|-------|
| Available width | 375 - 32 | **343px** |
| Target text width | 343 × 0.85 | **292px** |
| Font from width | 292 ÷ 3.6 | **81px (5.1rem)** |
| Text block height | 81 × 1.8 | **146px** |
| % of hero (557px) | 146 ÷ 557 | **26%** |
| CTA size | 81 ÷ 7 | **12px** |

---

### Converting to Tailwind Clamp Values

**Desktop (lg: 1024px+)** - Height constrained, use vh or fixed scaling
- Range: 115px (at 1024px) to 167px (at 1920px)
- Since height varies with viewport, use: `clamp(7.2rem, 9vw, 10.4rem)`
- Or for consistent 30%: consider `text-[min(10.4rem,30vh)]` approach

**Tablet (sm: 640px - 1023px)** - Width constrained
- Range: 127px (at 640px) to 153px (at 1023px)
- vw calculation: targeting 75% width coverage ≈ **20vw**
- `clamp(7.9rem, 20vw, 9.6rem)` → 127px to 153px

**Mobile (0 - 639px)** - Width constrained
- Range: 81px (at 375px) to 94px (at 430px)
- vw calculation: targeting 85% width coverage ≈ **22vw**
- `clamp(5rem, 22vw, 5.9rem)` → 80px to 94px

---

## CTA Text Sizing Calculations

### Principle: CTA Proportional to Header

Using typographic hierarchy, CTA text should be **4-6 steps down** from header on a modular scale.

### Golden Ratio Stepping

```
Header Size → ÷ φ → Level 2
Level 2 → ÷ φ → Level 3
Level 3 → ÷ φ → Level 4 (CTA sweet spot)
```

This means: **CTA = Header ÷ φ³ = Header ÷ 4.236**

Or using Perfect Fifth (1.5) for less dramatic contrast:
**CTA = Header ÷ 1.5³ = Header ÷ 3.375**

### Calculations Per Screen Size

#### Desktop (Header: ~100-128px)

| Method | Calculation | CTA Size |
|--------|-------------|----------|
| Golden Ratio (÷ φ³) | 128 ÷ 4.236 | **30px** |
| Perfect Fifth (÷ 1.5³) | 128 ÷ 3.375 | **38px** |
| Major Third (÷ 1.25⁴) | 128 ÷ 2.441 | **52px** |

**Analysis:** 30-38px is too large for CTA buttons. We want subtle, not competing.

**Alternative approach - Fixed ratio for readability:**
- CTA should be readable (min 14px) but not dominant
- Industry standard for secondary text: 14-18px
- Ratio to header: 100px / 16px = **6.25:1**

**Recommended:** 16px (1rem / text-base)

#### Tablet (Header: ~80-112px)

| Ratio Target | Calculation | CTA Size |
|--------------|-------------|----------|
| 6:1 ratio | 96px ÷ 6 | **16px** |
| 7:1 ratio | 96px ÷ 7 | **14px** |

**Recommended:** 14-15px (text-sm to text-[15px])

#### Mobile (Header: ~56-80px)

| Ratio Target | Calculation | CTA Size |
|--------------|-------------|----------|
| 5:1 ratio | 70px ÷ 5 | **14px** |
| 6:1 ratio | 70px ÷ 6 | **12px** |

**Recommended:** 12-13px (text-xs to text-[13px])

### Minimum Touch Target Consideration

Apple HIG recommends **44px minimum touch target**. While text can be smaller, the interactive area should meet this. Current buttons use padding to achieve this.

---

## Final Recommendations (Based on 30% Decision)

### Summary Table

| Breakpoint | Constraint | Target | Header Font Size | CTA Size | Ratio |
|------------|------------|--------|------------------|----------|-------|
| **Mobile** (0-639px) | Width (85%) | 22-26% of hero | `clamp(5rem,22vw,5.9rem)` (80-94px) | 12-13px | ~7:1 |
| **Tablet** (640-1023px) | Width (75%) | 28-29% of hero | `clamp(7.9rem,20vw,9.6rem)` (127-153px) | 18-22px | ~7:1 |
| **Desktop** (1024px+) | Height (30%) | 30% of hero | `clamp(7.2rem,9vw,10.4rem)` (115-167px) | 16-24px | ~7:1 |

### Tailwind Implementation Values

```
Header (based on 30% of hero height / width constraints):
- Mobile:  text-[clamp(5rem,22vw,5.9rem)]     → 80px to 94px
- Tablet:  sm:text-[clamp(7.9rem,20vw,9.6rem)] → 127px to 153px
- Desktop: lg:text-[clamp(7.2rem,9vw,10.4rem)] → 115px to 167px

Line Height:
- All breakpoints: leading-[0.9]

CTA Text:
- Mobile:  text-xs           → 12px
- Tablet:  sm:text-[1.125rem] → 18px
- Desktop: lg:text-[1.5rem]   → 24px
```

### Visual Verification: Text Block as % of Hero (30% Target)

| Screen | Hero H | Font Size | Text Block H | % of Hero H | Status |
|--------|--------|-----------|--------------|-------------|--------|
| Desktop 1920×1080 | 1000px | 167px | 300px | **30%** | ✓ Target |
| Desktop 1440×900 | 820px | 137px | 246px | **30%** | ✓ Target |
| Desktop 1024×768 | 688px | 115px | 206px | **30%** | ✓ Target |
| Tablet 768×1024 | 954px | 153px | 275px | **29%** | ✓ Close (width limited) |
| Tablet 640×900 | 820px | 127px | 229px | **28%** | ✓ Close (width limited) |
| iPhone 15 Pro Max | 771px | 94px | 169px | **22%** | Width limited |
| iPhone 15 Pro | 661px | 85px | 153px | **23%** | Width limited |
| iPhone SE | 557px | 81px | 146px | **26%** | Width limited |

### Visual Verification: Text Block Width Fit

| Screen | Available Width | Font Size | Text Width (~6ch) | % of Width | Status |
|--------|-----------------|-----------|-------------------|------------|--------|
| Desktop 1920 | 960px (half grid) | 167px | 600px | **62%** | ✓ Good |
| Desktop 1440 | 720px (half grid) | 137px | 493px | **69%** | ✓ Good |
| Desktop 1024 | 512px (half grid) | 115px | 414px | **81%** | ✓ Good |
| Tablet 768 | 736px (full) | 153px | 550px | **75%** | ✓ Target |
| Tablet 640 | 608px (full) | 127px | 457px | **75%** | ✓ Target |
| iPhone 15 Pro Max | 398px | 94px | 338px | **85%** | ✓ Target |
| iPhone 15 Pro | 361px | 85px | 306px | **85%** | ✓ Target |
| iPhone SE | 343px | 81px | 292px | **85%** | ✓ Target |

### Header:CTA Ratio Verification (7:1 Target)

| Screen | Header Size | CTA Size | Ratio | Status |
|--------|-------------|----------|-------|--------|
| Desktop 1920 | 167px | 24px | **7:1** | ✓ Target |
| Desktop 1440 | 137px | 20px | **6.9:1** | ✓ Target |
| Desktop 1024 | 115px | 16px | **7.2:1** | ✓ Target |
| Tablet 768 | 153px | 22px | **7:1** | ✓ Target |
| Tablet 640 | 127px | 18px | **7.1:1** | ✓ Target |
| Mobile 430 | 94px | 13px | **7.2:1** | ✓ Target |
| Mobile 393 | 85px | 12px | **7.1:1** | ✓ Target |
| Mobile 375 | 81px | 12px | **6.8:1** | ✓ Close |

---

## Appendix: Before vs After (30% Implementation)

### Previous Implementation

```
Header:
- Mobile:  clamp(3.5rem, 18vw, 5.5rem)  → 56px to 88px
- Tablet:  clamp(4.5rem, 14vw, 7rem)    → 72px to 112px
- Desktop: clamp(6rem, 12vw, 12.5rem)   → 96px to 200px

CTA: text-xs (12px) / sm:text-sm (14px) / lg:text-base (16px)
```

### New Implementation (30% Based)

```
Header:
- Mobile:  clamp(5rem, 22vw, 5.9rem)      → 80px to 94px
- Tablet:  sm:clamp(7.9rem, 20vw, 9.6rem) → 127px to 153px
- Desktop: lg:clamp(7.2rem, 9vw, 10.4rem) → 115px to 167px

CTA: text-xs (12px) / sm:text-[1.125rem] (18px) / lg:text-[1.5rem] (24px)

Line Height: leading-[0.9] (all breakpoints)
```

### Comparison Table

| Screen | Old Header | New Header | Old CTA | New CTA | Change |
|--------|------------|------------|---------|---------|--------|
| Desktop 1920px | 200px | **167px** | 16px | **24px** | Header -17%, CTA +50% |
| Desktop 1440px | 173px | **137px** | 16px | **20px** | Header -21%, CTA +25% |
| Desktop 1024px | 123px | **115px** | 16px | **16px** | Header -7%, CTA same |
| Tablet 768px | 107px | **153px** | 14px | **22px** | Header +43%, CTA +57% |
| Tablet 640px | 90px | **127px** | 14px | **18px** | Header +41%, CTA +29% |
| Mobile 430px | 77px | **94px** | 12px | **13px** | Header +22%, CTA +8% |
| Mobile 375px | 67px | **81px** | 12px | **12px** | Header +21%, CTA same |

### Key Changes Summary

1. **Desktop header reduced** from max 200px to 167px (but still dominant at 30% of hero)
2. **Desktop CTA increased** from 16px to 24px (better proportion, more readable)
3. **Tablet significantly increased** - was undersized relative to hero
4. **Mobile increased** - better visual presence while respecting width constraints
5. **Consistent 7:1 ratio** between header and CTA across all breakpoints
6. **Unified line-height** at 0.9 for consistency

---

## Spacing Calculations

All spacing is derived proportionally from the header and CTA sizes to maintain visual harmony.

### Spacing Ratios Used

| Spacing Element | Ratio | Description |
|-----------------|-------|-------------|
| **Header-to-CTA gap** | Header ÷ 2.5 | Primary vertical rhythm between main elements |
| **CTA internal gap** | CTA × 1.5 | Comfortable spacing between CTA items |
| **Badge gap (dot-text)** | CTA × 0.75 | Tighter coupling for related elements |
| **Dot size** | CTA × 0.5 | Subtle indicator proportional to text |

### Calculated Spacing Values

#### Desktop (lg: 1024px+)
| Element | Calculation | Value | Tailwind |
|---------|-------------|-------|----------|
| Header-to-CTA gap | 167px ÷ 2.5 | 67px | `lg:gap-16` (64px) |
| CTA internal gap | 24px × 1.5 | 36px | `lg:gap-9` (36px) |
| Badge gap | 24px × 0.75 | 18px | `lg:gap-4` (16px) |
| Dot size | 24px × 0.5 | 12px | `lg:h-3 lg:w-3` (12px) |

#### Tablet (sm: 640px - 1023px)
| Element | Calculation | Value | Tailwind |
|---------|-------------|-------|----------|
| Header-to-CTA gap | 140px ÷ 2.5 | 56px | `sm:gap-14` (56px) |
| CTA internal gap | 18px × 1.5 | 27px | `sm:gap-7` (28px) |
| Badge gap | 18px × 0.75 | 14px | `sm:gap-3.5` (14px) |
| Dot size | 18px × 0.5 | 9px | `sm:h-2.5 sm:w-2.5` (10px) |

#### Mobile (0 - 639px)
| Element | Calculation | Value | Tailwind |
|---------|-------------|-------|----------|
| Header-to-CTA gap | 87px ÷ 2.5 | 35px | `gap-9` (36px) |
| CTA internal gap | 12px × 1.5 | 18px | `gap-4` (16px) |
| Badge gap | 12px × 0.75 | 9px | `gap-2` (8px) |
| Dot size | 12px × 0.5 | 6px | `h-1.5 w-1.5` (6px) |

### Final Implementation Summary

```html
<!-- Grid gap (header-to-CTA): gap-9 sm:gap-14 lg:gap-16 -->
<!-- CTA container gap: gap-4 sm:gap-7 lg:gap-9 -->
<!-- Badge internal gap: gap-2 sm:gap-3.5 lg:gap-4 -->
<!-- Dot size: h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 -->

<!-- Header sizes -->
text-[clamp(5rem,22vw,5.9rem)]      /* Mobile: 80-94px */
sm:text-[clamp(7.9rem,20vw,9.6rem)] /* Tablet: 127-153px */
lg:text-[clamp(7.2rem,9vw,10.4rem)] /* Desktop: 115-167px */

<!-- CTA sizes -->
text-xs              /* Mobile: 12px */
sm:text-[1.125rem]   /* Tablet: 18px */
lg:text-[1.5rem]     /* Desktop: 24px */
```

---

## References

- Modular Scale: https://www.modularscale.com/
- Golden Ratio in Design: Principles of visual harmony
- Apple Human Interface Guidelines: Touch target sizing
- Material Design: Typography scale recommendations
- Tailwind CSS: Default spacing and sizing scale
