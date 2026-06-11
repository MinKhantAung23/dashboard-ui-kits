import { ArrowUpRight, Users, DollarSign, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="grid gap-6 pb-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
          <p className="text-xs text-muted-foreground mt-1">Here's what's happening with your projects today.</p>
        </div>
        <Button size="sm" className="shadow-sm">
          Generate Report
        </Button>
      </header>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { title: "Total Revenue", value: "$45,231.89", icon: <DollarSign className="w-4 h-4 text-muted-foreground" />, trend: "+20.1%" },
          { title: "Active Users", value: "2,350", icon: <Users className="w-4 h-4 text-muted-foreground" />, trend: "+15.2%" },
          { title: "Sales", value: "12,234", icon: <Activity className="w-4 h-4 text-muted-foreground" />, trend: "+4.3%" },
          { title: "Active Now", value: "573", icon: <Activity className="w-4 h-4 text-muted-foreground" />, trend: "+2.1%" },
        ].map((stat, i) => (
          <Card key={i} className="hover:shadow-sm transition-all shadow-none">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">{stat.value}</div>
              <p className="mt-1 flex items-center text-xs text-muted-foreground">
                <ArrowUpRight className="w-3 h-3 mr-1 text-emerald-500" />
                <span className="text-emerald-500 font-medium mr-1">{stat.trend}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Card className="xl:col-span-2 min-h-[350px] shadow-none">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-full w-full rounded-xl border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm min-h-[250px] bg-muted/30">
              Chart Placeholder
            </div>
          </CardContent>
        </Card>
        <Card className="min-h-[350px] shadow-none">
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
  );
}
