# A Stronger Idea — Design System Tokens

All tokens are defined in `src/app/globals.css` inside the `@theme` block and global CSS rules.
This document is the single source of truth for every design decision in the codebase.

---

## Colors

### Brand

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#E04834` | Brand midpoint. Links, hover states, eyebrow text, checkbox checked bg |
| `--color-primary-dark` | `#C0392B` | Gradient end, pressed states |
| `--color-primary-light` | `#FF5744` | Gradient start |
| Brand gradient | `linear-gradient(160deg, #FF5744, #C0392B)` | Primary button fill, CTA section bg, accent cards |

### Surfaces

| Token | Value | Usage |
|-------|-------|-------|
| `--color-surface-white` | `#ffffff` | `.section-white` — default section bg |
| `--color-surface-gray` | `#f0f0f0` | `.section-gray` — alternating section bg |
| `--color-surface-dark` | `#1B2126` | `.section-dark` — footer, dark CTAs |

### Backgrounds (Relume semantic)

| Token | Value |
|-------|-------|
| `--color-background` | `#ffffff` |
| `--color-background-primary` | `#ffffff` |
| `--color-background-secondary` | `#f0f0f0` |
| `--color-background-tertiary` | `#666666` |
| `--color-background-alternative` | `#1B2126` |
| `--color-background-success` | `#ecfdf3` |
| `--color-background-error` | `#fef3f2` |

### Text

| Token | Value | Usage |
|-------|-------|-------|
| `--color-text` | `#111111` | Default body text |
| `--color-text-primary` | `#111111` | Primary text |
| `--color-text-secondary` | `#666666` | Muted/secondary text |
| `--color-text-alternative` | `#ffffff` | Text on dark/CTA sections |

### Links

| Token | Value |
|-------|-------|
| `--color-link` | `#E04834` |
| `--color-link-primary` | `#E04834` |
| `--color-link-secondary` | `#666666` |
| `--color-link-alternative` | `#ffffff` |

### Borders

| Token | Value | Usage |
|-------|-------|-------|
| `--color-border` | `#e0e0e0` | Default borders |
| `--color-border-primary` | `#e0e0e0` | Card/section borders, secondary button border |
| `--color-border-secondary` | `#aaaaaa` | Stronger borders |
| `--color-border-tertiary` | `#444444` | Dark-context borders |
| `--color-border-alternative` | `#ffffff` | Borders on dark backgrounds |
| Dark section border | `#333333` | `.section-dark .border-border-primary` |

### Neutral Palette

| Token | Value |
|-------|-------|
| `--color-neutral` | `#666666` |
| `--color-neutral-white` | `#ffffff` |
| `--color-neutral-lightest` | `#f0f0f0` |
| `--color-neutral-lighter` | `#cccccc` |
| `--color-neutral-light` | `#aaaaaa` |
| `--color-neutral-dark` | `#444444` |
| `--color-neutral-darker` | `#222222` |
| `--color-neutral-darkest` | `#111111` |
| `--color-neutral-black` | `#000000` |
| `--color-brand-black` | `#000000` |
| `--color-brand-white` | `#ffffff` |

---

## Typography

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `--font-heading` | `"Ubuntu", sans-serif` | All headlines h1-h6, display text, section titles |
| `--font-body` | `"Open Sans", sans-serif` | Body text, paragraphs, labels, nav, buttons, captions |
| `--font-mono` | `"IBM Plex Mono", monospace` | Stats numbers, pricing amounts, eyebrows/taglines |

Google Fonts import loads these weights:
- Ubuntu: 300, 400, 500, 700
- Open Sans: 300, 400, 500, 600, 700
- IBM Plex Mono: 400, 500, 600, 700

### Font Weights

| Context | Weight | Notes |
|---------|--------|-------|
| All headlines (h1-h6) | `200` | Forced via `!important` — overrides Relume `font-bold` |
| Display (`.text-display`) | `200` | Hero-only, largest text on page |
| Eyebrows (`p.font-semibold`) | `300` | Light mono, uppercase |
| Body text | `400` | Default via Open Sans |

