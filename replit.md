# Keshav Kotteswaran - Interactive Resume Website

## Project Overview
A modern, interactive portfolio website showcasing professional experience, skills, education, research, and projects for Keshav Kotteswaran, a bioengineering professional specializing in project management and systems engineering.

## Purpose
Create a visually stunning online presence with:
- Professional experience timeline
- Interactive skills visualization
- Embedded PDF viewers for resume and research paper
- Contact information display with copy-to-clipboard
- Smooth animations and responsive design

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom bioengineering theme (blues/teals)
- **UI Components**: Shadcn/ui (Radix UI primitives)
- **PDF Viewing**: React-PDF with PDF.js
- **Animations**: Advanced scroll animation system with Intersection Observer, parallax effects, 3D transforms, animated gradients
- **Backend**: Express.js
- **Build Tool**: Vite

## Architecture

### Frontend Structure
```
client/src/
├── components/
│   ├── Navigation.tsx      # Fixed glassmorphism header with smooth scroll
│   ├── Hero.tsx           # Parallax hero with Boston skyline & animated gradients
│   ├── Experience.tsx     # Timeline with 3D card effects & logo animations
│   ├── Skills.tsx         # Slide-in animated badge displays
│   ├── Education.tsx      # Scale-in cards with 3D hover effects
│   ├── Projects.tsx       # Research project showcase
│   ├── Research.tsx       # PDF viewers for resume & paper
│   ├── Contact.tsx        # Contact information display
│   └── ScrollProgress.tsx # Fixed progress bar with gradient fill
├── hooks/
│   ├── useScrollAnimation.ts  # Intersection Observer for scroll reveals
│   ├── useParallax.ts         # Parallax scrolling effects
│   └── useScrollProgress.ts   # Page scroll percentage tracking
├── pages/
│   ├── home.tsx          # Main landing page
│   └── not-found.tsx     # 404 page
└── App.tsx               # Root component with routing & ScrollProgress
```

### Key Features
1. **Scroll Progress Indicator**: Fixed gradient bar at top showing scroll position (0-100%)
2. **Responsive Navigation**: Glassmorphism sticky header with active section highlighting, mobile hamburger menu
3. **Hero Section**: Parallax Boston skyline background with dark gradient overlay, staggered fade-in animations, floating button effects
4. **Experience Timeline**: 4 positions with:
   - Scroll-reveal animations with staggered delays
   - 3D card hover effects with perspective transforms
   - Company logo rotation animations on hover
   - Expandable details with smooth transitions
5. **Skills Visualization**: 
   - Slide-in animations from left/right on scroll
   - Badge hover scale effects (110%)
   - Animated gradient section titles
6. **Education Cards**: 
   - Scale-in animations with staggered delays
   - 3D tilt effects on hover
   - Enhanced shadow elevations
7. **Projects Showcase**: Capstone research and Cornerstone engineering project
8. **PDF Viewers**: Embedded viewers with zoom, page navigation, and download for:
   - Professional resume
   - Research paper on NIH 3T3 cell migration
9. **Contact Section**: Contact information (email, phone, LinkedIn) with copy-to-clipboard functionality

### Design System
- **Color Palette**: Professional bioengineering theme
  - Primary: Deep blue (hsl(203 87% 38%))
  - Accent: Teal (hsl(180 65% 52%))
- **Typography**: Inter for headings/body, JetBrains Mono for code
- **Spacing**: Consistent rhythm using 4px base unit
- **Components**: Shadcn/ui for buttons, cards, forms, badges
- **Animations**: 
  - Scroll-triggered reveals (fade-in, slide-in, scale-in)
  - Parallax scrolling effects
  - 3D card transforms with perspective
  - Animated gradients on section titles
  - Hover elevations and scale effects
  - Staggered entrance animations
  - Glassmorphism with backdrop blur

## Content
- **Experience**: 4 positions from 2020-2025
- **Skills**: 8 technical tools, 7 healthcare expertise areas
- **Education**: MS (3.76 GPA) and BS (3.56 GPA) in Bioengineering from Northeastern
- **Projects**: 2 major projects (Capstone, Cornerstone)
- **Documents**: Resume PDF and 252-page research paper PDF

## Recent Changes
- 2024-11-13: Initial implementation with complete frontend components
- Configured bioengineering color palette (blues/teals)
- Implemented all sections with exceptional attention to visual quality
- Added React-PDF integration for document viewing
- Removed contact form to minimize costs - now displays contact info only
- Added 1-year caching for PDFs to reduce bandwidth costs
- 2024-11-13: Simplified Skills section by removing progress bars - now displays as clean badges
- 2024-11-13: Added company logos to Experience timeline for enhanced visual appeal
- 2024-11-14: Added Boston skyline background image to Hero section with dark gradient overlay for optimal text readability
- 2024-11-14: Created GitHub Pages deployment infrastructure (build script, workflow, documentation)
- 2024-11-14: **Major Animation System Overhaul** - Implemented competition-winning visual enhancements:
  - Created custom scroll animation hooks (useScrollAnimation, useParallax, useScrollProgress)
  - Added ScrollProgress component with animated gradient progress bar
  - Implemented parallax scrolling on hero background
  - Added 3D card hover effects with perspective transforms
  - Created animated gradient text on all section titles
  - Added staggered entrance animations throughout all sections
  - Implemented slide-in, fade-in, and scale-in scroll animations
  - Added hover elevations and scale effects on interactive elements
  - Created glassmorphism effects on navigation
  - Added company logo rotation animations on hover
  - All animations tested and verified working smoothly

## Development Notes
- Follow design_guidelines.md for all UI implementations
- Use existing Shadcn components (Button, Card, Badge, etc.)
- Maintain consistent spacing and typography throughout
- All interactive elements have proper data-testid attributes for testing
- PDFs are served from attached_assets directory

## User Preferences
- Professional, clean design with generous white space
- Smooth animations and interactions
- Mobile-first responsive approach
- Focus on readability and visual hierarchy
