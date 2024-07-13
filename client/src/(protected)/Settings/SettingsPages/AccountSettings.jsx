import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, CircleX, TriangleAlert } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import CustomLink from '@/hooks/CustomLink';
import { AuthContext } from '@/contexts/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import { LoadingSpinner } from '@/lib/LoadingSpinner';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delayChildren: 0.3, staggerChildren: 0.2 } },
};

const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const AccountSettings = () => {
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [formData, setFormData] = useState({ emailAddress: '', currentPassword: '', newPassword: '' });
  const [loading, setLoading] = useState(false);
  const { user,setUser } = useContext(AuthContext);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = async () => {
    setLoading(true);
    try {
      // Validate email format
      if (formData.emailAddress && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
        toast.error('Invalid email format');
        setLoading(false);
        return;
      }

      const response = await axios.post('/api/user/edit-account', {
        emailAddress: formData.emailAddress || user.emailAddress,
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      });

      setUser(response.data.user);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (err) {
      toast.error(err.response?.data?.message || 'An error occurred');
    }
    setLoading(false);
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
      <motion.section className="mt-8" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h2 className="text-xl font-semibold" variants={itemVariants}>
          Account
        </motion.h2>
        <motion.p className="text-sm text-gray-500" variants={itemVariants}>
          Update your account information
        </motion.p>
        <motion.div className="flex flex-col gap-4 justify-center items-center w-full" variants={itemVariants}>
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
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    placeholder="Email Address"
                    value={formData.emailAddress}
                    onChange={handleChange}
                  />
                  <Button type="button" size="sm" variant="transparent" onClick={() => setIsEditingEmail(false)}>
                    <CircleX className="h-5 w-5" />
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
                    {user.emailAddress}{' '}
                    <Button type="button" size="sm" variant="ghost" onClick={() => setIsEditingEmail(true)}>
                      Change
                    </Button>
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
                <Label htmlFor="currentPassword" className="text-xs">
                  Current Password
                </Label>
                <Input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  placeholder="Current Password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <Label htmlFor="newPassword" className="text-xs">
                  New Password
                </Label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  className="mt-1"
                  placeholder="New Password"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="w-full lg:w-1/3" variants={itemVariants}>
          {showSuccess ? (
          <Button className="w-full bg-green-700" size="sm" disabled>
                <CheckCircle className="mr-2 h-4 w-4" />
              Changes Saved Successfully
                        </Button>
      ) : (
        <Button className="w-full" size="sm" onClick={handleSaveChanges} disabled={loading}>
                          {loading && (
                <LoadingSpinner className="mr-2 h-4 w-4 animate-spin" />
              )} Save Changes
                        </Button>
      )}
          </motion.div>
          <Separator className="w-1/3" />
          <motion.div className="w-full lg:w-1/3" variants={itemVariants}>
            <Label className="flex items-center gap-1">
              <TriangleAlert className="text-red-400 h-5 w-5" /> Delete Account
            </Label>
            <p className="text-gray-500 text-sm">Once you delete your account we can't bring it back!</p>
            <Button size="sm" variant="destructive" className="mt-2 w-full">
              Delete Account
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AccountSettings;
