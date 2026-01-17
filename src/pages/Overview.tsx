import { TrendingUp, TrendingDown } from "lucide-react";
import SparklineChart from "@/components/ui/SparklineChart";
import { Switch } from "@/components/ui/switch";

const stats = [
  {
    label: "TODAY'S REVENUE",
    value: "$4,289",
    change: "+12.5%",
    trend: "up" as const,
    description: "AI predicts +12% dinner rush based on weather.",
    data: [20, 25, 30, 28, 45, 50, 55],
  },
  {
    label: "TABLE OCCUPANCY",
    value: "82%",
    change: "+5.2%",
    trend: "up" as const,
    description: "Optimum flow. 3 tables turning over in 10 mins.",
    data: [60, 65, 70, 75, 78, 80, 82],
  },
  {
    label: "FOOD WASTE SAVED",
    value: "14.2 kg",
    change: "-2.1kg",
    trend: "down" as const,
    description: "Reduced prep of pasta dishes saved 2.5kg.",
    data: [20, 18, 16, 15, 14.5, 14.3, 14.2],
  },
  {
    label: "LABOR COST",
    value: "22%",
    change: "-1.5%",
    trend: "down" as const,
    description: "Staff schedule optimized for 7-10 PM rush.",
    data: [25, 24, 23.5, 23, 22.5, 22.2, 22],
  },
];

const agents = [
  {
    name: "Booking Agent",
    status: true,
    description: "Handling 3 simultaneous booking requests via WhatsApp and Web.",
    confidence: 98,
  },
  {
    name: "No-Show Prevention",
    status: true,
    description: "Flagged 2 high-risk reservations for deposit requirement.",
    confidence: 85,
  },
  {
    name: "Retention Agent",
    status: true,
    description: "Sent targeted offers to 15 lapse-risk customers.",
    confidence: 94,
  },
];

const Overview = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">System Overview</h1>
        <p className="text-muted-foreground mt-1">Autonomous monitoring of all restaurant subsystems.</p>
      </div>

      {/* Real-time Performance */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-primary rounded-full" />
          <h2 className="text-lg font-semibold text-foreground">Real-time Performance</h2>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  {stat.label}
                </span>
                <span className={`flex items-center gap-1 text-xs font-medium ${
                  stat.trend === "up" ? "text-primary" : "text-destructive"
                }`}>
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  {stat.change}
                </span>
              </div>
              <p className="text-3xl font-bold text-foreground mb-3">{stat.value}</p>
              <SparklineChart data={stat.data} trend={stat.trend} />
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Agents */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-primary rounded-full" />
          <h2 className="text-lg font-semibold text-foreground">Active Agents</h2>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {agents.map((agent, index) => (
            <div key={index} className="glass-card p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-lg">📅</span>
                  </div>
                  <span className="font-semibold text-foreground">{agent.name}</span>
                </div>
                <Switch checked={agent.status} />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                • {agent.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Confidence</span>
                <span className="text-sm text-primary font-medium">{agent.confidence}%</span>
              </div>
              <div className="efficiency-bar mt-2">
                <div className="efficiency-bar-fill" style={{ width: `${agent.confidence}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
