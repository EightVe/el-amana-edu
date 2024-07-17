import React, { useContext, useState, useEffect } from 'react';
import { Route, Routes, useLocation, matchPath } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AuthProvider, AuthContext } from '@/contexts/AuthContext';
import ProtectedRoute from './lib/ProtectedRoute';
import AdminRoute from './lib/AdminRoute';
import NavigationBar from './components/general/NavigationBar';
import Login from './(public)/Login/Login';
import Home from './(public)/Home/Home';
import Register from './(public)/Register/Register';
import ForgotPassword from './(public)/ForgotPassword/ForgotPassword';
import Settings from './(protected)/Settings/Settings';
import ProfileSettings from './(protected)/Settings/SettingsPages/ProfileSettings';
import AccountSettings from './(protected)/Settings/SettingsPages/AccountSettings';
import SecuritySettings from './(protected)/Settings/SettingsPages/SecuritySettings';
import Dashboard from './(protected)/Dashboard/Dashboard';
import Profile from './(protected)/Profile/Profile';
import EmailVerify from '@/functions/EmailVerify';
import NewPassword from './(public)/ForgotPassword/NewPassword';
import NavBar from './components/general/NavBar';

import { AnimatePresence } from 'framer-motion';
import HomePageLoading from './components/general/LoadingPage/HomePageLoading';

const AppContent = () => {
  const location = useLocation();
  const hideNavigationBarPaths = ['/login', '/signup', '/forgot-password', '/verify-email', '/'];
  const hideNavigationBar = hideNavigationBarPaths.includes(location.pathname) || matchPath('/reset-password/:token', location.pathname);

  const { user, loading } = useContext(AuthContext);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [fetchingComplete, setFetchingComplete] = useState(false);

  useEffect(() => {
    if (!loading) {
      setFetchingComplete(true);
    }
  }, [loading]);

  useEffect(() => {
    if (!loading && !user) {
      toast.error("Unauthorized, Please Log In.");
    }
  }, [loading, user]);

  const handleComplete = () => {
    setAnimationComplete(true);
  };

  if (!animationComplete || !fetchingComplete) {
    return (
      <AnimatePresence>
        <HomePageLoading onComplete={handleComplete} />
      </AnimatePresence>
    );
  }

  if (user && !user.verifiedEmail) {
    return <EmailVerify />;
  }

  return (
    <>
      {!hideNavigationBar && <NavigationBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<NewPassword />} />
        <Route path="/settings" element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } />
        <Route path="/settings/profile" element={
          <ProtectedRoute>
            <ProfileSettings />
          </ProtectedRoute>
        } />
        <Route path="/settings/account" element={
          <ProtectedRoute>
            <AccountSettings />
          </ProtectedRoute>
        } />
        <Route path="/settings/security" element={
          <ProtectedRoute>
            <SecuritySettings />
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        } />
      </Routes>
    </>
  );
};

const App = () => (
  <>
    <Toaster position="top-center" />
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  </>
);

export default App;
