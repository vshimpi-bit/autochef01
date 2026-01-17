import { Activity, Calendar, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const agents = [
  {
    name: "Booking Agent",
    category: "Reservation Management",
    description: "Autonomous handling of inbound booking requests across all digital channels.",
    status: "Active",
    uptime: "14D 6H",
    load: 65,
    icon: Calendar,
  },
  {
    name: "No-Show Prevention",
    category: "Risk Mitigation",
    description: "Predictive confirmation messaging and deposit processing for high-risk bookings.",
    status: "Active",
    uptime: "4D 12H",
    load: 45,
    icon: Shield,
  },
  {
    name: "Table Release",
    category: "Capacity Optimization",
    description: "Real-time monitoring of table turnover to instantly release inventory to waiting lists.",
    status: "Active",
    uptime: "7D 3H",
    load: 30,
    icon: Clock,
  },
];

const AIAgents = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Control Center</h1>
          <p className="text-muted-foreground mt-1">Detailed health and performance metrics for all autonomous agents.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/10">
          <Activity className="w-4 h-4 text-primary" />
          <span className="text-primary font-medium text-sm">SYSTEM NOMINAL</span>
        </div>
      </div>

      {/* Table Management Agents */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Table Management Agents</h2>
        
        <div className="grid grid-cols-2 gap-4">
          {agents.slice(0, 2).map((agent, index) => (
            <div key={index} className="glass-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <agent.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{agent.name}</h3>
                    <p className="text-sm text-muted-foreground">{agent.category}</p>
                  </div>
                </div>
                <span className="status-badge status-active">{agent.status}</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {agent.description}
              </p>

              <div className="flex items-center gap-8 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Current Load</p>
                  <div className="efficiency-bar w-32">
                    <div className="efficiency-bar-fill" style={{ width: `${agent.load}%` }} />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Uptime</p>
                  <p className="text-sm font-medium text-foreground">{agent.uptime}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">Edit Logic</Button>
                <Button variant="outline" className="flex-1">Reboot Agent</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Third Agent */}
        <div className="glass-card p-6 mt-4 max-w-[calc(50%-0.5rem)]">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{agents[2].name}</h3>
                <p className="text-sm text-muted-foreground">{agents[2].category}</p>
              </div>
            </div>
            <span className="status-badge status-active">{agents[2].status}</span>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {agents[2].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAgents;
