# Vibhas Reddy Araveeti — 3D Interactive Portfolio 🌐

[![Live Website](https://img.shields.io/badge/Live%20Website-portfolio--vibhasf17--4811.vercel.app-brightgreen?style=for-the-badge&logo=vercel)](https://portfolio-vibhasf17-4811.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-VIBHAS777-blue?style=for-the-badge&logo=github)](https://github.com/VIBHAS777)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-orange?style=for-the-badge&logo=three.js)](https://threejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

Welcome to the official 3D interactive portfolio of **Vibhas Reddy Araveeti**, an AI/ML & Clinical AI Researcher and Computer Science undergraduate at Amrita Vishwa Vidyapeetham with **12+ peer-reviewed publications**, including research in the Q1 journal *Engineered Science* and the **Best Paper Award** at IEEE ICKECS 2026.

---

## 🔗 Live Demo
Visit the live deployed portfolio:  
👉 **[https://portfolio-vibhasf17-4811.vercel.app/](https://portfolio-vibhasf17-4811.vercel.app/)**

---

## ✨ Features

- **Interactive 3D Graphics**: Custom 3D canvas models (Desktop PC, Earth, Stars) rendered with Three.js and `@react-three/fiber`.
- **Dynamic Profile & Tilt Card**: 3D interactive tilt overview card with floating halo effects showcasing academic credentials and achievements.
- **Healthcare & Clinical AI Showcase**: Highlights calibrated deep learning diagnostic pipelines, biomedical NLP systems, and published research.
- **Academic & Research Timeline**: Interactive vertical timeline detailing research internships, developer community leadership (ML Minds), and athletic milestones.
- **Categorized Technical Arsenal**: Interactive grid dividing technical skills into AI/Deep Learning, Biomedical & Clinical Stack, Core Languages, and Cloud/DevOps.
- **Achievements & Recognition**: Features IEEE Best Paper Award, SOF International Mathematics Olympiad (IMO) Gold Medal, and national hackathon victories.
- **Direct Resume Access**: One-click download for professional curriculum vitae and direct contact integration.
- **Dark & Light Mode**: Seamless theme switching with persistent state and dynamic ambient particle effects.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org) (React 18)
- **3D & Animation**: [Three.js](https://threejs.org), [@react-three/fiber](https://github.com/pmndrs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei), [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com), PostCSS
- **Interactive UI**: `react-parallax-tilt`, `react-vertical-timeline-component`, `react-type-animation`
- **Hosting**: [Vercel](https://vercel.com) with global edge network

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VIBHAS777/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📂 Project Structure

```
├── components/          # React UI components & 3D canvases
│   ├── canvas/          # Three.js 3D models (Computers, Earth, Stars)
│   ├── About.jsx        # 3D Tilt card, bio & research overview
│   ├── Experience.jsx   # Interactive vertical career timeline
│   ├── Feedbacks.jsx    # Key achievements & award showcase
│   ├── Hero.jsx         # 3D desktop canvas hero section
│   ├── Navbar.jsx       # Responsive branded navigation
│   ├── Tech.jsx         # Categorized skills & technology badges
│   └── Works.jsx        # Clinical & ML research project cards
├── constants/           # Profile data, research publications & credentials
├── pages/               # Next.js pages & application wrapper
├── public/              # Static 3D models (.gltf), textures, icons & documents
└── styles/              # Global CSS & Tailwind configuration
```

---

## 👨‍💻 Author

**Vibhas Reddy Araveeti**
- **GitHub**: [@VIBHAS777](https://github.com/VIBHAS777)
- **Email**: [vibhasf17@gmail.com](mailto:vibhasf17@gmail.com)
- **Portfolio**: [https://portfolio-vibhasf17-4811.vercel.app/](https://portfolio-vibhasf17-4811.vercel.app/)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
