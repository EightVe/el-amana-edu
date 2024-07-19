import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import GIF from '../noise.gif';

const AboutBanner = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { 
      clipPath: 'inset(0 0 0 0)', 
      transition: { 
        duration: 2, 
        ease: 'easeInOut'
      } 
    }
  };

  return (
    <div
      className={`h-screen flex justify-center items-center w-full paragfont px-6 md:px-12 lg:px-36 ${isArabic ? 'arabic-font' : 'paragfont'} relative`}
      ref={ref}
      
    >
      <motion.h1
        className='text-4xl lg:text-5xl relative z-10'
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={variants}
        style={{
          whiteSpace: 'wrap',
        }}
      >
        {t('about_text')}
      </motion.h1>
    </div>
  );
};

export default AboutBanner;
