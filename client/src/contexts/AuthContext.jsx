import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '@/lib/axiosInstance';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axiosInstance.get('/auth/user-info');
        setUser(response.data);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const handleAuthError = async () => {
      if (!loading && !user) {
        const refreshToken = Cookies.get('refreshToken');
        if (refreshToken) {
          try {
            const response = await axiosInstance.post('/auth/refresh-token');
            if (response.status === 200) {
              const userInfoResponse = await axiosInstance.get('/auth/user-info');
              setUser(userInfoResponse.data);
            } else if (response.status === 401) {
              console.log('Error refreshing token, navigating to login:');
              // navigate('/login');
            }
          } catch (error) {
            console.log('Error refreshing token, navigating to login:', error);
            // navigate('/login');
          }
        } else {
          console.log('No refresh token found, navigating to login');
          // navigate('/login');
        }
      }
    };

    handleAuthError();
  }, [loading, user, navigate]);

  const logout = async () => {
    try {
      await axiosInstance.post('/auth/logout');
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
      setUser(null);
      navigate('/login');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
