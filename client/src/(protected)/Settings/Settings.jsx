import React from 'react';

import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Bell, Lock, LucideSettings, User } from 'lucide-react';
import AccountSessions from './components/AccountSessions';
import CustomLink from '@/hooks/CustomLink';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const Settings = () => {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <section className="mt-8">
        <motion.h2 
          className="text-xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          Settings
        </motion.h2>
        <motion.p 
          className="text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          Edit and manage everything as you want.
        </motion.p>
        <div className="grid gap-4 mt-4 sm:grid-cols-1 lg:grid-cols-4">
          <CustomLink to="/settings/profile">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <LucideSettings className="w-5 h-5 text-gray-700" />
                  <div>
                    <h3 className="text-sm font-semibold">Profile</h3>
                    <p className="text-xs text-gray-500">Edit your profile and everything that is visible to others</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </CustomLink>
          <CustomLink to="/settings/account">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-gray-700" />
                  <div>
                    <h3 className="text-sm font-semibold">Account</h3>
                    <p className="text-xs text-gray-500">Update your account information</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </CustomLink>
          <CustomLink to="/settings/security">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Card className="p-4">
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-gray-700" />
                <div>
                  <h3 className="text-sm font-semibold">Security</h3>
                  <p className="text-xs text-gray-500">Add more security to your account</p>
                </div>
              </div>
            </Card>
          </motion.div>
          </CustomLink>
        </div>
      </section>
      <section className="mt-8">
        <motion.h2 
          className="text-xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          Sessions
        </motion.h2>
        <motion.p 
          className="text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          View your account sessions.{' '}
          <Dialog>
  <DialogTrigger className='text-blue-500'>Learn more!</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>What Are Sessions?</DialogTitle>
      <DialogDescription>
      Our session management feature provides a clear overview of all active sessions associated with your account. When you log in, a session is created to keep you securely connected. If someone else logs into your account from a different device or location, you will be able to see that session listed as well. This allows you to monitor any unauthorized access to your account and take immediate action if needed. You can easily identify and manage active sessions, including the ability to delete any session that you do not recognize. This ensures your account remains secure and gives you control over who has access to your information.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.3 }}
        >
          <AccountSessions />
        </motion.div>
      </section>
    </div>
  );
};

export default Settings;
