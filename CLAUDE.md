# A Stronger Idea Design — Project Rules

## Stack
- **Framework:** Next.js (App Router) with React
- **Styling:** Tailwind CSS v4
- **Components:** Relume UI library
- **Deployment:** Vercel (auto-deploy from GitHub)
- **Domain:** astrongeridea.design

## Critical Rules

### Never Design — Always Use Relume Components
- NEVER create custom UI components or layouts from scratch
- ALWAYS ask the user for the Relume component code before building any section
- Use the original Relume components as-is — only modify content and apply the design system
- Only build custom UI if the user explicitly asks for it

## Design System

### Typography (3 fonts only)
| Font | Usage | CSS Variable |
|------|-------|-------------|
| **Ubuntu** | All headlines (h1–h6), display text, section titles | `--font-heading` |
| **Open Sans** | Body text, paragraphs, labels, nav, buttons, captions | `--font-body` |
| **IBM Plex Mono** | Stats numbers, pricing amounts, data figures | `--font-mono` |

Applied globally via `globals.css` — all `h1-h6` tags automatically use Ubuntu, body uses Open Sans. No other fonts.

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#E04834` | Midpoint of brand gradient. Hover states, links, secondary button border |
| `--color-primary-dark` | `#C0392B` | Gradient end, pressed states |
| `--color-primary-light` | `#FF5744` | Gradient start |
| Brand gradient | `linear-gradient(160deg, #FF5744, #C0392B)` | Primary button fill |
| `--color-surface-white` | `#ffffff` | White section backgrounds |
| `--color-surface-gray` | `#f0f0f0` | Gray section backgrounds |
| `--color-surface-dark` | `#111111` | Footer background |

### Buttons
- **Primary:** gradient fill (`linear-gradient(160deg, #FF5744, #C0392B)`), white text, fully rounded (`border-radius: 9999px`)
- **Secondary:** transparent bg, 1px solid border in primary color, primary color text, fully rounded. On hover: fills with primary, text goes white
- All buttons are pill-shaped (max border-radius)

### Section Backgrounds (alternating)
Sections alternate between white and gray. The pattern:
- Navbar: white
- Hero: white
- Stats: **gray**
- Timeline: white
- Features: **gray**
- CTA: white
- Case Studies: **gray**
- CTA: white
- Benefits: **gray**
- Audience: white
- CTA: **gray**
- Pricing: white
- Testimonials: **gray**
- FAQ: white
- Footer: **dark** (black bg, white text)

Use wrapper divs with `section-white`, `section-gray`, or `section-dark` classes.

### Navbar & Footer
- Navbar inner content: `max-width: 1280px`, centered, matches container
- Logo: `h-10 w-auto` in both navbar and footer
- Footer: dark background (`#111111`), all text white

### Content Source
- All content comes from: https://www.astrongeridea.design
- Do not invent copy. Pull from the live site or ask the user.
