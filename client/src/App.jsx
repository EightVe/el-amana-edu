import React, { useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
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
import { LoadingSpinner } from './lib/LoadingSpinner';

const AppContent = () => {
  const location = useLocation();
  const hideNavigationBar = ['/login', '/signup', '/forgot-password', '/verify-email'].includes(location.pathname);
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className='h-screen w-full z-50 fixed top-0 flex justify-center items-center bg-white'>
        <LoadingSpinner className="h-6 w-6 animate-spin" />
      </div>
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
