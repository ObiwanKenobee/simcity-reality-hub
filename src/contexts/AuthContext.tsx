
import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { User } from '@supabase/supabase-js';
import { useToast } from "@/hooks/use-toast";

type Organization = {
  id: string;
  name: string;
  plan: string;
  subscription_active: boolean;
  subscription_start_date: string | null;
  subscription_end_date: string | null;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  organization: Organization | null;
  signIn: (email: string, password: string) => Promise<{error: any}>;
  signUp: (email: string, password: string, orgName: string) => Promise<{error: any}>;
  signOut: () => Promise<void>;
  checkAccess: (feature: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [organization, setOrganization] = useState<Organization | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check active session
    const checkSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          throw error;
        }
        
        if (session?.user) {
          setUser(session.user);
          await fetchOrganizationData(session.user.id);
        }
      } catch (error) {
        console.error('Error checking session:', error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          setUser(session.user);
          await fetchOrganizationData(session.user.id);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          setOrganization(null);
        }
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchOrganizationData = async (userId: string) => {
    try {
      // Get the first organization this user belongs to
      const { data: userOrgs, error: userOrgsError } = await supabase
        .from('user_organizations')
        .select('organization_id')
        .eq('user_id', userId)
        .limit(1);

      if (userOrgsError) throw userOrgsError;
      
      if (userOrgs && userOrgs.length > 0) {
        const { data: org, error: orgError } = await supabase
          .from('organizations')
          .select('*')
          .eq('id', userOrgs[0].organization_id)
          .single();
        
        if (orgError) throw orgError;
        setOrganization(org);
      }
    } catch (error) {
      console.error('Error fetching organization data:', error);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return { error };
    } catch (error) {
      return { error };
    }
  };

  const signUp = async (email: string, password: string, orgName: string) => {
    try {
      // 1. Create the user account
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) return { error: authError };

      if (authData.user) {
        // 2. Create the organization
        const { data: orgData, error: orgError } = await supabase
          .from('organizations')
          .insert([{ name: orgName }])
          .select()
          .single();

        if (orgError) return { error: orgError };

        // 3. Create the user-organization relationship
        const { error: relError } = await supabase
          .from('user_organizations')
          .insert([{ 
            user_id: authData.user.id, 
            organization_id: orgData.id,
            role: 'admin'
          }]);

        if (relError) return { error: relError };

        // Create user profile
        const { error: profileError } = await supabase
          .from('user_profiles')
          .insert([{
            id: authData.user.id,
            name: email.split('@')[0],
            role: 'Admin',
            organization: orgName
          }]);

        if (profileError) return { error: profileError };

        setOrganization(orgData);
      }

      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  // Function to check access to features based on plan
  const checkAccess = (featureName: string): boolean => {
    if (!organization) return false;
    
    // Different plan tiers have access to different features
    switch(organization.plan) {
      case 'enterprise':
        // Enterprise has access to everything
        return true;
      case 'growth':
        // Growth has access to all except enterprise-specific features
        return !['simulation_engine', 'custom_integrations', 'unlimited_team_members', 'dedicated_support'].includes(featureName);
      case 'starter':
        // Starter has access to basic features only
        return ['basic_unit_manager', 'tenant_portal', 'maintenance_scheduling', 'standard_support'].includes(featureName);
      default:
        return false;
    }
  };

  const value = {
    user,
    loading,
    organization,
    signIn,
    signUp,
    signOut,
    checkAccess
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
