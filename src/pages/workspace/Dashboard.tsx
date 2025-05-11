
import React from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import StatCard from '@/components/dashboard/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Users, Wrench, ChartBar } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500">Welcome to the SimCity Reality OS Demo Workspace</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Total Units" 
              value="156" 
              description="8 buildings"
              icon={<Building className="h-5 w-5 text-simcity-600" />}
              trendValue="↑ 4 units"
              trendDirection="up"
            />
            <StatCard 
              title="Occupancy Rate" 
              value="94.2%" 
              icon={<Users className="h-5 w-5 text-teal-600" />}
              trendValue="↑ 2.1%"
              trendDirection="up"
            />
            <StatCard 
              title="Maintenance Requests" 
              value="12" 
              description="5 urgent"
              icon={<Wrench className="h-5 w-5 text-red-600" />}
              trendValue="↑ 3 new"
              trendDirection="up"
            />
            <StatCard 
              title="Utility Usage" 
              value="$42,580" 
              description="vs $45,200 last month"
              icon={<ChartBar className="h-5 w-5 text-green-600" />}
              trendValue="↓ 5.8%"
              trendDirection="down"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Building Overview</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-video rounded-md bg-gray-100 flex items-center justify-center border">
                  <p className="text-gray-500">Building visualization placeholder</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div key={i} className="flex items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        <span className="text-gray-500 text-xs">{i+1}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Activity {i+1}</p>
                        <p className="text-xs text-gray-500">
                          {i === 0 ? '5 minutes ago' : 
                           i === 1 ? '1 hour ago' : 
                           i === 2 ? '3 hours ago' : 
                           i === 3 ? 'Yesterday' : '2 days ago'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Utility Analytics</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-60 bg-gray-100 rounded-md flex items-center justify-center border">
                  <p className="text-gray-500">Utility chart placeholder</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Overview</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-60 bg-gray-100 rounded-md flex items-center justify-center border">
                  <p className="text-gray-500">Maintenance chart placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
