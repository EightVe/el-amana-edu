import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import SEO from '@/lib/SEO';
import { Button } from '@/components/ui/button';
import RegisterForm from './components/RegisterForm';

const Register = () => {
  return (
    <>
      <SEO
        title="Eightve | Sign Up"
        description=" friendly page for learning React Helmet."
        name=" name."
        type="article"
      />
      <div className='h-screen w-full flex'>
        <div className='w-full flex flex-col justify-between'>
          <motion.div 
            className='flex justify-center items-center p-6'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Logo</h1>
          </motion.div>
          <motion.div 
            className=''
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className='text-center pb-4'>
              <h1 className='text-3xl font-medium text-center'>Join Us</h1>
              <p className='text-sm text-gray-500'>Fill the informations bellow to create your account.</p>
            </div>
            <div className='lg:px-32 px-14'>
              <RegisterForm />
            </div>
            <div className="flex items-center justify-center gap-2 pt-3">
              <div className="text-sm">
                <Link to="/login" className="font-medium text-primary hover:text-primary/90 text-sm">
                  Log In Instead
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className='text-center py-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className='text-gray-600 text-sm'>©2024 Eightve LTD. All Rights Reserved.</p>
          </motion.div>
        </div>
        <div 
          className='bg-black/30 h-screen w-full rounded-tl-3xl rounded-bl-3xl hidden lg:block'
        >
        </div>
      </div>
    </>
  )
}

export default Register;