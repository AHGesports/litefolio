# Technical Skills Section - UI/UX Design Document

## Overview

This document outlines the design considerations and recommendations for displaying technical skills on Arshia Hemati's portfolio website. The goal is to showcase ~20 skill categories in a way that is visually appealing, scannable, and aligned with the current minimalist black/white design aesthetic.

---

## Current Design Context

### Existing Style Characteristics
- **Color Palette:** Strictly black and white with subtle grays
- **Typography:** IBM Plex Mono, bold uppercase for headings
- **Layout:** Clean grids, generous whitespace
- **Interactions:** Subtle hovers, blur effects on nav, minimal animations
- **Tone:** Professional, modern, developer-focused

### Current Projects Section
- Bento-style grid layout
- Cards with borders and rounded corners
- Mix of card sizes (spanning multiple columns/rows)

---

## The Challenge

### Content Volume
- **20 main categories** of skills
- **100+ individual technologies** across all categories
- **Multiple proficiency levels** (Expert, Proficient, Familiar)

### Design Constraints
- Must not overwhelm the visitor
- Should be scannable in seconds
- Must work on mobile devices
- Should invite exploration without requiring it
- Must maintain the minimalist aesthetic

---

## Approach Analysis

### Approach 1: Grouped Pillars (Recommended)

**Concept:** Consolidate 20 categories into 5-6 main skill pillars.

**Proposed Groupings:**

| Pillar | Categories Included |
|--------|---------------------|
| **Languages** | Programming Languages |
| **Backend** | Backend Frameworks, Databases, Authentication, Backend Libraries |
| **Frontend** | Frontend Frameworks, Styling & CSS |
| **DevOps & Quality** | DevOps & CI/CD, Testing |
| **AI & Automation** | AI & ML Integration, Automation, Web Scraping |
| **Specialized** | Hardware Integration, Desktop Apps, Game Dev, External Services |

**Visual Layout:**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│  Languages  │ │   Backend   │ │  Frontend   │
│  ⬡ ⬡ ⬡ ...  │ │  ⬡ ⬡ ⬡ ... │ │  ⬡ ⬡ ⬡ ... │
└─────────────┘ └─────────────┘ └─────────────┘
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│DevOps & QA  │ │AI & Automat.│ │ Specialized │
│  ⬡ ⬡ ⬡ ...  │ │  ⬡ ⬡ ⬡ ... │ │  ⬡ ⬡ ⬡ ... │
└─────────────┘ └─────────────┘ └─────────────┘
```

**Pros:**
- Clean 2x3 or 3x2 grid
- Everything visible at once
- No scrolling required to discover content
- Works great on all screen sizes
- Familiar pattern for visitors

**Cons:**
- Loses some granularity
- Grouping decisions are subjective

---

### Approach 2: Horizontal Carousel

**Concept:** Show 3-4 cards at a time with horizontal scroll.

**Visual Layout:**
```
← ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌───  →
   │Languages│ │ Backend │ │Frontend │ │...
   │ ⬡ ⬡ ⬡  │ │ ⬡ ⬡ ⬡  │ │ ⬡ ⬡ ⬡  │ │
   └─────────┘ └─────────┘ └─────────┘ └───
```

**Pros:**
- Can show all 20 categories without grouping
- Modern, app-like feel
- Touch-friendly on mobile
- Compact vertical footprint

**Cons:**
- Hidden content (users must scroll to discover)
- Can feel endless/overwhelming
- Less accessible than visible grid
- Users might miss categories

---

### Approach 3: Masonry/Bento Grid with Variable Sizes

**Concept:** Different card sizes based on skill importance/expertise level.

**Visual Layout:**
```
┌───────────────────┐ ┌─────────┐ ┌─────────┐
│    Languages      │ │ Testing │ │  CI/CD  │
│   (Large Card)    │ │ (Small) │ │ (Small) │
│    ⬡ ⬡ ⬡ ⬡ ⬡     │ └─────────┘ └─────────┘
└───────────────────┘ ┌─────────────────────┐
┌─────────┐ ┌───────┐ │      Backend        │
│Frontend │ │  AI   │ │    (Large Card)     │
│ (Medium)│ │(Small)│ │      ⬡ ⬡ ⬡ ⬡       │
└─────────┘ └───────┘ └─────────────────────┘
```

**Pros:**
- Visual hierarchy through size
- Highlights strongest skills
- Visually interesting
- Matches existing projects section style

**Cons:**
- Complex to implement responsively
- Size decisions add bias
- Can look chaotic with 20 items
- Harder to scan systematically

---

### Approach 4: Tabbed Interface

**Concept:** Top-level tabs for main categories, content changes below.

**Visual Layout:**
```
[ Languages ] [ Backend ] [ Frontend ] [ DevOps ] [ AI ] [ Other ]
─────────────────────────────────────────────────────────────────
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   Expert: C#, JavaScript, TypeScript, PL/SQL, SQL          │
│   ⬡      ⬡           ⬡            ⬡       ⬡               │
│                                                             │
│   Proficient: Python, C                                     │
│   ⬡           ⬡                                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Pros:**
- Very organized
- Can show full detail per category
- Familiar UI pattern
- No information overload

