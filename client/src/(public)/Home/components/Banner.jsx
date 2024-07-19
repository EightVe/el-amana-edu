import React from 'react';
import BannerVid from "@/vids/Banner.mp4";
import "../../../index.css";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div className="relative h-screen bg-black">
      <div
        className="absolute top-0 left-0 w-full h-full"
        dangerouslySetInnerHTML={{
          __html: `
            <video 
              class="absolute top-0 left-0 w-full h-full object-cover opacity-75" 
              playsinline 
              autoplay 
              loop 
              muted
            >
              <source src="${BannerVid}" type="video/mp4" />
            </video>
          `
        }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex justify-start items-end p-4"
        initial={{ x: isArabic ? 100 : -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className={`w-full xl:w-1/2 p-4 text-white font-medium text-lg xl:text-2xl ${isArabic ? 'arabic-font' : 'paragfont'}`}>
          {t('banner_text')}
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
