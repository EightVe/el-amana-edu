// functions/EmailVerify.js
import { Button } from '@/components/ui/button';
import { AuthContext } from '@/contexts/AuthContext';
import React, { useContext, useState } from 'react';
import { TriangleAlert } from 'lucide-react';
import logo from "@/imgs/WebLogo2.png"
import toast from 'react-hot-toast';
const EmailVerify = () => {
  const { user } = useContext(AuthContext);
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [sent,setSent] = useState(false)
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
        toast.success('OTP Has been sent to your email!');
        setSent(true)
      } else {
        toast.error('Error sending OTP.');
        setSent(false)
      }
    } catch (error) {
      toast.error('Error sending OTP.');
      setSent(false)
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
        window.location.reload();
      } else {
        toast.error('Error verifying OTP.');
      }
    } catch (error) {
      toast.error('Error verifying OTP.');
    }
  };

  return (
    <>
    <div className="mx-auto h-screen max-w-xl bg-white dark:bg-gray-800 p-8 rounded-md flex justify-center items-center flex-col">
      <div className="flex items-center justify-center mb-6">
        <img
          src={logo}
          height="100"
          width="100"
          alt="Logo"
          style={{ aspectRatio: "100/100", objectFit: "cover" }}
        />
      </div>
      {sent ? <div>
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">Verify your OTP</h1>
        <input
        type='text'
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder='Enter OTP'
        className='mt-2 p-2 border rounded'
      />
      <Button className='mt-3 ml-2' onClick={verifyOTP}>Verify OTP</Button>
      </div> : 
      <>
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">Verify your email address</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Thanks for signing up! We're excited to have you onboard. We just need you to verify your email address to
        complete your setup. Click the button below to send OTP to your email <span className='font-bold'>{user.emailAddress}</span>.
      </p>
      <div className="flex justify-center mb-6">
        <Button variant="default" onClick={sendOTP} >
          Verify Email
        </Button>
      </div>
      </>
      }
    </div>
    
    </>
  );
};

export default EmailVerify;
