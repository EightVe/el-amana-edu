import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '@/lib/axiosInstance';
import Cookies from 'js-cookie';

const CustomLink = ({ to, children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const refreshToken = Cookies.get('refreshToken');

    // If there is a refresh token, navigate directly
    if (refreshToken) {
      navigate(to);
      return;
    }

    // If there is no refresh token, try to refresh the token
    try {
      const response = await axiosInstance.post('/auth/refresh-token');
      if (response.status === 200) {
        navigate(to);
      } else {
        navigate('/login');
      }
    } catch (error) {
      navigate('/login');
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
