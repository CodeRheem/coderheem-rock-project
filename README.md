# Sprintfixer Frontend

This is the frontend codebase for the **Sprintfixer Project** (Team 06, AltHub). It is built with **React + Vite**, styled using **Tailwind CSS**, and containerized with **Docker**. The frontend connects to the FastAPI backend via **NGINX reverse proxy**.

---

## 📁 Project Structure

```bash
sprintfixer-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── Dockerfile
├── nginx.conf
└── README.md
---
## 🚀 Tech Stack

1. React (via Vite)

2. Tailwind CSS

3. Docker

4. NGINX (for serving production build + reverse proxy)

5. Node 20 Alpine (for lightweight Docker builds)
---
## 🔧 Getting Started (Development)

### Prerequisites

1. Node.js (v20+ recommended)

2. npm

3. Docker (optional for containerized development)
---
## Local Development

```bash
# Clone the repo
git clone https://github.com/TinyukaAltHubProjectTeam06/sprintfixer-frontend.git
cd sprintfixer-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

* App will be running at: http://localhost:5173

---
## 🧱 Building for Production

```bash
npm run build
```
* This creates a production-ready `dist/` folder.

---

## 🐳 Docker Setup (with NGINX)

###

```bash
# From the root of the frontend folder
docker build -t sprintfixer-frontend .
docker run -d -p 80:80 sprintfixer-frontend
```

* App will be live at: http://localhost

---

## 👨‍💻 Frontend Team Setup Notes
1. Use ShadCN for UI components (install with `npx shadcn-ui@latest init`)

2. Tailwind CSS is pre-configured

3. Components live in `src/components/`

4. Pages live in `src/pages/`

5. All backend requests must go through /api/...

---
## 📬 Contributions
1. Frontend tasks should be completed in feature branches and merged via PRs to main.

