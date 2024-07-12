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
              
              // navigate('/login');
            }
          } catch (error) {
          
            // navigate('/login');
          }
        } else {
         
          // navigate('/login');
        }
      }
    };

    handleAuthError();
  }, [loading, user, navigate]);
  const saveGeoLocation = async (userId, city, country_name, ip, org, postal, version, network, country_capital) => {
    try {
        const res = await fetch('/api/auth/geolocation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, city, country_name, ip, org, postal, version, network, country_capital }),
        });
        const data = await res.json();
        console.log(data.message);
    } catch (err) {
        console.log('Error saving geolocation:', err);
    }
};

useEffect(() => {
    const getGeoLocation = async () => {
        if (!user || !user._id) {
            // If there is no user, return without doing anything
            return;
        }
        try {
            const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
            const data = await res.text();
            const ip = data.match(/ip=(.*)/)[1].trim();

            const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
            const geoData = await geoRes.json();
            console.log('Geolocation Data:', geoData);
            const userId = user._id;
            saveGeoLocation(userId, geoData.city, geoData.country_name, geoData.ip, geoData.org, geoData.postal, geoData.version, geoData.network, geoData.country_capital);
        } catch (err) {
            console.log(err);
        }
    };
    getGeoLocation();
}, [user]);


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
