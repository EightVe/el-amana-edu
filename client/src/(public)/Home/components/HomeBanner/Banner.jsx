import React from 'react';
import BannerVid from "@/vids/Banner.mp4";
import "../../../../index.css"
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="relative h-screen bg-black">
      <video 
        src={BannerVid} 
        autoPlay 
        muted 
        loop 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-75"
      ></video>

      <motion.div
        className="absolute top-0 left-0 w-full h-full flex justify-start items-end p-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="w-full xl:w-1/2 p-4 text-white font-medium text-lg xl:text-2xl paragfont">
          Amana Group was established by ambitious youth with more than 5 years of experience, as we have accreditation as authorized agents. For more than 30 universities, we provide students with the opportunity to get the best offers, discounts on annual tuition over all academic years and partial scholarships.
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
