# 🚀 Dashboard Kits

A scalable, decoupled, and production-ready collection of Dashboard Templates. 

This repository uses a **Branch-Based Architecture**. The `main` branch serves ONLY as documentation. All actual templates and UI kits are stored in their respective, isolated branches. **Do not clone the `main` branch directly.**

---

## 📦 Available Kits (Branches)

Choose the exact framework and UI library combination you need for your project.

### 🔺 Next.js (App Router)
* **`base-nextjs`** : The Foundation (Next.js 14+ & Tailwind CSS).
* **`kit-next-shadcn`** : Next.js + Tailwind + Shadcn UI.
* **`kit-next-mui`** : Next.js + Material UI (MUI) + Emotion.
* **`kit-next-tremor`** : Next.js + Tailwind + Tremor (Perfect for Analytics & Charts).

### ⚛️ React (Vite)
* **`base-react`** : The Foundation (React 18+ & Vite & Tailwind CSS).
* **`kit-react-shadcn`** : React + Vite + Tailwind + Shadcn UI.
* **`kit-react-mui`** : React + Vite + Material UI (MUI).

---

## 🛠️ How to Use (Quick Start)

To start a new project, you must clone **only the specific branch** you need using the `--single-branch` flag. This prevents downloading unnecessary history and keeps your project clean.

**Command Syntax:**
```bash
git clone -b <branch-name> --single-branch [https://github.com/MinKhantAung23/dashboard-ui-kits.git](https://github.com/MinKhantAung23/dashboard-ui-kits.git) my-new-project
