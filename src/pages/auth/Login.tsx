
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Building } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, we'll just navigate to a dashboard
    navigate('/workspace/demo/dashboard');
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Link to="/" className="flex items-center">
              <Building className="h-8 w-8 text-simcity-600" />
              <span className="ml-2 text-xl font-semibold text-simcity-900">SimCity OS</span>
            </Link>
          </div>
          <CardTitle className="text-2xl text-center">Sign in to your account</CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to access your workspace
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" type="email" placeholder="name@company.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <Link to="/auth/forgot-password" className="text-xs text-simcity-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full bg-simcity-600 hover:bg-simcity-700">
              Sign in
            </Button>
            <div className="text-center text-sm">
              Don't have an account?{' '}
              <Link to="/auth/register" className="text-simcity-600 hover:underline">
                Create an account
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
