import React from 'react';
import { motion } from 'framer-motion';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lock, Mail } from 'lucide-react';

const LoginForm = () => {
  return (
    <motion.form 
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <Input id="emailAdress" type="email" placeholder="Email address" className="pl-10" />
        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
      </div>
      <div className="relative">
        <Input id="password" type="password" placeholder="Password" className="pl-10" />
        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
      </div>
      <div>
        <Button type="submit" className="w-full rounded-full">
          Log In
        </Button>
      </div>
    </motion.form>
  );
}

export default LoginForm;
