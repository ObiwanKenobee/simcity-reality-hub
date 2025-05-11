
import React, { useState, useEffect } from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, CreditCard, CheckCircle, AlertTriangle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';

interface PaymentRecord {
  id: string;
  amount: number;
  currency: string;
  status: string;
  paystack_ref: string;
  transaction_date: string;
}

const BillingDashboard: React.FC = () => {
  const { organization } = useAuth();
  const [paymentHistory, setPaymentHistory] = useState<PaymentRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      if (!organization) return;
      
      try {
        const { data, error } = await supabase
          .from('payment_history')
          .select('*')
          .eq('organization_id', organization.id)
          .order('transaction_date', { ascending: false });
          
        if (error) throw error;
        setPaymentHistory(data || []);
      } catch (error) {
        console.error('Error fetching payment history:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPaymentHistory();
  }, [organization]);

  const getPlanDetails = () => {
    if (!organization) return { name: 'Free', price: '$0', features: [], color: 'gray' };
    
    switch (organization.plan) {
      case 'starter':
        return {
          name: 'Starter',
          price: '$49',
          features: ['Basic unit manager', 'Tenant portal', 'Maintenance scheduling', 'Up to 3 team members'],
          color: 'blue'
        };
      case 'growth':
        return {
          name: 'Growth',
          price: '$399',
          features: ['All Starter features', 'Predictive maintenance', 'AI-driven alerts', 'Energy usage analytics', 'Up to 10 team members'],
          color: 'teal'
        };
      case 'enterprise':
        return {
          name: 'Enterprise',
          price: 'Custom',
          features: ['All Growth features', 'Full API access', 'Simulation engine', 'Custom integrations', 'Unlimited team members'],
          color: 'purple'
        };
      default:
        return {
          name: 'Free',
          price: '$0',
          features: ['Limited access', 'Basic features'],
          color: 'gray'
        };
    }
  };
  
  const planDetails = getPlanDetails();
  
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch (e) {
      return 'N/A';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Billing & Subscription</h1>
            <p className="text-gray-500">Manage your subscription and billing information</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Current Plan Card */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>Your active subscription details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-2xl font-bold text-simcity-700">{planDetails.name}</h3>
                      <Badge 
                        className={`ml-2 bg-${planDetails.color}-100 text-${planDetails.color}-700 border border-${planDetails.color}-200`}
                      >
                        {organization?.subscription_active ? 'Active' : 'Inactive'}
                      </Badge>
                    </div>
                    <p className="text-lg font-medium text-gray-600 mt-1">{planDetails.price}/month</p>
                  </div>
                  
                  {organization?.subscription_active && organization?.subscription_end_date && (
                    <div className="mt-4 md:mt-0 flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      Renews on {formatDate(organization.subscription_end_date)}
                    </div>
                  )}
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Plan Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {planDetails.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button className="bg-simcity-600 hover:bg-simcity-700">
                    Upgrade Plan
                  </Button>
                  <Button variant="outline">
                    Update Billing Info
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Payment Summary Card */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
                <CardDescription>Your recent payment history</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-6">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-simcity-700"></div>
                  </div>
                ) : paymentHistory.length > 0 ? (
                  <div className="space-y-4">
                    {paymentHistory.map(payment => (
                      <div key={payment.id} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium">
                              {payment.currency} {payment.amount}
                            </div>
                            <div className="text-xs text-gray-500">
                              {formatDate(payment.transaction_date)}
                            </div>
                          </div>
                          <Badge className={payment.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                            {payment.status}
                          </Badge>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          Ref: {payment.paystack_ref}
                        </div>
                      </div>
                    ))}
                    
                    <Button variant="outline" className="w-full mt-2">
                      View All Transactions
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <CreditCard className="mx-auto h-8 w-8 text-gray-400" />
                    <p className="mt-1 text-gray-500">No payment history yet</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Additional Billing Info */}
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Billing Contact</h4>
                    <div className="p-4 border rounded-lg">
                      <div className="font-medium">{organization?.name}</div>
                      <div className="text-gray-500">{organization?.billing_email || 'No billing email set'}</div>
                    </div>
                    <Button variant="outline" className="mt-3">
                      Update Contact Info
                    </Button>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Payment Method</h4>
                    <div className="p-4 border rounded-lg flex items-center">
                      <CreditCard className="h-8 w-8 mr-3 text-gray-500" />
                      <div>
                        <div className="font-medium">Paystack</div>
                        <div className="text-gray-500">Automatic payments</div>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-3">
                      Change Payment Method
                    </Button>
                  </div>
                </div>
                
                <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-700">
                    Canceling your subscription will downgrade your plan to the free tier at the end of your billing period.
                    Contact support if you have any questions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BillingDashboard;
