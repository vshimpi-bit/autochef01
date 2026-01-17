import { ShoppingCart } from "lucide-react";

const orders = [
  {
    id: "ORD-921",
    table: "Table T2",
    items: "Truffle Pasta, Red Wine",
    time: "5M AGO",
    status: "PREPARING",
    statusType: "warning",
  },
  {
    id: "ORD-920",
    table: "Table T5",
    items: "Margherita Pizza, Coke",
    time: "12M AGO",
    status: "READY",
    statusType: "success",
  },
  {
    id: "ORD-919",
    table: "Table T1",
    items: "Bruschetta",
    time: "25M AGO",
    status: "DELIVERED",
    statusType: "neutral",
  },
];

const Orders = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Active Orders</h1>
        <p className="text-muted-foreground mt-1">Autonomous kitchen coordination and order tracking.</p>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="glass-card p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {order.id} — {order.table}
                </h3>
                <p className="text-sm text-muted-foreground">{order.items}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">{order.time}</span>
              <span className={`status-badge ${
                order.statusType === "warning" ? "status-warning" :
                order.statusType === "success" ? "status-active" :
                "status-neutral"
              }`}>
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
