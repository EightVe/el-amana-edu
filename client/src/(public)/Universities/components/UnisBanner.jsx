import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

const UnisBanner = () => {
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
      className={`h-screen flex flex-col gap-2 justify-center items-center w-full paragfont px-6 md:px-12 lg:px-36 ${isArabic ? 'arabic-font' : 'paragfont'} relative`}
      ref={ref}
      
    >
      <motion.h1
        className='text-6xl lg:text-8xl relative z-10'
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={variants}
        style={{
          whiteSpace: 'wrap',
        }}
      >
        {t('UniversitiesTitle')}
      </motion.h1>
    </div>
  );
};

export default UnisBanner;
