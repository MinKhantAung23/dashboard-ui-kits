import { ThemeProvider } from "./components/providers/ThemeProvider"
import { DashboardLayout } from "./components/layout/DashboardLayout"
import { ArrowUpRight, Users, DollarSign, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="dashboard-theme">
      <DashboardLayout>
        <div className="grid gap-6 pb-8">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
              <p className="text-sm text-muted-foreground mt-1">Here's what's happening with your projects today.</p>
            </div>
            <Button size="sm" className="shadow-sm shadow-primary/20">
              Generate Report
            </Button>
          </header>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { title: "Total Revenue", value: "$45,231.89", icon: <DollarSign className="w-4 h-4 text-indigo-500" />, trend: "+20.1%" },
              { title: "Active Users", value: "2,350", icon: <Users className="w-4 h-4 text-emerald-500" />, trend: "+15.2%" },
              { title: "Sales", value: "12,234", icon: <Activity className="w-4 h-4 text-amber-500" />, trend: "+4.3%" },
              { title: "Active Now", value: "573", icon: <Activity className="w-4 h-4 text-rose-500" />, trend: "+2.1%" },
            ].map((stat, i) => (
              <Card key={i} className="group overflow-hidden relative hover:shadow-sm transition-all border-border/60">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity group-hover:scale-110 duration-500 pointer-events-none">
                  {stat.icon}
                </div>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xs font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                    {stat.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
                  <p className="mt-1 flex items-center text-[10px] font-medium text-emerald-500 uppercase tracking-wider">
                    <ArrowUpRight className="w-3 h-3 mr-0.5" />
                    {stat.trend} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <Card className="xl:col-span-2 min-h-[350px] border-border/60">
              <CardHeader>
                <CardTitle className="text-sm font-semibold">Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-full w-full rounded-xl border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm min-h-[250px] bg-muted/30">
                  Chart Placeholder
                </div>
              </CardContent>
            </Card>
            <Card className="min-h-[350px] border-border/60">
              <CardHeader>
                <CardTitle className="text-sm font-semibold">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-full w-full rounded-xl border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm min-h-[250px] bg-muted/30">
                  Activity Feed Placeholder
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DashboardLayout>
    </ThemeProvider>
  )
}

export default App
