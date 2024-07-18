import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import "../../../index.css";

const HomePageLoading = ({ onComplete, loadedAssets, totalAssets }) => {
  const countRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const countElement = countRef.current;
    const lineElement = lineRef.current;

    const updateProgress = () => {
      const percentage = (loadedAssets / totalAssets) * 100;
      const paddedPercentage = String(Math.min(Math.round(percentage), 100)).padStart(3, '0');
      countElement.innerText = paddedPercentage;
      gsap.to(lineElement, {
        width: `${percentage}%`,
        duration: 0.1,
        ease: "power1.inOut"
      });
    };

    updateProgress();

    if (loadedAssets === totalAssets) {
      gsap.to([countElement, lineElement], {
        opacity: 0,
        duration: 1,
        onComplete: function () {
          console.log('Loading animation complete');
          onComplete();
        }
      });
    }
  }, [loadedAssets, totalAssets, onComplete]);

  return (
    <motion.div
      className='fixed top-0 overflow-hidden w-full h-screen z-[999] flex justify-center items-center'
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: '-100vh', opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className='relative flex flex-col justify-center items-center h-screen w-full text-black'>
        <span ref={countRef} className='paragfont uppercase text-6xl lg:text-9xl mb-4'>000</span>
        <div
          ref={lineRef}
          className='w-full h-[2px] bg-[#aaaa9b]'
          style={{ width: '0%' }}
        ></div>
      </div>
    </motion.div>
  );
}

export default HomePageLoading;
