# A Stronger Idea Design — Project Rules

## Stack
- **Framework:** Next.js (App Router) with React
- **Styling:** Tailwind CSS
- **Components:** Relume UI library
- **Deployment:** Vercel (auto-deploy from GitHub)
- **Domain:** astrongeridea.design

## Critical Rules

### Never Design — Always Use Relume Components
- NEVER create custom UI components or layouts from scratch
- ALWAYS ask the user for the Relume component code before building any section
- Use the original Relume components EXACTLY as-is — do NOT modify styling
- You may use Chrome browser to browse/pick Relume components, but default to asking the user
- Only build custom UI if the user explicitly asks for it
- Do NOT apply the design system until the user says to — wireframe first

### Design System (apply ONLY when told to)

#### Typography
- **Headlines:** Ubuntu
- **Body text:** Open Sans

#### Colors
- **Primary:** `#D44527`
- **Primary Dark:** `#B83A20`
- **Primary Light:** `#E8634A`

### Component Workflow
1. User provides a Relume component (JSX/TSX code)
2. Drop it into `src/components/` with a clear name — DO NOT MODIFY IT
3. Import it on the page
4. Only swap content/apply design system when explicitly asked

### Content Source
- All content comes from the existing site: https://www.astrongeridea.design
- Do not invent copy. Pull from the live site or ask the user.
