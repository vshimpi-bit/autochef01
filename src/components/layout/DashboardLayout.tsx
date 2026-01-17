import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AIActionLog from "./AIActionLog";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <div className="flex">
          <main className="flex-1 p-6 min-h-[calc(100vh-4rem)] overflow-y-auto">
            {children}
          </main>
          <AIActionLog />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
