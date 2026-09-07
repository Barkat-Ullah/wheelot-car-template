<div align="center">
  <img src="public/Logo.png" alt="Wheelot Logo" width="220" />
  
  # Wheelot - Next.js Vehicles Buy & Sell Marketplace
  
  <p align="center">
    <strong>A high-performance, responsive luxury vehicle marketplace landing page template built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.</strong>
  </p>

  <p align="center">
    <a href="https://carsell-barkat.vercel.app" target="_blank">
      <img src="https://img.shields.io/badge/Live_Demo-carsell--barkat.vercel.app-FFB900?style=for-the-badge&logo=vercel&logoColor=black" alt="Live Demo" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-13.1-EA4C89?style=flat-square&logo=framer" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Responsive-320px+-success?style=flat-square" alt="Responsive" />
  </p>
</div>

---

## 🚀 Live Demo

Experience the live application deployed on Vercel:  
👉 **[https://carsell-barkat.vercel.app](https://carsell-barkat.vercel.app)**

---

## ✨ Key Features

- **⚡ Modern & Responsive Design**: Crafted for all screen sizes from **320px mobile devices** (iPhone SE) to ultra-wide 4K desktop displays.
- **🧭 Interactive Header & Navbar**:
  - Sticky glassmorphic navigation header (`backdrop-blur-2xl`).
  - Official 3-bar gold hamburger menu toggle with smooth non-reloading state.
  - Desktop floating capsule navigation menu and mobile slide-out drawer with contact info.
  - Adaptive contact button that adjusts dynamically between mobile icon and full desktop button.
- **🏎️ High-Impact Hero Section**:
  - Futuristic typography powered by Google Font **Bruno Ace**.
  - High-resolution Koenigsegg luxury supercar graphic with ambient bottom glow.
  - Device-aware layout: prominent top car presentation on mobile devices and bottom-right anchored layout on desktop screens.
  - Smooth entrance micro-animations with **Framer Motion**.
- **💬 Comprehensive Footer Section**:
  - Bold "Let's Talk" top banner with custom animated golden motion wheel icon.
  - 3-Column card layout featuring Brand Testimonial, Popular Brands grid, and Contact details.
  - Social media integrations (Facebook, Instagram, YouTube, Twitter) with interactive gold hover effects.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16.3](https://nextjs.org/) (App Router, Turbopack) |
| **Library** | [React 19.2](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS |
| **Typography** | [Bruno Ace](https://fonts.google.com/specimen/Bruno+Ace) & [Inter](https://fonts.google.com/specimen/Inter) |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) & Custom SVG Assets |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🎨 Design System & Color Palette

- **Primary Gold**: `#FFB900` / `#FFBD37`
- **Dark Backgrounds**: `#0B0B0E` / `#161618`
- **Dark Accent**: `#343433`
- **Muted Text / Glow**: `#FAFAF9`, `rgba(255, 253, 245, 0.1)`

---

## 📂 Project Structure

```text
├── public/
│   ├── Logo.png             # Official Wheelot brand logo
│   └── hero.png             # Transparent Koenigsegg supercar asset
├── src/
│   └── app/
│       ├── (layout)/
│       │   ├── layout.tsx   # Global layout shell with Navbar and Footer
│       │   └── page.tsx     # Home page route
│       ├── components/
│       │   ├── HomeSection.tsx  # Main content assembler
│       │   ├── pages/
│       │   │   └── Hero.tsx     # Responsive hero page component
│       │   └── shared/
│       │       ├── Navbar.tsx   # Responsive navigation header & drawer
│       │       └── Footer.tsx   # Responsive 3-column footer component
│       ├── globals.css      # Design tokens, typography & animations
│       └── layout.tsx       # Root metadata and font loader
├── package.json
└── README.md
```

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js**: v18.18+ or v20+
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Barkat-Ullah/wheelot-car-template.git
   cd wheelot-car-template
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📦 Build & Production

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## 📄 License & Credits

- Template design inspired by [Wheelot](https://wheelot.nxt.designtocodes.com/).
- Developed & Maintained by **Barkat Ullah**.

