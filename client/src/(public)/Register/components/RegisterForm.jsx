import React from 'react';
import { motion } from 'framer-motion';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lock, Mail, User } from 'lucide-react';

const RegisterForm = () => {
  return (
    <motion.form 
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex justify-center w-full gap-2 '>
      <div className="relative w-full">
        <Input id="emailAdress" type="email" placeholder="First Name" className="pl-10 w-full" />
        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
      </div>
      <div className="relative w-full">
        <Input id="emailAdress" type="email" placeholder="Last Name" className="pl-10 w-full" />
        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
      </div>
      </div>
      <div className="relative">
        <Input id="emailAdress" type="email" placeholder="Email address" className="pl-10" />
        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
      </div>
      <div className='flex justify-center w-full gap-2 '>
      <div className="relative w-full">
        <Input id="emailAdress" type="email" placeholder="Password" className="pl-10 w-full" />
        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
      </div>
      <div className="relative w-full">
        <Input id="emailAdress" type="email" placeholder="Confirm Password" className="pl-10 w-full" />
        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
      </div>
      </div>
      <div>
        <Button type="submit" className="w-full rounded-full">
          Sign Up
        </Button>
      </div>
    </motion.form>
  );
}

export default RegisterForm;
