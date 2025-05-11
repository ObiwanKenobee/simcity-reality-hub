
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

interface PaystackCheckoutProps {
  plan: 'starter' | 'growth' | 'enterprise';
  amount: number; // Amount in USD
  isOpen: boolean;
  onClose: () => void;
}

// This assumes the Paystack script is loaded via index.html or loaded dynamically
declare global {
  interface Window {
    PaystackPop: any;
  }
}

const PaystackCheckout: React.FC<PaystackCheckoutProps> = ({ 
  plan, 
  amount, 
  isOpen, 
  onClose 
}) => {
  const { user, organization } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!isOpen) return;

    // Check if user is authenticated
    if (!user) {
      onClose();
      navigate(`/auth/login?redirect=/pricing`);
      toast({
        title: "Authentication required",
        description: "Please sign in to subscribe to a plan.",
      });
      return;
    }

    // Load Paystack script if not already loaded
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    
    script.onload = () => {
      initializePaystack();
    };
    
    document.body.appendChild(script);
    
    return () => {
      // Clean up if component unmounts before script loads
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [isOpen, user]);

  const initializePaystack = () => {
    if (!user || !window.PaystackPop) return;
    
    // Calculate amount in kobo (Nigerian currency) or cents
    const amountInCents = amount * 100;
    
    const handler = window.PaystackPop.setup({
      key: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Replace with your Paystack public key
      email: user.email,
      amount: amountInCents,
      currency: 'USD',
      metadata: {
        plan_name: plan,
        user_id: user.id,
        organization_id: organization?.id
      },
      callback: async (response: any) => {
        // This callback is called when payment is successful
        await handleSuccessfulPayment(response);
      },
      onClose: () => {
        // This callback is called when the payment modal is closed
        onClose();
        toast({
          title: "Payment cancelled",
          description: "You can complete your subscription at any time.",
        });
      }
    });
    
    handler.openIframe();
  };

  const handleSuccessfulPayment = async (response: any) => {
    try {
      if (!organization) {
        throw new Error("Organization not found");
      }

      // Calculate subscription period (1 month from now)
      const startDate = new Date();
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + 1);

      // Update organization with subscription details
      const { error: updateError } = await supabase
        .from('organizations')
        .update({
          plan: plan,
          paystack_ref: response.reference,
          subscription_active: true,
          subscription_start_date: startDate.toISOString(),
          subscription_end_date: endDate.toISOString()
        })
        .eq('id', organization.id);

      if (updateError) throw updateError;

      // Record payment in payment_history
      const { error: paymentError } = await supabase
        .from('payment_history')
        .insert([{
          organization_id: organization.id,
          amount: amount,
          status: 'success',
          paystack_ref: response.reference
        }]);

      if (paymentError) throw paymentError;

      toast({
        title: "Payment successful!",
        description: `Your ${plan} subscription is now active.`
      });

      onClose();
      navigate('/workspace/demo/dashboard');
    } catch (error) {
      console.error('Error processing payment:', error);
      toast({
        title: "Payment processing error",
        description: "There was an issue activating your subscription. Please contact support.",
        variant: "destructive"
      });
    }
  };

  // We don't render anything - Paystack creates its own overlay
  return null;
};

export default PaystackCheckout;
