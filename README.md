# Dashboard Kit (Next.js Version)

A "Clean, Modern & Simple" Dashboard Starter Kit built with the latest React ecosystem.

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [Shadcn UI (Base UI Version)](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: Class-based Dark Mode (`next-themes`) with custom refined Zinc/Slate hex colors.

## 📂 Project Structure

```text
├── app/
│   ├── globals.css        # Tailwind v4 directives and CSS variables (oklch & hex)
│   ├── layout.tsx         # Root Layout (Server Component) with ThemeProvider & DashboardShell
│   └── page.tsx           # Dashboard Overview Page (Server Component)
├── components/
│   ├── layout/
│   │   ├── AppSidebar.tsx # Sidebar Component (Client Component)
│   │   ├── DashboardShell.tsx # Layout Wrapper handling Mobile/Desktop states (Client Component)
│   │   └── Header.tsx     # Top Navbar with Theme/Lang/Profile Dropdowns (Client Component)
│   ├── providers/
│   │   └── theme-provider.tsx # Next-Themes Provider (Client Component)
│   └── ui/                # Shadcn UI Components (Avatar, Button, Card, Dropdown, Sheet)
├── lib/
│   └── utils.ts           # Tailwind classes merge utility (cn)
├── public/                # Static assets
└── components.json        # Shadcn UI configuration
```

## 🛠️ Key Features

- **Responsive Layout**: Collapsible Sidebar on Desktop, hidden Sheet Sidebar on Mobile.
- **Server/Client Separation**: Layout shell handles state as a Client Component, allowing page content to remain fully Server-Side Rendered.
- **Tailwind v4 Native**: Utilizes `@theme inline` and standard `@layer base` for variables without a `tailwind.config.js`.
- **Premium Dark Mode**: Carefully curated custom Hex values to ensure a pristine, modern SaaS aesthetic without looking washed out.

## 💻 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 🎨 Adding More Components

This kit uses the latest Shadcn UI which is powered by Base UI. You can add more components easily via the CLI:

```bash
npx shadcn@latest add [component-name]
# Example: npx shadcn@latest add dialog table input
```

> **Note on Dropdowns**: This version of Shadcn UI requires `DropdownMenuLabel` and `DropdownMenuItem` to be wrapped inside `<DropdownMenuGroup>` to avoid `MenuGroupContext` missing errors.