### Font Sizes (Relume Scale)

| Token | Size | Line Height |
|-------|------|-------------|
| `--text-xs` | `0.75rem` (12px) | 1.5 |
| `--text-sm` | `0.875rem` (14px) | 1.5 |
| `--text-base` | `1rem` (16px) | 1.5 |
| `--text-md` | `1.125rem` (18px) | 1.5 |
| `--text-lg` | `1.25rem` (20px) | 1.5 |
| `--text-xl` | `1.25rem` (20px) | 1.4 |
| `--text-2xl` | `1.5rem` (24px) | 1.4 |
| `--text-3xl` | `1.75rem` (28px) | 1.4 |
| `--text-4xl` | `2.25rem` (36px) | 1.3 |
| `--text-5xl` | `2.75rem` (44px) | 1.2 |
| `--text-6xl` | `3rem` (48px) | 1.2 |
| `--text-7xl` | `3.25rem` (52px) | 1.2 |
| `--text-8xl` | `3.5rem` (56px) | 1.2 |
| `--text-9xl` | `4rem` (64px) | 1.2 |
| `--text-10xl` | `4.5rem` (72px) | 1.2 |

### Display Class (`.text-display`)

| Breakpoint | Size |
|------------|------|
| Base | `4.5rem` (72px) |
| md (768px) | `5.5rem` (88px) |
| lg (992px) | `6.5rem` (104px) |

Additional properties: `line-height: 1.05`, `letter-spacing: -0.06em`, `font-weight: 200`

### Letter Spacing

| Element | Value |
|---------|-------|
| Display | `-0.06em` |
| h1 | `-0.05em` |
| h2 | `-0.045em` |
| h3 | `-0.035em` |
| h4 | `-0.025em` |
| h5, h6 | `normal` |
| Eyebrows | `0.05em` |

### Line Heights

| Element | Value |
|---------|-------|
| Display | `1.05` |
| h1 | `1.1` |
| h2 | `1.15` |
| h3 | `1.2` |
| h4 | `1.3` |
| h5, h6 | `1.3` |
| Body text | `1.5` (via font-size line-height tokens) |

---

## Spacing

### Relume Extras

| Token | Value |
|-------|-------|
| `--spacing-18` | `4.5rem` (72px) |
| `--spacing-30` | `7.5rem` (120px) |

Standard Tailwind spacing scale also applies (4, 8, 12, 16, 20, 24, etc.).

### Section Padding

Sections use Relume's default `py-16 md:py-24 lg:py-28` pattern (varies per component).

---

## Container & Max Widths

### Container

```css
/* Base: full width, centered */
margin-inline: auto;
width: 100%;
/* lg (992px+): max-width 992px */
/* xl (1280px+): max-width 1280px */
```

### Max-Width Scale (Relume)

| Token | Value |
|-------|-------|
| `--max-w-xxs` | `20rem` (320px) |
| `--max-w-xs` | `25rem` (400px) |
| `--max-w-sm` | `30rem` (480px) |
| `--max-w-md` | `35rem` (560px) |
| `--max-w-lg` | `48rem` (768px) |
| `--max-w-xl` | `64rem` (1024px) |
| `--max-w-xxl` | `80rem` (1280px) |
| `--max-w-full` | `100%` |

---

## Breakpoints

| Token | Value | Notes |
|-------|-------|-------|
| `--breakpoint-sm` | `480px` | Small mobile |
| `--breakpoint-md` | `768px` | Tablet |
| `--breakpoint-lg` | `992px` | Desktop |
| `--breakpoint-xl` | `1280px` | Wide desktop |
| `--breakpoint-xxl` | `1440px` | Ultra-wide |

---

## Shadows (Relume Scale)

