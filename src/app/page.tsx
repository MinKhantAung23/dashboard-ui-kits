import { Users, DollarSign, Activity, ArrowUpRight, ArrowDownRight, CreditCard } from "lucide-react";

const metrics = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: <DollarSign className="w-4 h-4 text-slate-500" />,
    trend: "up"
  },
  {
    title: "Active Users",
    value: "+2350",
    change: "+180.1% from last month",
    icon: <Users className="w-4 h-4 text-slate-500" />,
    trend: "up"
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19% from last month",
    icon: <CreditCard className="w-4 h-4 text-slate-500" />,
    trend: "up"
  },
  {
    title: "Active Now",
    value: "+573",
    change: "-201 since last hour",
    icon: <Activity className="w-4 h-4 text-slate-500" />,
    trend: "down"
  }
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard Overview</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Here's what's happening with your projects today.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <div key={i} className="bg-white dark:bg-[#09090b] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium text-slate-500 dark:text-slate-400">
                {metric.title}
              </h3>
              {metric.icon}
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{metric.value}</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                {metric.trend === 'up' ? (
                  <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="w-3 h-3 text-rose-500" />
                )}
                <span className={metric.trend === 'up' ? 'text-emerald-500 font-medium' : 'text-rose-500 font-medium'}>
                  {metric.change.split(' ')[0]}
                </span>
                <span>{metric.change.split(' ').slice(1).join(' ')}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4 bg-white dark:bg-[#09090b] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <div className="flex flex-col space-y-1.5 mb-4">
            <h3 className="font-semibold leading-none tracking-tight text-slate-900 dark:text-white">Overview</h3>
          </div>
          <div className="h-full w-full rounded-lg border border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 text-sm min-h-[300px] bg-slate-50 dark:bg-slate-900/20">
            Chart Placeholder (No Recharts dependency)
          </div>
        </div>
        <div className="lg:col-span-3 bg-white dark:bg-[#09090b] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <div className="flex flex-col space-y-1.5 mb-4">
            <h3 className="font-semibold leading-none tracking-tight text-slate-900 dark:text-white">Recent Sales</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">You made 265 sales this month.</p>
          </div>
          <div className="space-y-6 mt-4">
            {[
              { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00", initials: "OM" },
              { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00", initials: "JL" },
              { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00", initials: "IN" },
              { name: "William Kim", email: "will@email.com", amount: "+$99.00", initials: "WK" },
              { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00", initials: "SD" },
            ].map((sale, i) => (
              <div key={i} className="flex items-center">
                <div className="h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{sale.initials}</span>
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none text-slate-900 dark:text-white">{sale.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{sale.email}</p>
                </div>
                <div className="ml-auto font-medium text-slate-900 dark:text-white">{sale.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
