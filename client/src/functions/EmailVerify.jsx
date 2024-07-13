// functions/EmailVerify.js
import { Button } from '@/components/ui/button';
import { AuthContext } from '@/contexts/AuthContext';
import React, { useContext, useState } from 'react';
import { TriangleAlert } from 'lucide-react';

const EmailVerify = () => {
  const { user } = useContext(AuthContext);
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const sendOTP = async () => {
    try {
      const response = await fetch('/api/verifications/send-email-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user._id,
          email: user.emailAddress,
        }),
      });

      if (response.ok) {
        setMessage('OTP sent to your email.');

      } else {
        setMessage('Error sending OTP.');
      }
    } catch (error) {
      setMessage('Error sending OTP.');
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await fetch('/api/verifications/verify-email-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user._id,
          otp,
        }),
      });

      if (response.ok) {
        setMessage('Email verified successfully.');
        window.location.reload();
      } else {
        setMessage('Error verifying OTP.');
      }
    } catch (error) {
      setMessage('Error verifying OTP.');
    }
  };

  return (
    <div className='flex items-center justify-center h-screen w-full flex-col'>
      <TriangleAlert className='h-10 w-10' />
      <h1 className='text-2xl font-bold text-gray-800'>Email Verification</h1>
      <p className='text-gray-500'>In order to continue please verify your email!</p>

      <Button className='mt-3' onClick={sendOTP}>Send OTP Code</Button>
      <p>{message}</p>
      <input
        type='text'
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder='Enter OTP'
        className='mt-2 p-2 border rounded'
      />
      <Button className='mt-3' onClick={verifyOTP}>Verify OTP Code</Button>
    </div>
  );
};

export default EmailVerify;