**Cons:**
- Requires interaction to see anything
- Users might not explore all tabs
- Less visual impact initially
- Feels more "application" than "portfolio"

---

### Approach 5: Accordion List

**Concept:** Vertical stack of expandable sections.

**Visual Layout:**
```
┌─────────────────────────────────────────────┐
│ ▸ Programming Languages          ⬡ ⬡ ⬡ ... │
├─────────────────────────────────────────────┤
│ ▸ Backend Frameworks             ⬡ ⬡ ⬡ ... │
├─────────────────────────────────────────────┤
│ ▾ Frontend Frameworks            ⬡ ⬡ ⬡ ... │
│   ┌─────────────────────────────────────┐   │
│   │ Angular 17-18, Astro, React, Blazor │   │
│   │ RxJS, Angular Signals, PrimeNG...   │   │
│   └─────────────────────────────────────┘   │
├─────────────────────────────────────────────┤
│ ▸ Databases                      ⬡ ⬡ ⬡ ... │
└─────────────────────────────────────────────┘
```

**Pros:**
- Can show all 20 categories
- Progressive disclosure
- Very mobile-friendly
- Clear organization

**Cons:**
- Takes a lot of vertical space
- Less visually exciting
- Feels like documentation more than portfolio
- One-at-a-time exploration

---

### Approach 6: Icon Cloud / Tag Cloud

**Concept:** All technology icons displayed in a cloud formation with hover details.

**Visual Layout:**
```
         ⬡        ⬡    ⬡
      ⬡     ⬡  ⬡    ⬡     ⬡
   ⬡    ⬡      ⬡  ⬡    ⬡    ⬡
      ⬡    ⬡  ⬡     ⬡    ⬡
         ⬡     ⬡  ⬡    ⬡
              ⬡    ⬡
```

**Pros:**
- Visually striking
- Shows breadth at a glance
- Interactive and playful
- Memorable

**Cons:**
- No clear organization
- Hard to find specific skills
- Can feel chaotic
- Accessibility concerns
- Difficult to show proficiency levels

---

## Recommendation: Hybrid Approach

Based on the analysis, I recommend a **hybrid of Approach 1 (Grouped Pillars) + Modal Details**.

### Implementation Details

#### Main View: 6 Skill Pillars

