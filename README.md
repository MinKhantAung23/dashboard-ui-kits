# Universal Dashboard Boilerplate - React + Shadcn UI Kit

This branch (`kit/react-shadcn`) provides a premium, "Simple, Clean & Modern" dashboard starter kit. It builds upon the foundational `base/react-tailwind` skeleton by deeply integrating the highly popular **Shadcn UI** component ecosystem.

## ✨ Features

- **Shadcn UI Integration**: Fully configured and utilizing standard Shadcn components (`Card`, `DropdownMenu`, `Sheet`, `Button`, `Avatar`, etc.) for robust accessibility and standard design patterns.
- **Simple & Clean Aesthetic**: A flat, modern design replacing heavy glassmorphism with crisp semantic colors (`bg-background`, `bg-muted`) and standard SaaS font sizes (`text-sm`, `text-xs`).
- **Responsive Navigation**:
  - **Desktop**: A sleek, collapsible sidebar with standard icon hover animations and active states.
  - **Mobile**: A smooth, native-feeling slide-out drawer powered by Shadcn's `<Sheet>` component.
- **Advanced Header**: Features a functional Search layout, notifications, language switcher, and a professional User Profile Dropdown.
- **Theming**: Native Light, Dark, and System theme support utilizing Shadcn's semantic CSS variables.

## 🚀 Getting Started

1. **Install Dependencies**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

Key directories specific to this kit:

```text
src/
├── components/
│   ├── layout/       # Core layout components (AppSidebar, Header, DashboardLayout)
│   ├── providers/    # Context providers (ThemeProvider)
│   └── ui/           # Automatically generated Shadcn UI components
├── lib/              # Utility functions (e.g., Shadcn's `cn` utility)
├── App.tsx           # Dashboard overview page demonstrating widgets & cards
└── index.css         # Global styles and Shadcn theme CSS variables
```

## 🛠️ Adding More Components

This kit is fully compatible with the official Shadcn CLI. To add a new component, simply run:

```bash
npx shadcn@latest add [component-name]
```
For example: `npx shadcn@latest add dialog`

## 🌿 Branch Architecture

This repository uses a Branch-Based Architecture:
- `base/react-tailwind`: The pure HTML/Tailwind skeleton.
- **`kit/react-shadcn`** (Current): The standard Shadcn UI implementation.
- *(Future Branches)*: `kit/react-mui`, `kit/next-shadcn`, etc.