| Token | Value |
|-------|-------|
| `--shadow-xxsmall` | `0px 1px 2px rgba(0,0,0,0.05)` |
| `--shadow-xsmall` | `0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px rgba(0,0,0,0.06)` |
| `--shadow-small` | `0px 4px 8px -2px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.06)` |
| `--shadow-medium` | `0px 12px 16px -4px rgba(0,0,0,0.08), 0px 4px 6px -2px rgba(0,0,0,0.03)` |
| `--shadow-large` | `0px 20px 24px -4px rgba(0,0,0,0.08), 0px 8px 8px -4px rgba(0,0,0,0.03)` |
| `--shadow-xlarge` | `0px 24px 48px -12px rgba(0,0,0,0.18)` |
| `--shadow-xxlarge` | `0px 32px 64px -12px rgba(0,0,0,0.14)` |

---

## Border Radii

| Context | Value |
|---------|-------|
| Cards, testimonials, challenge panels | `rounded-2xl` (1rem) |
| Images, videos (global rule) | `0.75rem` (12px) |
| Buttons (primary, secondary) | `9999px` (pill) |
| Eyebrow pill | `9999px` (pill) |
| Checkboxes | `3px` |
| Link-style buttons | `0` (no radius) |

---

## Buttons

### Primary Button

- **Background:** `linear-gradient(160deg, #FF5744, #C0392B)`
- **Text:** white
- **Border:** none
- **Border-radius:** `9999px` (pill)
- **Hover:** padding-right expands to `2.5em`, white arrow icon fades in at right

### Secondary Button

