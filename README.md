# Abhinav Chalise’s Portfolio Website

A modern, responsive personal portfolio built with React, Vite, and TailwindCSS to showcase my resume, projects, and skills. It features an interactive 3D particle background, smooth navigation, and a contact form powered by EmailJS.

---

## 🚀 Live Demo

🔗 Live: [Deployed on Custom Domain](https://abhinavchalise.com/)

---

## ✨ Features

- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **3D Particle Background**: Built with `@react-three/fiber`, `@react-three/drei`, and `maath` for lightweight, immersive visuals.
- **Smooth Scrolling Navigation**: Single-page layout with scroll-driven section updates.
- **Email Contact Form**: Contact section powered by `@emailjs/browser` for quick outreach.
- **Section Components**: Home, About, Experience, Tech Skills, Projects (Works), Feedbacks, and Contact.
- **Animations**: Subtle entrance and hover animations via `framer-motion`.

---

## 🛠️ Technology Stack

- **Frameworks & Libraries**: React, Vite
- **Styling**: TailwindCSS, PostCSS, Autoprefixer
- **3D & Animations**: @react-three/fiber, @react-three/drei, maath, framer-motion
- **Utilities**: react-router-dom, react-tilt, react-vertical-timeline-component
- **Email Integration**: @emailjs/browser
- **Build & Deployment**: npm, gh-pages

---

## 📂 Project Structure

```
portfolio-website/
├─ public/
│  └─ index.html
├─ src/
│  ├─ assets/           # Images & media
│  ├─ components/       # Reusable React components
│  │  ├─ About.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Experience.jsx
│  │  ├─ Feedbacks.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ ParticlesBackground.jsx
│  │  ├─ Tech.jsx
│  │  └─ Works.jsx
│  ├─ styles/           # Tailwind configuration
│  ├─ App.jsx           # Root component
│  └─ main.jsx          # Entry point
├─ .gitignore
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhi6310/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Initialize TailwindCSS** (if not already present)
   ```bash
   npx tailwindcss init -p
   ```

4. **Run in development mode**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 📦 NPM Commands

| Command                                                                                             | Description                              |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `npm install`                                                                                       | Install all project dependencies         |
| `npm install lucide-react`                                                                          | Install Lucide icon library              |
| `npm install -D tailwindcss`                                                                        | Install TailwindCSS as dev dependency    |
| `npx tailwindcss init`                                                                              | Generate Tailwind configuration file     |
| `npx tailwindcss init -p`                                                                           | Generate Tailwind & PostCSS configs      |
| `npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt \              | Install 3D & React-Three utilities       |
|   react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom`                |                                          |
| `npm install --legacy-peer-deps -D postcss autoprefixer`                                            | Install PostCSS & Autoprefixer           |
| `npm run dev`                                                                                       | Start Vite development server            |
| `npm run build`                                                                                     | Build the project for production         |
| `npm install --save-dev gh-pages`                                                                   | Install GitHub Pages deployment package  |
| `npm run deploy`                                                                                    | Deploy site to GitHub Pages              |

---

## 🚀 Deployment

This project uses the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package to deploy to GitHub Pages.

1. Add a `homepage` field in `package.json`:
   ```json
   "homepage": "https://Abhi6310.github.io/portfolio-website"
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

---

## 👤 My Contact

**Abhinav Chalise**  
- LinkedIn: [abhinav-chalise](https://www.linkedin.com/in/abhinav-chalise-6bb31920b/)  
- GitHub: [Abhi6310](https://github.com/Abhi6310)  
- Email: abhinavchalise03@gmail.com
