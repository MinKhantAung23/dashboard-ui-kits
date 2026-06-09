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
        <div className="grid gap-8 pb-8">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
              <p className="text-muted-foreground mt-1">Here's what's happening with your projects today.</p>
            </div>
            <Button className="shadow-sm shadow-primary/20">
              Generate Report
            </Button>
          </header>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { title: "Total Revenue", value: "$45,231.89", icon: <DollarSign className="w-5 h-5 text-indigo-500" />, trend: "+20.1%" },
              { title: "Active Users", value: "2,350", icon: <Users className="w-5 h-5 text-emerald-500" />, trend: "+15.2%" },
              { title: "Sales", value: "12,234", icon: <Activity className="w-5 h-5 text-amber-500" />, trend: "+4.3%" },
              { title: "Active Now", value: "573", icon: <Activity className="w-5 h-5 text-rose-500" />, trend: "+2.1%" },
            ].map((stat, i) => (
              <Card key={i} className="group overflow-hidden relative hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity group-hover:scale-110 duration-500 pointer-events-none">
                  {stat.icon}
                </div>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                    {stat.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold tracking-tight">{stat.value}</div>
                  <p className="mt-2 flex items-center text-xs font-medium text-emerald-500">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    {stat.trend} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <Card className="xl:col-span-2 min-h-[400px]">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-full w-full rounded-xl border-2 border-dashed border-border flex items-center justify-center text-muted-foreground min-h-[300px]">
                  Chart Placeholder
                </div>
              </CardContent>
            </Card>
            <Card className="min-h-[400px]">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-full w-full rounded-xl border-2 border-dashed border-border flex items-center justify-center text-muted-foreground min-h-[300px]">
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
