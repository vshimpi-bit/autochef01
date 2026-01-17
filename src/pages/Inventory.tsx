import { TrendingDown, TrendingUp, AlertTriangle, Zap, RefreshCw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const stats = [
  { label: "Total Inventory Value", value: "$4,318", change: "2.4% vs last month", trend: "down" },
  { label: "Low Stock Alerts", value: "10 Items", status: "Needs attention", statusType: "warning" },
  { label: "Auto-Orders Placed", value: "3 Active", status: "Fully autonomous", statusType: "success" },
  { label: "Food Waste Reduction", value: "18.5%", status: "Optimized prep", statusType: "success" },
];

const inventoryItems = [
  { name: "All Purpose Flour", category: "Pantry", stock: "18 kg", status: "Healthy", autoOrder: true },
  { name: "Basmati Rice", category: "Pantry", stock: "25 kg", status: "Healthy", autoOrder: true },
  { name: "Beer", category: "Beverage", stock: "10 cases", status: "Healthy", autoOrder: true },
  { name: "Black Pepper", category: "Spices", stock: "1 kg", status: "Low", autoOrder: true },
];

const Inventory = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Inventory Management</h1>
          <p className="text-muted-foreground mt-1">AI-driven stock tracking and automated supply chain logistics.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Manual Override</Button>
          <Button>Export Report</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
            <p className="text-2xl font-bold text-foreground mb-2">{stat.value}</p>
            {stat.trend ? (
              <div className="flex items-center gap-1">
                {stat.trend === "down" ? (
                  <TrendingDown className="w-3 h-3 text-destructive" />
                ) : (
                  <TrendingUp className="w-3 h-3 text-primary" />
                )}
                <span className={`text-xs ${stat.trend === "down" ? "text-destructive" : "text-primary"}`}>
                  {stat.change}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                {stat.statusType === "warning" ? (
                  <AlertTriangle className="w-3 h-3 text-warning" />
                ) : (
                  <TrendingUp className="w-3 h-3 text-primary" />
                )}
                <span className={`text-xs ${stat.statusType === "warning" ? "text-warning" : "text-primary"}`}>
                  {stat.status}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Stock Table */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">Stock Levels & Logistics</h2>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search inventory..." className="pl-9 bg-muted border-0" />
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 text-xs text-muted-foreground uppercase tracking-wider font-medium">Item Name</th>
              <th className="text-left py-3 text-xs text-muted-foreground uppercase tracking-wider font-medium">Category</th>
              <th className="text-left py-3 text-xs text-muted-foreground uppercase tracking-wider font-medium">Stock Level</th>
              <th className="text-left py-3 text-xs text-muted-foreground uppercase tracking-wider font-medium">Status</th>
              <th className="text-left py-3 text-xs text-muted-foreground uppercase tracking-wider font-medium">AI Auto-Order</th>
              <th className="text-left py-3 text-xs text-muted-foreground uppercase tracking-wider font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item, index) => (
              <tr key={index} className="border-b border-border/50">
                <td className="py-4 text-sm text-foreground font-medium">{item.name}</td>
                <td className="py-4">
                  <span className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">{item.category}</span>
                </td>
                <td className="py-4 text-sm text-foreground">{item.stock}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.status === "Healthy" ? "bg-primary" : "bg-warning"}`} />
                    <span className={`text-sm ${item.status === "Healthy" ? "text-primary" : "text-warning"}`}>
                      {item.status}
                    </span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-1 text-primary text-sm">
                    <Zap className="w-3 h-3" />
                    ENABLED
                  </div>
                </td>
                <td className="py-4">
                  <Button variant="outline" size="sm" className="gap-1">
                    <RefreshCw className="w-3 h-3" />
                    Restock
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
