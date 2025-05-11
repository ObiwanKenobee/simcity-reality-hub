
import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const DashboardHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 px-4 flex items-center justify-between">
      <div className="flex items-center w-full max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search..." 
            className="pl-10 w-full h-9 bg-gray-50"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </Button>
        
        <div className="flex items-center space-x-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-medium">Demo User</div>
            <div className="text-xs text-gray-500">Administrator</div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full bg-simcity-100">
            <User className="h-5 w-5 text-simcity-600" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
