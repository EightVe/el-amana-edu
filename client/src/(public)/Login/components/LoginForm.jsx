import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import { LoadingSpinner } from '@/lib/LoadingSpinner';
import axiosInstance from '@/lib/axiosInstance';
import { AuthContext } from '@/contexts/AuthContext';

const LoginForm = () => {
  const [formData, setFormData] = useState({ emailAddress: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post('/auth/login', formData);
      if (response.status !== 200) {
        setLoading(false);
        toast.error(response.data.message || "An Error Occurred");
        return;
      }
      const { user } = response.data;
      setUser(user); // Set user context
      setLoading(false);
      toast.success("Welcome Back!");
      window.location.href="/"
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || "An Error Occurred");
    }
  };

  return (
    <motion.form 
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <Input 
          disabled={loading} 
          id="emailAddress" 
          name="emailAddress" 
          type="email" 
          placeholder="Email address" 
          className="pl-10" 
          onChange={handleChange}
          aria-label="Email address"
        />
        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
      </div>
      <div className="relative">
        <Input 
          disabled={loading} 
          id="password" 
          name="password" 
          type="password" 
          placeholder="Password" 
          className="pl-10" 
          onChange={handleChange}
          aria-label="Password"
        />
        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
      </div>
      <div>
        <Button type="submit" className="w-full rounded-full" disabled={loading} aria-label="Log In">
          {loading && (
            <LoadingSpinner className="mr-2 h-4 w-4 animate-spin" />
          )} Log In
        </Button>
      </div>
    </motion.form>
  );
}

export default LoginForm;
