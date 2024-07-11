import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CircleX, TriangleAlert } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import CustomLink from '@/hooks/CustomLink';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SecuritySettings = () => {

  return (
    <div className="min-h-screen p-4 md:p-8">
      <motion.header 
        className="flex items-center justify-between pb-4 border-b"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <CustomLink to="/settings">
          <div className="flex items-center space-x-2">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
            <h1 className="text-lg font-semibold">Settings</h1>
            <span className="text-sm text-gray-500">| View all settings</span>
          </div>
        </CustomLink>
      </motion.header>
      <motion.section
        className="mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-xl font-semibold" variants={itemVariants}>
          Security
        </motion.h2>
        <motion.p className="text-sm text-gray-500" variants={itemVariants}>
        Add more security to your account
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 justify-center items-center w-full"
          variants={itemVariants}
        >
          <Separator className="mt-6 w-1/3" />
        
          
          <motion.div className="w-full lg:w-1/3" variants={itemVariants}>
            <div className='flex justify-between items-center'>
              <div>
              <Label>Two-factor authentication</Label>
              <p className="text-gray-500 text-sm">We send you (OTP) code in your email each time you log in</p>
              </div>
              <Switch/>
            </div>
           
     
          </motion.div>

          <motion.div className="w-full lg:w-1/3" variants={itemVariants}>
            <Button className="w-full" size="sm">Save Changes</Button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default SecuritySettings;
