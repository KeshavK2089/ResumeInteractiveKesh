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
- **Animations**: CSS transitions and scroll-triggered effects
- **Backend**: Express.js
- **Build Tool**: Vite

## Architecture

### Frontend Structure
```
client/src/
├── components/
│   ├── Navigation.tsx      # Fixed header with smooth scroll
│   ├── Hero.tsx           # Full-viewport landing section
│   ├── Experience.tsx     # Timeline with expandable cards
│   ├── Skills.tsx         # Animated progress bars & tag cloud
│   ├── Education.tsx      # Degree cards with GPAs
│   ├── Projects.tsx       # Research project showcase
│   ├── Research.tsx       # PDF viewers for resume & paper
│   └── Contact.tsx        # Contact information display
├── pages/
│   ├── home.tsx          # Main landing page
│   └── not-found.tsx     # 404 page
└── App.tsx               # Root component with routing
```

### Key Features
1. **Responsive Navigation**: Sticky header with active section highlighting, mobile hamburger menu
2. **Hero Section**: Professional introduction with smooth scroll CTAs
3. **Experience Timeline**: 4 positions (Epic Systems, Insulet, Acorda, CSC) with expandable details
4. **Skills Visualization**: 
   - Technical tools as monospace badges
   - Healthcare expertise with animated progress bars (fill on scroll)
5. **Education Cards**: MS and BS degrees with GPA metrics
6. **Projects Showcase**: Capstone research and Cornerstone engineering project
7. **PDF Viewers**: Embedded viewers with zoom, page navigation, and download for:
   - Professional resume
   - Research paper on NIH 3T3 cell migration
8. **Contact Section**: Contact information (email, phone, LinkedIn) with copy-to-clipboard functionality

### Design System
- **Color Palette**: Professional bioengineering theme
  - Primary: Deep blue (hsl(203 87% 38%))
  - Accent: Teal (hsl(180 65% 52%))
- **Typography**: Inter for headings/body, JetBrains Mono for code
- **Spacing**: Consistent rhythm using 4px base unit
- **Components**: Shadcn/ui for buttons, cards, forms, badges
- **Animations**: Scroll-triggered fade-ins, progress bar fills, hover effects

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
