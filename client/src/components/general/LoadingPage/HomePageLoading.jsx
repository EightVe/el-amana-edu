import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import "../../../index.css";

const HomePageLoading = ({ onComplete }) => {
  const countRef = useRef(null);

  useEffect(() => {
    const countElement = countRef.current;

    // GSAP animation for counting from 0 to 100
    gsap.to(countElement, {
      innerText: 100,
      duration: 5, // Duration for the countdown
      snap: { innerText: 1 },
      ease: "power1.inOut",
      onUpdate: function () {
        countElement.innerText = countElement.innerText.padStart(3, '0');
      },
      onComplete: function () {
        // Smoothly hide the counter
        gsap.to(countElement, {
          opacity: 0,
          duration: 1,
          onComplete: function () {
            // Trigger the exit animation
            onComplete();
          }
        });
      }
    });
  }, [onComplete]);

  return (
    <motion.div
      className='fixed top-0 overflow-hidden w-full h-screen z-[999]  flex justify-center items-center'
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: '-100vh', opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className='flex justify-center items-center h-screen w-full text-black'>
        <span ref={countRef} className='paragfont uppercase text-6xl lg:text-9xl'>000</span>
      </div>
    </motion.div>
  );
}

export default HomePageLoading;
