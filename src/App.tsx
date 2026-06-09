import { ThemeProvider } from "./components/providers/ThemeProvider"
import { DashboardLayout } from "./components/layout/DashboardLayout"
import { ArrowUpRight, Users, DollarSign, Activity } from "lucide-react"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="dashboard-theme">
      <DashboardLayout>
        <div className="grid gap-8 pb-8">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Overview</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Here's what's happening with your projects today.</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-xl transition-colors shadow-sm shadow-indigo-500/20">
              Generate Report
            </button>
          </header>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { title: "Total Revenue", value: "$45,231.89", icon: <DollarSign className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />, trend: "+20.1%" },
              { title: "Active Users", value: "2,350", icon: <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />, trend: "+15.2%" },
              { title: "Sales", value: "12,234", icon: <Activity className="w-5 h-5 text-amber-600 dark:text-amber-400" />, trend: "+4.3%" },
              { title: "Active Now", value: "573", icon: <Activity className="w-5 h-5 text-rose-600 dark:text-rose-400" />, trend: "+2.1%" },
            ].map((stat, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-dark-border bg-white dark:bg-dark-surface p-6 shadow-sm hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500">
                  {stat.icon}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-slate-500 dark:text-slate-400 text-sm">{stat.title}</h3>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{stat.value}</span>
                </div>
                <div className="mt-2 flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                  {stat.trend} from last month
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 rounded-2xl border border-slate-200/60 dark:border-dark-border bg-white dark:bg-dark-surface p-6 shadow-sm min-h-[400px]">
              <h3 className="font-semibold text-lg mb-6 text-slate-900 dark:text-white">Revenue Overview</h3>
              <div className="h-full w-full rounded-xl border-2 border-dashed border-slate-200 dark:border-dark-border flex items-center justify-center text-slate-400 dark:text-slate-500 min-h-[300px]">
                Chart Placeholder
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200/60 dark:border-dark-border bg-white dark:bg-dark-surface p-6 shadow-sm min-h-[400px]">
              <h3 className="font-semibold text-lg mb-6 text-slate-900 dark:text-white">Recent Activity</h3>
              <div className="h-full w-full rounded-xl border-2 border-dashed border-slate-200 dark:border-dark-border flex items-center justify-center text-slate-400 dark:text-slate-500 min-h-[300px]">
                Activity Feed Placeholder
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ThemeProvider>
  )
}

export default App
