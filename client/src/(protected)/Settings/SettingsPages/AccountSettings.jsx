import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CircleX, TriangleAlert } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
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

const AccountSettings = () => {
  const [isEditingEmail, setIsEditingEmail] = useState(false);

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
          Account
        </motion.h2>
        <motion.p className="text-sm text-gray-500" variants={itemVariants}>
          Update your account information
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 justify-center items-center w-full"
          variants={itemVariants}
        >
          <Separator className="mt-6 w-1/3" />
          <motion.div className="w-full lg:w-1/3" variants={itemVariants}>
            <Label htmlFor="email">Email Address</Label>
           
            <AnimatePresence initial={false}>
              {isEditingEmail ? (
                <motion.div
                  key="input"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center"
                >
                  
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                  />
                  <Button type="button" size="sm" variant="transparent" onClick={() => setIsEditingEmail(false)}>
                    <CircleX className='h-5 w-5'/>
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="text"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <p className="text-sm flex justify-between text-gray-600 items-center">
                    hfjsh@gmail.com <Button type="button" size="sm" variant="ghost" onClick={() => setIsEditingEmail(true)}>Change</Button>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          <motion.div className="w-full lg:w-1/3" variants={itemVariants}>
            <div>
              <Label>Password</Label>
              <p className="text-gray-500 text-sm">Modify your current password</p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div className="w-full">
                <Label htmlFor="currentPassword" className="text-xs">Current Password</Label>
                <Input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  placeholder="Current Password"
                />
              </div>
              <div className="w-full">
                <Label htmlFor="newPassword" className="text-xs">New Password</Label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  className="mt-1"
                  placeholder="New Password"
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="w-full lg:w-1/3" variants={itemVariants}>
            <Button className="w-full" size="sm">Save Changes</Button>
          </motion.div>
          <Separator className="w-1/3" />
          <motion.div className="w-full lg:w-1/3" variants={itemVariants}>
            <Label className="flex items-center gap-1"><TriangleAlert className='text-red-400 h-5 w-5'/> Delete Account</Label>
            <p className="text-gray-500 text-sm">Once you delete your account we can't bring it back!</p>
            <Button size="sm" variant="destructive" className="mt-2 w-full">Delete Account</Button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default AccountSettings;
