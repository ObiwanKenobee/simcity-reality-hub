
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building, LayoutDashboard, Users, Settings, CreditCard, FileText, Bell, Menu, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useMobileMenu } from '@/hooks/use-mobile';

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  const { user, organization } = useAuth();
  const { isOpen, toggle } = useMobileMenu();
  
  const orgId = organization?.id || 'demo';
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navigationItems = [
    { 
      name: 'Dashboard', 
      href: `/workspace/${orgId}/dashboard`, 
      icon: <LayoutDashboard className="h-5 w-5" /> 
    },
    { 
      name: 'Billing & Subscription', 
      href: `/workspace/${orgId}/billing`, 
      icon: <CreditCard className="h-5 w-5" /> 
    },
    { 
      name: 'Tenants', 
      href: `/workspace/${orgId}/tenants`, 
      icon: <Users className="h-5 w-5" /> 
    },
    { 
      name: 'Reports', 
      href: `/workspace/${orgId}/reports`, 
      icon: <FileText className="h-5 w-5" /> 
    },
    { 
      name: 'Notifications', 
      href: `/workspace/${orgId}/notifications`, 
      icon: <Bell className="h-5 w-5" /> 
    },
    { 
      name: 'Settings', 
      href: `/workspace/${orgId}/settings`, 
      icon: <Settings className="h-5 w-5" /> 
    },
  ];
  
  return (
    <>
      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={toggle}
        ></div>
      )}
      
      {/* Mobile sidebar toggle button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggle}
          className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40
        w-64 bg-simcity-800 text-white transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col">
          {/* Logo area */}
          <div className="flex items-center h-16 px-6 border-b border-simcity-700">
            <Link to="/" className="flex items-center">
              <Building className="h-8 w-8 text-simcity-300" />
              <span className="ml-2 text-xl font-semibold text-white">SimCity OS</span>
            </Link>
          </div>
          
          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`
                      flex items-center px-3 py-2 rounded-md text-sm font-medium
                      ${isActive(item.href) 
                        ? 'bg-simcity-700 text-white' 
                        : 'text-gray-300 hover:bg-simcity-700 hover:text-white'}
                    `}
                  >
                    <span className="mr-3 text-simcity-400">
                      {item.icon}
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* User profile area */}
          <div className="p-4 border-t border-simcity-700">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-simcity-600 flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {user?.email?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">
                  {user?.email?.split('@')[0] || 'User'}
                </p>
                <p className="text-xs text-simcity-300">
                  {organization?.name || 'Demo Organization'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
