
# HLS Global Group - Assignment Project

A modern, responsive landing page for **HLS Global Group**, an international accounting and business advisory firm. Built with Next.js, React, TypeScript, and Tailwind CSS.

## 🎯 Overview

This project showcases HLS Global Group's services, expertise, and company information through an interactive and professionally designed web interface. The application is optimized for performance and accessibility across all devices.

## 📋 Project Information

- **Project Name**: Assignment
- **Version**: 0.1.0
- **Status**: ✅ Production Ready
- **Last Updated**: April 2026

## 🛠️ Tech Stack

### Core Framework
- **Next.js** 16.2.4 - React framework with Turbopack bundler
- **React** 19.2.5 - UI library
- **TypeScript** 6.0.3 - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS** 4.2.2 - Utility-first CSS framework
- **PostCSS** 8.5.10 - CSS transformation tool

### Development Tools
- **ESLint** 10.2.0 - Code quality linter
- **Node.js** 20+ - JavaScript runtime (required)

### Additional Libraries
- **react-router-dom** 7.14.1 - Routing library

## 📦 System Requirements

- **Node.js**: Minimum version 20
- **npm**: Latest version recommended
- **OS**: Windows, macOS, or Linux

## 🚀 Quick Start

### 1. Installation

Clone the repository and install dependencies:

```bash
cd assignment
npm install
```

### 2. Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at:
- **Local**: http://localhost:3000
- **Network**: http://192.168.31.105:3000 (network access enabled)

### 3. Build for Production

Create an optimized production build:

```bash
npm run build
```

### 4. Run Production Server

Start the production server:

```bash
npm start
```

## 📂 Project Structure

```
assignment/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout wrapper
│   ├── page.tsx                 # Home page entry
│   ├── index.tsx                # Main component
│   └── global.css               # Global styles (Tailwind + Google Fonts)
│
├── components/                   # React components
│   ├── FrameComponent.tsx        # Header/Navigation
│   ├── Slider1.tsx              # Hero banner section
│   ├── FrameComponent2.tsx       # Hot topics/News section
│   ├── About.tsx                # Company info & statistics
│   └── FrameComponent1.tsx       # Footer with insights
│
├── public/                       # Static assets
│   ├── Images (PNG, SVG)
│   ├── Icons
│   └── Logos
│
├── Configuration Files
│   ├── next.config.js           # Next.js configuration
│   ├── tailwind.config.js        # Tailwind CSS theme
│   ├── tsconfig.json            # TypeScript configuration
│   ├── postcss.config.js        # PostCSS configuration
│   └── typings.d.ts             # Type definitions
│
└── package.json                 # Project dependencies
```

## 🎨 Page Components

| Component | Description |
|-----------|-------------|
| **FrameComponent** | Sticky header with logo, navigation menu, search, language & region selector |
| **Slider1** | Hero section featuring "EMPOWERED WORKPLACES" with CTA button |
| **FrameComponent2** | Hot topics section displaying news and market updates |
| **About** | Company background with key statistics (250+ staff, 1000+ clients, 35+ years) |
| **FrameComponent1** | Footer with business insights (Pre-market Entry, Market Operations) |

## 🎨 Design System

### Custom Theme (Tailwind CSS)

**Colors:**
- Primary: Midnight Blue (`#00338d`)
- Accent: Dark Orange (`#ff7300`)
- Secondary: Dark Slate Blue (`#2f579f`)
- Neutral: Dark Slate Gray (`#333`)

**Typography:**
- Primary Font: Source Sans Pro
- Secondary Font: Poppins

**Responsive Breakpoints:**
- Mobile: 900px
- Tablet: 1300px
- Desktop: 1650px

## 📱 Responsive Design

The application is fully responsive with mobile-first approach:
- **Mobile** (`mq900`): Optimized layout for small screens
- **Tablet** (`mq1300`): Medium screen adaptations
- **Desktop** (`mq1650`): Full-featured desktop experience

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Production
npm run build        # Create optimized production build
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint for code quality checks
```

## 📝 Configuration

### Next.js Config (`next.config.js`)
- React strict mode enabled
- Remote image optimization configured
- Cross-origin dev origins: `192.168.31.105`

### Tailwind Config (`tailwind.config.js`)
- Custom color palette
- Extended spacing units
- Custom font families
- Custom border radius values

## 🐛 Known Issues & Notes

### Fixed Issues
✅ CSS import ordering (Tailwind v4.2.2 compliance)
✅ Cross-origin development access

### Current Warnings
- Image aspect ratio optimization (can be resolved with `width: auto` or `height: auto` CSS)
- LCP (Largest Contentful Paint) image optimization

### Performance Notes
- Project uses Turbopack for faster builds
- Network drive detected - consider moving to local storage for better performance
- All images optimized through Next.js Image component

## 🚢 Deployment

The project is ready for deployment to any Node.js hosting platform:

1. Build the project: `npm run build`
2. Deploy the `.next` folder and dependencies
3. Set environment variables if needed
4. Run: `npm start`

### Supported Platforms
- Vercel (recommended for Next.js)
- AWS
- Heroku
- DigitalOcean
- Any Node.js hosting

## 📚 Dependencies

### Production
```json
{
  "next": "^16.2.4",
  "react": "^19.2.5",
  "react-dom": "^19.2.5",
  "react-router-dom": "^7.14.1"
}
```

### Development
```json
{
  "@tailwindcss/postcss": "^4.2.2",
  "@types/node": "^25",
  "@types/react": "^19.2.14",
  "@types/react-dom": "^19.2.3",
  "eslint": "^10.2.0",
  "eslint-config-next": "16.2.4",
  "postcss": "^8.5.10",
  "tailwindcss": "^4.2.2",
  "typescript": "^6.0.3"
}
```

## 🔒 Security

- TypeScript enabled for type safety
- ESLint configured for code quality
- Next.js security best practices implemented
- Image optimization prevents malicious uploads

## 📖 Development Guidelines

### Code Standards
- Use TypeScript for type safety
- Follow Tailwind CSS naming conventions
- Component-based architecture
- Responsive design-first approach

### File Naming
- Components: PascalCase (e.g., `FrameComponent.tsx`)
- Utilities: camelCase
- Styles: Global CSS or Tailwind classes

## 🤝 Contributing

When contributing to this project:
1. Follow the existing code structure
2. Use TypeScript for all new components
3. Ensure responsive design across all breakpoints
4. Run `npm run lint` before committing
5. Test on multiple devices

## 📄 License

This project is private and proprietary to HLS Global Group.

## 📧 Contact & Support

For questions or issues with this project, please contact the development team or refer to the project documentation.

---

**Last Updated**: April 17, 2026
**Build Status**: ✅ Production Ready
**Latest Version**: 16.2.4 (Next.js)
  