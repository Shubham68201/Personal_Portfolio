# 🚀 Shubham Bharti — Personal Portfolio

A fully responsive, single-page personal portfolio website built with the MERN-adjacent frontend stack. Showcases projects, skills, experience, and education with a dark-mode-first design.

---

## 🌐 Live Demo

[https://shubham68201.github.io/Personal_Portfolio/](https://shubham68201.github.io/Personal_Portfolio/)

---

## 🛠️ Tech Stack

| Layer      | Technology                |
| ---------- | ------------------------- |
| Framework  | React 19 + Vite           |
| Styling    | Tailwind CSS v3 + DaisyUI |
| Icons      | React Icons               |
| Routing    | React Router DOM v7       |
| Build Tool | Vite 7                    |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf              # Downloadable resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with theme toggle & hamburger
│   │   ├── Hero.jsx            # Typewriter animation + CTA buttons
│   │   ├── About.jsx           # Bio, highlights, social links
│   │   ├── Skills.jsx          # Categorized skill badges
│   │   ├── Projects.jsx        # Project cards with live + GitHub links
│   │   ├── Experience.jsx      # Timeline: internship + hackathons
│   │   ├── Education.jsx       # Degree & school cards
│   │   ├── Certifications.jsx  # Certification badge grid
│   │   ├── Contact.jsx         # Static contact section
│   │   └── Footer.jsx          # Footer with social links
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Shubham68201/portfolio.git

# Navigate into the project
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy on Vercel, Netlify, or GitHub Pages.

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Features

- **Dark/Light Mode** — DaisyUI theme toggle persists across sections
- **Typewriter Animation** — Hero subtitle cycles through developer roles
- **Smooth Scroll** — All navbar links scroll smoothly to sections
- **Responsive Design** — Mobile-first with hamburger menu on small screens
- **Fade-in Animations** — Sections animate into view on scroll
- **Live Project Links** — All project cards link to deployed apps

---

## 📦 Featured Projects

### Learning Management System

> Full-stack LMS with course creation, video lectures, and student progress tracking.

- **Live:** [learning-management-system-peach.vercel.app](https://learning-management-system-peach.vercel.app/)
- **Stack:** MongoDB, Express.js, React, Node.js, JWT

### E-Commerce Platform

> Complete e-commerce app with Razorpay payments and admin analytics dashboard.

- **Live:** [ecommerce-mern-two.vercel.app](https://ecommerce-mern-two.vercel.app/)
- **Stack:** MERN, Razorpay, Cloudinary, Chart.js, JWT

---

## 🔗 Connect

| Platform | Link                                                                                         |
| -------- | -------------------------------------------------------------------------------------------- |
| GitHub   | [github.com/Shubham68201](https://github.com/Shubham68201)                                   |
| LinkedIn | [linkedin.com/in/shubham-bharti-079870252](https://linkedin.com/in/shubham-bharti-079870252) |
| LeetCode | [leetcode.com/u/ramp68201](https://leetcode.com/u/ramp68201/)                                |
| Email    | ramp68201@gmail.com                                                                          |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
