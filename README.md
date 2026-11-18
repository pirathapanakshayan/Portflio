<h1 align="center">⚡ AKSHAYAN.SYS — Portfolio</h1>

<p align="center">
  Personal portfolio of <b>Pirathapan Akshayan</b>, freelance software developer — a HUD-style site in deep black, yellow & silver.<br/>
  🌐 <a href="https://pirathapanakshayan.github.io/Portflio/">pirathapanakshayan.github.io/Portflio</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/REACT-0A0A0A?style=for-the-badge&logo=react&logoColor=FFD600"/>
  <img src="https://img.shields.io/badge/VITE-0A0A0A?style=for-the-badge&logo=vite&logoColor=FFD600"/>
  <img src="https://img.shields.io/badge/TAILWIND_CSS-0A0A0A?style=for-the-badge&logo=tailwindcss&logoColor=FFD600"/>
  <img src="https://img.shields.io/badge/GITHUB_PAGES-0A0A0A?style=for-the-badge&logo=github&logoColor=FFD600"/>
</p>

## ✨ Features
- Boot-screen intro, typing hero, glitch & silver-shine name
- Glass cards, HUD panels, scan line and a yellow crosshair cursor
- Services, tech stack, filterable projects, work process and journey timeline
- Live GitHub stats panels (auto-updated daily from the profile repo)
- Contact form that opens a pre-filled email
- Hidden terminal — press <kbd>~</kbd> and type `help`
- Fully responsive, respects *reduced motion*

## ✏️ Edit the content
All text lives in **`src/data.js`** — profile, about, services, skills, projects and timeline.
Images go in **`public/img/`**. To add a CV, put it at `public/cv.pdf` and set `cv: asset('cv.pdf')` in `src/data.js`.

## 🚀 Run locally
```bash
npm install
npm run dev
```

## 🌐 Deploy
Every push to `main` builds and deploys automatically with GitHub Actions
(**Settings → Pages → Source: GitHub Actions**).
