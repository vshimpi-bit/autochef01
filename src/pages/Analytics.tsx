import { TrendingUp, Users } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const revenueData = [
  { day: "Mon", value: 2100 },
  { day: "Tue", value: 2800 },
  { day: "Wed", value: 9500 },
  { day: "Thu", value: 6200 },
  { day: "Fri", value: 5800 },
  { day: "Sat", value: 4500 },
  { day: "Sun", value: 4100 },
];

const Analytics = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics Suite</h1>
        <p className="text-muted-foreground mt-1">Predictive revenue and operational data modeling.</p>
      </div>

      {/* Charts and Stats */}
      <div className="grid grid-cols-3 gap-4">
        {/* Revenue Chart */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-6">Weekly Revenue Forecast</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  tickFormatter={(value) => value.toLocaleString()}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* MTD Revenue */}
        <div className="stat-card flex flex-col justify-center items-center text-center">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <p className="text-4xl font-bold text-foreground mb-2">$24.5k</p>
          <p className="text-sm text-muted-foreground">MTD Revenue Projection</p>
        </div>

        {/* Unique Guests */}
        <div className="stat-card flex flex-col justify-center items-center text-center">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <p className="text-4xl font-bold text-foreground mb-2">1.2k</p>
          <p className="text-sm text-muted-foreground">Unique Monthly Guests</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
