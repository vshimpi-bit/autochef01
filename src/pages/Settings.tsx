import { MapPin, Bot } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

const Settings = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">System Settings</h1>
        <p className="text-muted-foreground mt-1">Configure your restaurant's AI parameters and preferences.</p>
      </div>

      {/* Restaurant Profile */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Restaurant Profile</h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Restaurant Name</label>
              <p className="text-xs text-muted-foreground mb-2">Public name shown on your digital channels.</p>
              <Input defaultValue="Downtown Bistro, NYC" className="bg-muted border-0" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Capacity Limit</label>
              <p className="text-xs text-muted-foreground mb-2">Maximum simultaneous guests allowed.</p>
              <Input defaultValue="42" className="bg-muted border-0" />
            </div>
          </div>
        </div>
      </div>

      {/* AI Intelligence */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bot className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">AI Intelligence</h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between py-4 border-b border-border">
            <div>
              <h3 className="font-medium text-foreground">Autonomous Booking</h3>
              <p className="text-sm text-muted-foreground">Allow AI to confirm standard reservations.</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between py-4 border-b border-border">
            <div>
              <h3 className="font-medium text-foreground">Risk Mitigation</h3>
              <p className="text-sm text-muted-foreground">Identify high-risk bookings for deposit.</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between py-4 border-b border-border">
            <div>
              <h3 className="font-medium text-foreground">Auto-Inventory</h3>
              <p className="text-sm text-muted-foreground">Automatically reorder low-stock items.</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <h3 className="font-medium text-foreground">Smart Scheduling</h3>
              <p className="text-sm text-muted-foreground">AI-optimized staff shift assignments.</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