- **Background:** transparent
- **Border:** `1px solid #e0e0e0`
- **Text:** `var(--color-text-primary)` (#111111)
- **Border-radius:** `9999px` (pill)
- **Hover:** background fills `#f0f0f0`, padding-right expands to `2.5em`, dark arrow fades in

### Secondary on Dark (`.section-dark`)

- **Border:** `rgba(255,255,255,0.5)`
- **Text:** white
- **Hover bg:** `rgba(255,255,255,0.15)`
- **Arrow:** white stroke

### Primary on CTA (`.section-cta`)

- **Background:** white (inverted)
- **Text:** `var(--color-primary-dark)` (#C0392B)
- **Hover bg:** `rgba(255,255,255,0.9)`

### Secondary on CTA (`.section-cta`)

- **Background:** none
- **Border:** `1px solid white`
- **Text:** white
- **Hover:** `opacity: 0.8`

### Link-Style Button

- **Background:** none
- **Border:** none
- **Border-radius:** `0`
- **Display:** `inline-flex`, `align-items: center`, `gap: 0.25rem`
- **Hover:** entire link + chevron SVG turns `var(--color-primary)` (#E04834)

### Arrow Hover Behavior

All primary and secondary buttons use a `::after` pseudo-element:
- Hidden by default (`opacity: 0`)
- On hover: `opacity: 1`, positioned `right: 1em`, vertically centered
- Icon: inline SVG arrow (right-pointing), `1em` square
- Primary arrows are white; secondary arrows are `#111111` (dark on dark: white)

---

## Components

### Eyebrows / Taglines (`p.font-semibold`)

- Font: `var(--font-mono)` (IBM Plex Mono)
- Weight: 300
- Color: `var(--color-primary)` (#E04834)
- Transform: uppercase
- Letter-spacing: `0.05em`
- Size: `0.75rem`
- Background: `rgba(224, 72, 52, 0.08)` (light red tint)
- Padding: `0.25rem 0.75rem`
- Border-radius: `9999px` (pill)
- Display: `inline-block`, `width: fit-content`

### Section Backgrounds

Sections alternate between white and gray. Dark sections for CTAs and footer.

| Class | Background | Text Color |
|-------|-----------|------------|
| `.section-white` | `#ffffff` | `#111111` (default) |
| `.section-gray` | `#f0f0f0` | `#111111` (default) |
| `.section-dark` | `#1B2126` | `#ffffff` |
| `.section-cta` | `linear-gradient(160deg, #FF5744, #C0392B)` | `#ffffff` |

Typical page pattern:
Navbar (white) > Hero (white) > Stats (gray) > Timeline (white) > Features (gray) > CTA (white) > Case Studies (gray) > CTA (white) > Benefits (gray) > Audience (white) > CTA (gray) > Pricing (white) > Testimonials (gray) > FAQ (white) > Footer (dark)

### Navbar

- Hides on scroll down (> 80px), shows on scroll up
- Logo: `h-10 w-auto`
- Inner content max-width: `1280px`, centered
- Mobile breakpoint: `max-width: 991px`

### Checkboxes (`button[role="checkbox"]`)

- Size: `1.125rem` (18px) square
- Border: `1px solid #e0e0e0`
- Border-radius: `3px`
- Checked state: bg `var(--color-primary)`, border matches, white checkmark
- Label spacing: `padding-left: 0.5rem`

### Links & Social Icons

- All links hover: `color: var(--color-primary)`, `transition: color 0.2s ease`
- Social SVG icons hover: turn `var(--color-primary)`

### Accordion (Radix UI)

- Trigger: full-width flex, `justify-content: space-between`, padding `1rem` top/bottom
- Chevron: `flex-shrink: 0`, `margin-left: auto`
- Content region: `padding-bottom: 1.25rem`
- Open animation: `accordion-down 0.2s ease-out`
- Close animation: `accordion-up 0.2s ease-out`

---

## Animations

| Token | Keyframes | Duration | Easing |
|-------|-----------|----------|--------|
| `--animate-accordion-down` | `accordion-down` (0 -> content height) | 0.2s | ease-out |
| `--animate-accordion-up` | `accordion-up` (content height -> 0) | 0.2s | ease-out |
| `--animate-loop-horizontally` | `translateX(0)` -> `translateX(-100%)` | 20s | linear infinite |
| `--animate-loop-testimonials` | `translateX(0)` -> `translateX(-135rem)` | 30s | linear infinite |
| `--animate-loop-vertically` | `translateY(0)` -> `translateY(-50%)` | 30s | linear infinite |
| `--animate-loop-vertically-top` | `translateY(0)` -> `translateY(-50%)` | 50s | linear infinite |
| `--animate-loop-vertically-bottom` | `translateY(-50%)` -> `translateY(0)` | 50s | linear infinite |
| `--animate-marquee-horizontally` | `marquee-top` | 30s | linear infinite |
| `--animate-marquee-top` | `translateX(0)` -> `translateX(-50%)` | 50s | linear infinite |
| `--animate-marquee-right` | `translateX(0)` -> `translateX(100%)` | 25s | linear infinite |
| `--animate-marquee-bottom` | `translateX(-50%)` -> `translateX(0)` | 50s | linear infinite |
| `--animate-marquee-left` | `translateX(100%)` -> `translateX(0)` | 25s | linear infinite |
| `--animate-tabs` | `opacity: 0` -> `opacity: 1` | 0.6s | `cubic-bezier(0.4, 0, 0.2, 1)` forwards |

### Button Arrow Animation

- Padding transition: `padding 0.3s ease`
- Arrow opacity transition: `opacity 0.3s ease`
- Link hover color transition: `color 0.2s ease`

---

## Global Rules

- `overflow-x: hidden` on html and body (prevents horizontal scroll)
- `-webkit-font-smoothing: antialiased` / `-moz-osx-font-smoothing: grayscale`
- All `<img>` and `<video>` elements get `border-radius: 0.75rem` except logos and avatar-sized images (`size-12`, `size-16`, `rounded-full`)
- `.no-scrollbar` utility hides scrollbars (webkit + firefox)
- `.brand-gradient` applies the gradient as a background
- `.brand-gradient-text` applies gradient as clipped text fill
