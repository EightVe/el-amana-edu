import { Route, Routes } from "react-router-dom";
import Login from "./(public)/Login/Login";
import Home from "./(public)/Home/Home";
import { Toaster } from "react-hot-toast";
import Register from "./(public)/Register/Register";
import ForgotPassword from "./(public)/ForgotPassword/ForgotPassword";
import Settings from "./(protected)/Settings/Settings";
import ProfileSettings from "./(protected)/Settings/SettingsPages/ProfileSettings";
import AccountSettings from "./(protected)/Settings/SettingsPages/AccountSettings";
import SecuritySettings from "./(protected)/Settings/SettingsPages/SecuritySettings";

function App() {
  return (
    <>
      <Toaster position="top-center"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/profile" element={<ProfileSettings />} />
        <Route path="/settings/account" element={<AccountSettings />} />
        <Route path="/settings/security" element={<SecuritySettings />} />

      </Routes>
    </>
  );
}

export default App;
