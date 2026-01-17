import { Zap, Clock } from "lucide-react";

const actionItems = [
  { message: "Stock auto-ordered: Cheese (5kg)", time: "Just now", type: "green" },
  { message: "Party of 4 reassigned automatically", time: "Just now", type: "green" },
  { message: "Complaint resolved in 32 seconds", time: "Just now", type: "green" },
  { message: "Staff shift updated: Sarah added", time: "Just now", type: "green" },
  { message: "Low stock alert: Red Wine", time: "Just now", type: "red" },
];

const AIActionLog = () => {
  return (
    <aside className="w-80 h-[calc(100vh-4rem)] bg-background border-l border-border p-6 overflow-y-auto scrollbar-thin">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Zap className="w-4 h-4 text-primary" />
        <h2 className="text-primary font-semibold text-sm uppercase tracking-wide">AI Action Log</h2>
      </div>

      {/* Action Items */}
      <div className="space-y-1">
        {actionItems.map((item, index) => (
          <div
            key={index}
            className={`action-log-item ${
              item.type === "green" ? "action-log-green" : 
              item.type === "yellow" ? "action-log-yellow" : 
              "action-log-red"
            }`}
          >
            <div className="flex-1">
              <p className="text-sm text-foreground leading-relaxed">{item.message}</p>
              <div className="flex items-center gap-1 mt-1">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default AIActionLog;
