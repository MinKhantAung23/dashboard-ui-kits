import { ThemeProvider } from "./components/providers/ThemeProvider"
import { DashboardLayout } from "./components/layout/DashboardLayout"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="dashboard-theme">
      <DashboardLayout>
        <div className="grid gap-6">
          <header>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Overview</h2>
            <p className="text-gray-500 dark:text-gray-400">Welcome back! Here's what's happening today.</p>
          </header>

          {/* Dummy content to show layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
                <div className="h-10 w-10 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mb-4">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">{i}</span>
                </div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Metric Card {i}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Sample data visualization or metric would go here.</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm min-h-[400px]">
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Main Content Area</h3>
            <div className="h-full w-full rounded border-2 border-dashed border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500 min-h-[300px]">
              Copy-paste layout ready!
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ThemeProvider>
  )
}

export default App
