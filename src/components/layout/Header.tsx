import { MapPin, Bell, Cloud } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="h-16 bg-background border-b border-border flex items-center justify-between px-6">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        {/* Nexus Badge */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">N</span>
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">NEXUS</p>
            <p className="text-xs text-muted-foreground">RESTAURANT OS</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Downtown Bistro, NYC</span>
        </div>

        {/* AI Status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10">
          <div className="pulse-dot" />
          <span className="text-primary text-sm font-medium">AI ACTIVE</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Weather */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Cloud className="w-4 h-4 text-warning" />
            <span className="text-sm text-foreground">72°F Partly Cloudy</span>
          </div>
          <span className="text-sm text-primary font-medium">• High Demand Predicted</span>
        </div>

        {/* Notifications */}
        <button className="p-2 rounded-lg hover:bg-muted transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Avatar */}
        <Avatar className="w-9 h-9 border-2 border-primary/30">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=chef" />
          <AvatarFallback className="bg-primary text-primary-foreground text-sm">CH</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
