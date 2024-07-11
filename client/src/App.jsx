import { Route, Routes } from "react-router-dom";
import Login from "./(public)/Login/Login";
import Home from "./(public)/Home/Home";
import Register from "./(public)/Register/Register";
import ForgotPassword from "./(public)/ForgotPassword/ForgotPassword";
import Settings from "./(protected)/Settings/Settings";
import ProfileSettings from "./(protected)/Settings/SettingsPages/ProfileSettings";
import AccountSettings from "./(protected)/Settings/SettingsPages/AccountSettings";
import SecuritySettings from "./(protected)/Settings/SettingsPages/SecuritySettings";
import Dashboard from "./(protected)/Dashboard/Dashboard";
import Profile from "./(protected)/Profile/Profile";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./lib/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import AdminRoute from "./lib/AdminRoute";

const App = () => (
  <>
    <Toaster position="top-center" />
    <AuthProvider>
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
    </AuthProvider>
  </>
);

export default App;
