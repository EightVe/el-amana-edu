import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '@/contexts/AuthContext';
import { LoadingSpinner } from './LoadingSpinner';
import toast from 'react-hot-toast';

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className='h-screen w-full z-50 fixed top-0 flex justify-center items-center bg-white'><LoadingSpinner className="h-6 w-6 animate-spin"/></div>;
  }

  if (!user) {
    toast.error("Unauthorized, Please Log In")
    return <Navigate to="/login" />;
  }
  
  if (!user.isAdmin) {
    toast.error("Unauthorized")
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
