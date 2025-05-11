
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  trendValue?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon,
  trendValue,
  trendDirection,
  className,
}) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h4 className="text-2xl font-bold mt-1">{value}</h4>
            {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
            
            {trendValue && (
              <div className="flex items-center mt-2">
                <span 
                  className={cn(
                    "text-xs font-medium mr-1",
                    trendDirection === 'up' && "text-green-600",
                    trendDirection === 'down' && "text-red-600",
                    trendDirection === 'neutral' && "text-gray-600"
                  )}
                >
                  {trendValue}
                </span>
                {trendDirection === 'up' && (
                  <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                )}
                {trendDirection === 'down' && (
                  <svg className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
              </div>
            )}
          </div>
          
          {icon && (
            <div className="p-2 rounded-lg bg-gray-100">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
