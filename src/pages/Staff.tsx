import { Button } from "@/components/ui/button";

const staffMembers = [
  {
    name: "Sarah Jenkins",
    initials: "S",
    role: "Server + Patio",
    efficiency: 98,
    status: "ON-SHIFT",
  },
  {
    name: "Marcus Chen",
    initials: "M",
    role: "Chef + Kitchen",
    efficiency: 94,
    status: "ON-SHIFT",
  },
  {
    name: "Elena Rodriguez",
    initials: "E",
    role: "Server + Dining Room",
    efficiency: 96,
    status: "BREAK",
  },
];

const Staff = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Staff Management</h1>
          <p className="text-muted-foreground mt-1">AI-optimized scheduling and performance tracking.</p>
        </div>
        <Button>Optimize Schedule</Button>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-2 gap-4">
        {staffMembers.map((staff, index) => (
          <div key={index} className="glass-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <span className="text-lg font-semibold text-foreground">{staff.initials}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{staff.name}</h3>
                <p className="text-sm text-muted-foreground">{staff.role}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">Efficiency</span>
              <span className="text-sm text-primary font-semibold">{staff.efficiency}%</span>
            </div>

            <span className={`status-badge ${staff.status === "ON-SHIFT" ? "status-active" : "status-neutral"}`}>
              {staff.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
