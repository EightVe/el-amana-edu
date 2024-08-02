import React, { useContext } from 'react';
import { Route, Routes, useLocation, matchPath } from 'react-router-dom';
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
import NewPassword from './(public)/ForgotPassword/NewPassword';
import About from './(public)/About/About';
import Universities from './(public)/Universities/Universities';
import NisantasiUni from './(public)/UniversitiesPages/Nisantasi';
import NisantasiUniMain from './(public)/UniversitiesPages/NisantasiUniversity/NisantasiUniMain';
import OkanUniMain from './(public)/UniversitiesPages/OkanUniversity/OkanUniMain';
import BiruniUniMain from './(public)/UniversitiesPages/BiruniUniversity/BiruniUniMain';
import BeykozUniMain from './(public)/UniversitiesPages/BeykozUniversity/BeykozUniMain';
import BeykentUniMain from './(public)/UniversitiesPages/BeykentUniversity/BeykentUniMain';
import BahcesehirUniMain from './(public)/UniversitiesPages/BahcesehirUniversity/BahcesehirUniMain';
import AtlasUniMain from './(public)/UniversitiesPages/AtlasUniversity/AtlasUniMain';
import AltinbasUniMain from './(public)/UniversitiesPages/AltinBasUniversity/AltinbasUniMain';
import GelisimUniMain from './(public)/UniversitiesPages/GelisimUniversity/GelisimUniMain';
import IstiniyeUniMain from './(public)/UniversitiesPages/IstiniyeUniversity/IstiniyeUniMain';
import IsikUniMain from './(public)/UniversitiesPages/IsikUniversity/IsikUniMain';
import MedipolUniMain from './(public)/UniversitiesPages/MedipolUniversity/MedipolUniMain';
import IstanbulKentUniMain from './(public)/UniversitiesPages/IstanbulKentUniversity/IstanbulKentUniMain';
import FenerbahceUniMain from './(public)/UniversitiesPages/FenerbahceUniversity/FenerbahceUniMain';
import Apply from './(protected)/Apply/Apply';
import TrackAppStatus from './(public)/TrackStatus/TrackAppStatus';

const AppContent = () => {
  const location = useLocation();
  const hideNavigationBarPaths = ['/login', '/signup', '/forgot-password','/application-status', '/verify-email','/apply','/','/about','/universities','/nisantasi-universitesi','/okan-universitesi','/biruni-universitesi','/beykoz-universitesi','/beykent-universitesi','/bahcesehir-universitesi','/atlas-universitesi','/altinbas-universitesi','/gelisim-universitesi','/istinye-universitesi','/isik-universitesi','/medipol-universitesi','/kent-universitesi','/fenerbahce-universitesi'];

  const hideNavigationBar = hideNavigationBarPaths.includes(location.pathname) || 
    matchPath('/reset-password/:token', location.pathname);

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/application-status" element={<TrackAppStatus />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/nisantasi-universitesi" element={<NisantasiUniMain />} />
        <Route path="/okan-universitesi" element={<OkanUniMain />} />
        <Route path="/biruni-universitesi" element={<BiruniUniMain />} />
        <Route path="/beykoz-universitesi" element={<BeykozUniMain />} />
        <Route path="/beykent-universitesi" element={<BeykentUniMain />} />
        <Route path="/bahcesehir-universitesi" element={<BahcesehirUniMain />} />
        <Route path="/atlas-universitesi" element={<AtlasUniMain />} />
        <Route path="/altinbas-universitesi" element={<AltinbasUniMain />} />
        <Route path="/gelisim-universitesi" element={<GelisimUniMain />} />
        <Route path="/istinye-universitesi" element={<IstiniyeUniMain />} />
        <Route path="/medipol-universitesi" element={<MedipolUniMain />} />
        <Route path="/kent-universitesi" element={<IstanbulKentUniMain />} />
        <Route path="/isik-universitesi" element={<IsikUniMain />} />
        <Route path="/fenerbahce-universitesi" element={<FenerbahceUniMain />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<NewPassword />} />
        <Route path="/settings" element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } />
                <Route path="/apply" element={
          <ProtectedRoute>
            <Apply />
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