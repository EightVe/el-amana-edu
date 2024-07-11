import React from 'react';

import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Bell, Lock, LucideSettings, User } from 'lucide-react';
import AccountSessions from './components/AccountSessions';
import CustomLink from '@/hooks/CustomLink';
import { Link } from 'react-router-dom';

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
          <Link to="#" className="text-blue-600">
            Learn more!
          </Link>
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
