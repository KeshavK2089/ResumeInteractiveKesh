# Design Guidelines: Interactive Resume Website for Keshav Kotteswaran

## Design Approach
**Reference-Based Strategy**: Drawing inspiration from Linear's clean professionalism, Notion's content organization, and modern portfolio sites like Stripe careers pages. Focus on clarity, visual hierarchy, and subtle sophistication that emphasizes content over decoration.

## Typography System
- **Headings**: Inter or similar geometric sans-serif, bold weights (700) for impact
  - Hero name: 4xl-6xl (56-72px desktop, 40-48px mobile)
  - Section headings: 3xl-4xl (36-48px desktop, 28-36px mobile)
  - Subsection titles: xl-2xl (20-28px)
- **Body**: Regular weight (400-500), 16-18px base size, 1.6-1.8 line-height for readability
- **Accents**: Medium weight (600) for labels, metrics, and emphasis
- **Monospace**: For technical skills tags (Fira Code or JetBrains Mono)

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 to py-32 desktop, py-12 to py-16 mobile
- Component spacing: gap-8 for cards, gap-4 for list items
- Container: max-w-6xl for content sections, max-w-7xl for full-width areas
- Grid systems: 12-column base, collapsing to single column on mobile

## Hero Section
**Full-viewport impact with professional imagery**
- Large hero image: Professional headshot or abstract bioengineering visual (microscopy, cellular patterns) as background with subtle overlay
- Content centered vertically: Name (hero typography), tagline ("Bioengineering Professional | Project Manager | Systems Engineering"), brief 2-line introduction
- Two primary CTAs with blurred backgrounds: "View Resume" and "Read Research"
- Smooth scroll indicator at bottom
- Height: min-h-screen with content centered

## Navigation
**Fixed header approach**
- Sticky navbar: backdrop-blur effect when scrolled, transparent initially
- Logo/name on left, navigation links centered or right-aligned
- Mobile: Hamburger menu with full-screen overlay
- Active section: subtle underline or weight change
- Links: Home, Experience, Skills, Education, Projects, Research, Contact

## Experience Timeline
**Asymmetric card layout with interactive expansion**
- Left-aligned timeline with connection lines
- Cards: Expand on hover/click to reveal detailed responsibilities
- Each card includes: Company logo placeholder, role title (bold), location, dates, 2-3 key bullet points visible, "Read more" expansion
- Stagger animation on scroll entry
- Grid: Single column mobile, 2-column desktop with timeline on left

## Skills Visualization
**Multi-format presentation**
- Technical Tools: Tag cloud with monospace font, varying sizes by proficiency
- Healthcare Expertise: Horizontal progress bars that animate on scroll (0-100% based on proficiency level)
- Categories clearly labeled with medium-weight headings
- Grid: 2-column desktop (Technical | Healthcare), single column mobile
- Progress bars: h-2 height, rounded-full, smooth transition animation

## Education Section
**Clean card-based layout**
- Two cards for MS and BS degrees
- Each card: University name (bold), degree title, GPA (prominent metric style), concentration/minor details
- Horizontal layout desktop, stacked mobile
- Subtle elevation (shadow-md)

## PDF Viewer Sections
**Dedicated full-screen capable viewers**
- Resume Viewer: Embedded React-PDF component with controls bar (zoom in/out, download, page nav)
- Research Paper Viewer: Same controls plus abstract preview card above viewer
- Abstract card: max-w-3xl, includes title, authors, brief summary (3-4 lines)
- Viewers: min-h-screen sections with white/neutral background, controls sticky at top
- Mobile: Optimized touch controls, pinch-to-zoom support

## Projects Showcase
**Interactive card grid**
- 2-column grid desktop, single column mobile
- Cards: Image placeholder at top (project diagrams), title, 2-3 line description, tech stack tags
- Hover: Subtle lift effect (translateY)
- CTA per card: "Learn More" or "View Details"

## Contact Section
**Split layout with visual balance**
- Left column: Contact form (name, email, message) with clean inputs
- Right column: Contact info, social links (LinkedIn, GitHub), email with copy-to-clipboard button
- Professional headshot: Circular, 200px diameter, positioned top of right column
- Form inputs: Consistent height (h-12), rounded borders, focus states with outline
- Desktop: 2-column (60/40 split), Mobile: Stacked with headshot at top

## Component Library

**Buttons**
- Primary: Solid fill, rounded-lg, px-6 py-3, medium weight text
- Secondary: Outline style, same dimensions
- Icon buttons: Square (w-10 h-10), for copy-to-clipboard, PDF controls
- All buttons: Smooth transitions, hover states with slight scale or shadow changes

**Cards**
- Base: rounded-xl, shadow-sm, p-6 to p-8 depending on content
- Hover states: shadow-md transition for interactive cards
- Consistent border-radius across all cards

**Form Inputs**
- Height: h-12 for text inputs, h-32 for textarea
- Border: 1px width, rounded-lg
- Labels: Above inputs, text-sm, medium weight
- Focus: Visible outline with offset

**Tags/Badges**
- Technical skills: Monospace font, px-3 py-1, rounded-full, text-sm
- Inline for lists, wrap on mobile

## Animations
**Minimal and purposeful**
- Scroll-triggered: Fade-in for sections (opacity + translateY), stagger for timeline items
- Hover: Scale (1.02-1.05), shadow transitions, slight lifts
- Progress bars: Width animation from 0 to target on scroll into view
- Page transitions: None - instant navigation
- Loading: Simple spinner for PDF loading states

## Responsive Breakpoints
- Mobile: < 640px (single column, stacked layouts)
- Tablet: 640-1024px (2-column where appropriate, adjusted spacing)
- Desktop: > 1024px (full multi-column layouts, maximum spacing)

## Accessibility Standards
- Semantic HTML throughout (header, nav, main, section, article, footer)
- ARIA labels for interactive elements (hamburger menu, PDF controls)
- Keyboard navigation: All interactive elements focusable, visible focus states
- Alt text: Required for professional headshot, project images, company logos
- Color contrast: WCAG AA minimum (will be addressed in visual treatment)
- Skip navigation link for screen readers

## Images
**Strategic placement for professional impact**
- Hero background: Large professional headshot or abstract bioengineering visual (microscopy imagery, cellular structures) - full viewport width, subtle overlay for text contrast
- Professional headshot: Contact section, circular crop, 200px diameter
- Project thumbnails: Placeholder diagrams or process flows for Capstone/Cornerstone projects
- Company logos: Small icons (24-32px) in timeline cards for Epic, Insulet, Acorda, CSC
- Note: Hero section includes large background image with text overlay

---

**Implementation Priority**: Build sections in order: Navigation → Hero → Experience Timeline → Skills → Education → Projects → PDF Viewers → Contact. This ensures core content is established before adding document viewing functionality.