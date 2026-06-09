# 🚀 DashKit: React + Tailwind Foundation

Welcome to the `base/react-tailwind` branch! This is the foundational boilerplate for building premium, modern dashboard layouts. It focuses on a clean architectural setup without being tied to any specific heavy UI component library (like Shadcn or MUI) just yet.

## ✨ Features

- **Premium Aesthetics**: Crafted with a sleek midnight dark mode palette, glassmorphism (`backdrop-blur`), and modern typography (Outfit font).
- **Responsive Layout**: Fully responsive sidebar (mobile overlay, desktop pinned) and header combination.
- **Collapsible Sidebar**: A mini-sidebar mode that intelligently collapses text and shows only icons for power users.
- **Theme Toggle**: Built-in Dark/Light mode context switching using the latest Tailwind CSS v4 class strategy.
- **Professional Icons**: Pre-configured with `lucide-react` for crisp, consistent scalable vector icons.
- **Micro-Animations**: Smooth hover effects, scaling, and structural transitions to make the interface feel alive.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 How to Use (For New Projects)

To use this foundation as a starter template for a **new project**, you can clone this specific branch:

```bash
# Clone only this branch into a new folder named 'my-new-project'
git clone -b base/react-tailwind --single-branch https://github.com/yourusername/dashboard-kits.git my-new-project

# Navigate into the project
cd my-new-project

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🏗️ Folder Structure

```text
src/
├── components/
│   ├── layout/       # Core layout pieces: DashboardLayout, Header, Sidebar
│   └── providers/    # Context providers (e.g., ThemeProvider)
├── index.css         # Global styles and Tailwind v4 theme configuration
├── App.tsx           # Entry point and layout demonstration template
└── main.tsx          # React bootstrapper
```

## 📝 Customization

- **Navigation**: Open `src/components/layout/Sidebar.tsx` and modify the `NAV_GROUPS` array to instantly update your sidebar structure and categories.
- **Theme & Colors**: Open `src/index.css` to tweak the core CSS variables and default Tailwind behaviors.

---
*Built with ❤️ for rapid, premium dashboard development.*
