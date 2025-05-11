
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Building, 
  Wrench, 
  ChartBar, 
  Users, 
  Settings, 
  Home, 
  LogIn, 
  ChartLine,
  Database
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, to, isActive }) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center px-3 py-2 rounded-md transition-colors hover:bg-simcity-700 group",
        isActive ? "bg-simcity-700 text-white" : "text-gray-300 hover:text-white"
      )}
    >
      <div className="mr-3">{icon}</div>
      <span>{label}</span>
    </Link>
  );
};

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: <Home className="h-5 w-5" />, label: "Dashboard", path: "/workspace/demo/dashboard" },
    { icon: <Building className="h-5 w-5" />, label: "Unit Manager", path: "/workspace/demo/units" },
    { icon: <Wrench className="h-5 w-5" />, label: "Maintenance", path: "/workspace/demo/maintenance" },
    { icon: <ChartBar className="h-5 w-5" />, label: "Utilities", path: "/workspace/demo/utilities" },
    { icon: <Users className="h-5 w-5" />, label: "Tenants", path: "/workspace/demo/tenants" },
    { icon: <ChartLine className="h-5 w-5" />, label: "Simulation", path: "/workspace/demo/simulate" },
    { icon: <Database className="h-5 w-5" />, label: "Reports", path: "/workspace/demo/reports" },
    { icon: <Settings className="h-5 w-5" />, label: "Settings", path: "/workspace/demo/settings" },
  ];
  
  return (
    <div className="h-screen w-64 flex-shrink-0 bg-simcity-800 flex flex-col">
      <div className="p-4 flex items-center border-b border-simcity-700">
        <Building className="h-8 w-8 text-teal-400" />
        <span className="ml-2 text-lg font-semibold text-white">SimCity OS</span>
      </div>
      
      <div className="p-3">
        <div className="bg-simcity-900 text-white rounded-md p-2 mb-4">
          <div className="text-sm font-medium">Demo Organization</div>
          <div className="text-xs text-gray-400">Workspace: Demo</div>
        </div>
      </div>
      
      <nav className="flex-1 px-3 py-2 overflow-y-auto space-y-1">
        {menuItems.map((item) => (
          <SidebarItem 
            key={item.label}
            icon={item.icon}
            label={item.label}
            to={item.path}
            isActive={location.pathname === item.path}
          />
        ))}
      </nav>
      
      <div className="p-3 border-t border-simcity-700">
        <Link 
          to="/"
          className="flex items-center px-3 py-2 rounded-md transition-colors text-gray-300 hover:bg-simcity-700 hover:text-white"
        >
          <LogIn className="h-5 w-5 mr-3" />
          <span>Exit Demo</span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
