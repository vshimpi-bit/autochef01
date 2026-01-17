import { Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const tables = [
  { id: "T1", capacity: 2, time: "18:30 - 20:00", risk: "Low", riskLevel: "low" },
  { id: "T2", capacity: 4, time: "19:00 - 21:00", risk: "Medium", riskLevel: "medium" },
  { id: "T3", capacity: 2, time: null, risk: null, riskLevel: null },
  { id: "T4", capacity: 6, time: "19:30 - 21:30", risk: "High", riskLevel: "high" },
  { id: "T5", capacity: 4, time: "18:00 - 19:30", risk: "Low", riskLevel: "low" },
  { id: "T6", capacity: 2, time: null, risk: null, riskLevel: null },
];

const Reservations = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Reservation Engine</h1>
          <p className="text-muted-foreground mt-1">Autonomous flow optimization and no-show prediction.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Timeline View</Button>
          <Button>New Booking</Button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Live Table Map */}
        <div className="col-span-2 glass-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-6">Live Table Map</h2>
          
          <div className="grid grid-cols-3 gap-4">
            {tables.map((table) => (
              <div
                key={table.id}
                className={`table-cell ${table.time ? "table-occupied" : "table-available"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-foreground">{table.id}</span>
                  <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded">
                    CAP: {table.capacity}
                  </span>
                </div>
                
                {table.time ? (
                  <>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {table.time}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <div className={`w-2 h-2 rounded-full ${
                        table.riskLevel === "low" ? "bg-primary" :
                        table.riskLevel === "medium" ? "bg-warning" :
                        "bg-destructive"
                      }`} />
                      <span className={`text-sm ${
                        table.riskLevel === "low" ? "text-primary" :
                        table.riskLevel === "medium" ? "text-warning" :
                        "text-destructive"
                      }`}>
                        No-show Risk: {table.risk}
                      </span>
                    </div>
                  </>
                ) : (
                  <span className="text-sm text-muted-foreground">-</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Flow Insights */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <h2 className="text-lg font-semibold text-primary">Flow Insights</h2>
          </div>
          
          <p className="text-sm text-muted-foreground italic leading-relaxed mb-6">
            "Move Walk-in to Table 6 for better flow. This frees up Table 4 for the upcoming Party of 6 with 92% arrival probability."
          </p>

          <Button className="w-full mb-8">Auto-Reassign</Button>

          <div>
            <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Efficiency Metrics</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Turnover Rate</span>
                <span className="text-sm text-primary font-medium">+14%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Wait Time Est.</span>
                <span className="text-sm text-primary font-medium">8 mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
