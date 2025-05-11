
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from './ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface DemoRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
  planType?: 'starter' | 'growth' | 'enterprise';
}

const DemoRequestForm: React.FC<DemoRequestFormProps> = ({ 
  isOpen, 
  onClose,
  planType = 'growth'
}) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add to waitlist table
      const { error } = await supabase.from('waitlist').insert([{
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: `Plan: ${planType}, Role: ${formData.role}, Message: ${formData.message}`
      }]);

      if (error) throw error;

      toast({
        title: "Demo request submitted",
        description: "We'll get back to you soon about your demo request."
      });

      // Close and navigate to confirmation page
      onClose();
      navigate('/auth/demo-confirmation');
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Request a Demo for {planType.charAt(0).toUpperCase() + planType.slice(1)} Plan</DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will contact you to schedule a personalized demo.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <Input 
                id="email" 
                name="email" 
                type="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">Company</label>
              <Input 
                id="company" 
                name="company" 
                value={formData.company}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-medium">Role</label>
              <Input 
                id="role" 
                name="role" 
                value={formData.role}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Additional Information</label>
            <Textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3} 
              placeholder="Tell us about your property needs and any specific features you're interested in."
            />
          </div>
          
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-simcity-600 hover:bg-simcity-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoRequestForm;
