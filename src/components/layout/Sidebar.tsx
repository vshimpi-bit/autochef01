import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Bot,
  CalendarRange,
  Package,
  ShoppingCart,
  Users,
  MessageSquare,
  BarChart3,
  Settings,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/" },
  { icon: Bot, label: "AI Agents", path: "/ai-agents" },
  { icon: CalendarRange, label: "Reservations", path: "/reservations" },
  { icon: Package, label: "Inventory", path: "/inventory" },
  { icon: ShoppingCart, label: "Orders", path: "/orders" },
  { icon: Users, label: "Staff", path: "/staff" },
  { icon: MessageSquare, label: "Feedback", path: "/feedback" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 h-screen bg-sidebar fixed left-0 top-0 border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">A</span>
        </div>
        <div>
          <h1 className="font-bold text-foreground text-lg tracking-tight">AUTO-CHEF</h1>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Autonomous AI</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive ? "nav-item-active" : ""}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Logo */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
          <span className="text-muted-foreground font-bold text-sm">N</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
