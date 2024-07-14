import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import CustomLink from '@/hooks/CustomLink';
import { AuthContext } from '@/contexts/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      delayChildren: 0.3, staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SecuritySettings = () => {
  const { user } = useContext(AuthContext);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  useEffect(() => {
    setTwoFactorEnabled(user.twoFactorEnabled);
  }, [user]);

  const handleToggleTwoFac = async () => {
    const loadingToastId = toast.loading('Processing...');
    try {
      const endpoint = twoFactorEnabled ? '/api/user/disable-twofac' : '/api/user/enable-twofac';
      const response = await axios.post(endpoint, {}, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setTwoFactorEnabled(!twoFactorEnabled);
      toast.success('Success', {
        id: loadingToastId,
      });
    } catch (error) {
      toast.error('Session expired please refresh the page.', {
        id: loadingToastId,
      });
      console.error('Error toggling 2FA:', error);
    }
  };

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
                <p className="text-gray-500 text-sm">We send you an OTP code to your email each time you log in</p>
              </div>
              <div 
                className={`relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-gray-200 rounded-full ${twoFactorEnabled ? 'bg-green-500' : ''}`}
                onClick={handleToggleTwoFac}
              >
                <span 
                  className={`absolute left-0 w-6 h-6 transition-transform transform bg-white rounded-full shadow ${twoFactorEnabled ? 'translate-x-6' : ''}`}
                ></span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default SecuritySettings;