```
┌────────────────────────────────────────────────────────────────┐
│                        SKILLS                                   │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │  LANGUAGES   │  │   BACKEND    │  │   FRONTEND   │         │
│  │              │  │              │  │              │         │
│  │  C# JS TS ◌  │  │ .NET Node ◌  │  │ Angular  ◌   │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   DEVOPS     │  │  AI & AUTO   │  │ SPECIALIZED  │         │
│  │              │  │              │  │              │         │
│  │ Docker Git ◌ │  │ OpenAI  ◌    │  │  Unity   ◌   │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Card Design

Each card contains:
1. **Category title** (uppercase, small)
2. **2-3 primary icons** (most prominent/expert skills)
3. **Fading icon** (indicates "more" - with `opacity-30`)
4. **Hover state:** Slight lift, border highlight
5. **Click action:** Opens modal with full details

```
┌─────────────────────────────┐
│  PROGRAMMING LANGUAGES      │  ← Small uppercase title
│                             │
│    [C#]  [JS]  [TS]  [◌]   │  ← Icons (last one faded)
│                             │
│  Click to explore →         │  ← Subtle hint text
└─────────────────────────────┘
```

#### Modal Design

When clicked, a modal opens with full category breakdown:

```
┌─────────────────────────────────────────────────────────────┐
│                                                         [×] │
│  PROGRAMMING LANGUAGES                                      │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  EXPERT                                                     │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                   │
│  │ C#  │ │ JS  │ │ TS  │ │PL/SQL│ │ SQL │                   │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                   │
│                                                             │
│  PROFICIENT                                                 │
│  ┌─────┐ ┌─────┐                                           │
│  │ Py  │ │  C  │                                           │
│  └─────┘ └─────┘                                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Detailed Groupings

### Pillar 1: Languages
- **Expert:** C#, JavaScript, TypeScript, PL/SQL, SQL
- **Proficient:** Python, C

### Pillar 2: Backend
**Frameworks:**
- .NET 8, .NET Framework 4.8, ASP.NET MVC/API, Entity Framework Core
- Express.js, Fastify, FastAPI

**Databases:**
- Oracle, PostgreSQL, MySQL, MsSQL
- Redis, LowDB

**APIs & Auth:**
- REST, gRPC, SOAP, GraphQL
- JWT, OAuth 2.0, SSO, RBAC

### Pillar 3: Frontend
**Frameworks:**
- Angular 17-18, Astro, React, Blazor
- RxJS, Angular Signals

**Styling:**
- Tailwind CSS, Bootstrap, SCSS
- Razor, Handlebars, EJS

**Components:**
- PrimeNG, SyncFusion, DHTMLX

### Pillar 4: DevOps & Quality
**DevOps:**
- Git, GitHub, GitLab, Gitea
- Docker, Azure DevOps, Jira
- Winston, log4net

**Testing:**
- Jest, xUnit, pytest
- Moq, FluentAssertions, AutoFixture
- TDD methodology

### Pillar 5: AI & Automation
**AI/ML:**
- OpenAI, Anthropic Claude, Google Gemini
- LangChain, MCP Protocol

**Browser Automation:**
- Playwright, Puppeteer, Selenium
- Browser-use, Skyvern, Stagehand

**Scraping & Anti-Detection:**
- BeautifulSoup, Apify, FireCrawl
- AdsPower, Camoufox, stealth plugins

**Workflow:**
- n8n, Activepieces, BullMQ

### Pillar 6: Specialized
**Desktop:**
- WPF, Tauri, PyInstaller

**Hardware:**
- Thermal printers, barcode scanners, card readers

**Domains:**
- Multi-tenant B2B, POS systems
- Reservation & ticketing platforms
- Accreditation systems

**Game Dev (Hobby):**
- Unity, Three.js

---

## Interaction Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  1. User sees 6 skill pillars with icons                        │
│     ↓                                                           │
│  2. Hover: Card lifts slightly, cursor changes                  │
│     ↓                                                           │
│  3. Click: Modal fades in with full category breakdown          │
│     ↓                                                           │
│  4. Modal shows proficiency levels + all technologies           │
│     ↓                                                           │
│  5. Click outside or × to close                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Responsive Behavior

### Desktop (1024px+)
- 3 columns × 2 rows grid
- Full icon display
- Hover effects enabled

### Tablet (768px - 1023px)
- 2 columns × 3 rows grid
- Slightly smaller cards
- Touch-friendly tap areas

### Mobile (< 768px)
- 1 column × 6 rows (stacked)
- Full-width cards
- Bottom sheet modal instead of centered modal

---

## Animation & Micro-interactions

1. **Card hover:** `transform: translateY(-4px)` + shadow increase
2. **Icon hover:** Subtle scale `1.1`
3. **Modal open:** Fade in `opacity 0→1` + scale `0.95→1`
4. **Modal close:** Reverse of open
5. **Fading icon:** `opacity: 0.3` with `filter: blur(1px)`

---

## Accessibility Considerations

- All icons have proper `aria-label` attributes
- Modal is keyboard navigable (Tab, Escape to close)
- Focus trap inside modal when open
- Sufficient color contrast
- Screen reader announces modal content

---

## Icon Sources

Recommended icon libraries (all free):
- **Simple Icons** (simpleicons.org) - Brand/tech logos
- **Devicon** (devicon.dev) - Developer technology icons
- **SVGL** (svgl.app) - Already used in the project

---

## Alternative: Keep All 20 Categories

If grouping feels too restrictive, consider:

### Option A: Scrollable Grid
- 4-column grid that scrolls vertically
- 5 rows of 4 cards = 20 cards
- Section height capped, scroll to see all

### Option B: Two-Section Split
- **"Core Skills"** (6 most important) - Visible
- **"All Skills"** - Expandable section below

### Option C: Filter Chips
- Show all categories as clickable chips
- Click to highlight/expand that category
- More interactive, exploratory feel

---

## Next Steps

1. **Confirm groupings** - Review the 6 pillars and adjust as needed
2. **Gather icons** - Collect SVGs for top 3-4 techs per pillar
3. **Design modal** - Finalize modal layout and content structure
4. **Implement** - Build the component with animations
5. **Test** - Verify on mobile and with keyboard navigation

---

## Summary

| Aspect | Recommendation |
|--------|----------------|
| **Layout** | 6 pillars in 3×2 grid |
| **Card Content** | Title + 2-3 icons + faded "more" icon |
| **Interaction** | Click to open modal |
| **Modal Content** | Full breakdown by proficiency level |
| **Mobile** | Stack to single column, bottom sheet modal |
| **Animation** | Subtle lifts, fades, and scales |

This approach maintains the minimalist aesthetic while providing depth for those who want to explore further.
