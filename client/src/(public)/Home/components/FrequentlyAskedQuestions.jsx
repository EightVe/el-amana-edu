import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full flex items-center justify-center bg-white flex-col lg:h-[150vh] h-screen">
      <h1
      className={`text-center paragfont uppercase text-2xl lg:text-6xl pb-8 px-6 ${isArabic ? 'arabic-font' : 'paragfont'}`}>
        {t('faqtitle')} <span className="text-[#aaaa9b]">{t('faqtitle1')}</span>
      </h1>
      <div className="faq-container bg-white p-6 xl:w-1/3 w-full">
        <div
  
          className={`faq-item mb-4 border-b pb-2 ${isArabic ? 'arabic-font' : 'paragfont'}`}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="faq-question flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(0)}
          >
            <h3 className="text-xl pr-3">{t('faq1sttitle')}</h3>
            <motion.div
              initial={false}
              animate={{ rotate: activeIndex === 0 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-1.5 rounded-full transition-colors duration-300 ${
                activeIndex === 0 || hoveredIndex === 0
                  ? "bg-[#aaaa9b]"
                  : "bg-transparent"
              }`}
            >
              <FaChevronDown
                className={`transition-colors duration-300 ${
                  activeIndex === 0 || hoveredIndex === 0
                    ? "text-white"
                    : "text-black"
                }`}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === 0 ? "auto" : 0,
              opacity: activeIndex === 0 ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-lg">
            {t('faq1stanswer')}
            </p>
          </motion.div>
        </div>
        <div
           className={`faq-item mb-4 border-b pb-2 ${isArabic ? 'arabic-font' : 'paragfont'}`}
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="faq-question flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(1)}
          >
            <h3 className="text-xl pr-3">{t('faq2ndtitle')}</h3>
            <motion.div
              initial={false}
              animate={{ rotate: activeIndex === 1 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-1.5 rounded-full transition-colors duration-300 ${
                activeIndex === 1 || hoveredIndex === 1
                  ? "bg-[#aaaa9b]"
                  : "bg-transparent"
              }`}
            >
              <FaChevronDown
                className={`transition-colors duration-300 ${
                  activeIndex === 1 || hoveredIndex === 1
                    ? "text-white"
                    : "text-black"
                }`}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === 1 ? "auto" : 0,
              opacity: activeIndex === 1 ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-lg">
            {t('faq2ndanswer')}
            </p>
          </motion.div>
        </div>
        <div
 className={`faq-item mb-4 border-b pb-2 ${isArabic ? 'arabic-font' : 'paragfont'}`}
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="faq-question flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(2)}
          >
            <h3 className="text-xl pr-3"> {t('faq3rdtitle')}</h3>
            <motion.div
              initial={false}
              animate={{ rotate: activeIndex === 2 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-1.5 rounded-full transition-colors duration-300 ${
                activeIndex === 2 || hoveredIndex === 2
                  ? "bg-[#aaaa9b]"
                  : "bg-transparent"
              }`}
            >
              <FaChevronDown
                className={`transition-colors duration-300 ${
                  activeIndex === 2 || hoveredIndex === 2
                    ? "text-white"
                    : "text-black"
                }`}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === 2 ? "auto" : 0,
              opacity: activeIndex === 2 ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-lg">
            {t('faq3rdanswer')}
            </p>
          </motion.div>
        </div>
        <div
 className={`faq-item mb-4 border-b pb-2 ${isArabic ? 'arabic-font' : 'paragfont'}`}
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="faq-question flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(3)}
          >
            <h3 className="text-xl pr-3"> {t('faq4thtitle')}</h3>
            <motion.div
              initial={false}
              animate={{ rotate: activeIndex === 3 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-1.5 rounded-full transition-colors duration-300 ${
                activeIndex === 3 || hoveredIndex === 3
                  ? "bg-[#aaaa9b]"
                  : "bg-transparent"
              }`}
            >
              <FaChevronDown
                className={`transition-colors duration-300 ${
                  activeIndex === 3 || hoveredIndex === 3
                    ? "text-white"
                    : "text-black"
                }`}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === 3 ? "auto" : 0,
              opacity: activeIndex === 3 ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-lg">
            {t('faq4thanswer')}
            </p>
          </motion.div>
        </div>
        <div
 className={`faq-item mb-4 border-b pb-2 ${isArabic ? 'arabic-font' : 'paragfont'}`}
          onMouseEnter={() => setHoveredIndex(4)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="faq-question flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(4)}
          >
            <h3 className="text-xl pr-3">{t('faq5thtitle')}</h3>
            <motion.div
              initial={false}
              animate={{ rotate: activeIndex === 4 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-1.5 rounded-full transition-colors duration-300 ${
                activeIndex === 4 || hoveredIndex === 4
                  ? "bg-[#aaaa9b]"
                  : "bg-transparent"
              }`}
            >
              <FaChevronDown
                className={`transition-colors duration-300 ${
                  activeIndex === 4 || hoveredIndex === 4
                    ? "text-white"
                    : "text-black"
                }`}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === 4 ? "auto" : 0,
              opacity: activeIndex === 4 ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-lg">
            {t('faq5thanswer')}
            </p>
          </motion.div>
        </div>
        <div
 className={`faq-item mb-4 border-b pb-2 ${isArabic ? 'arabic-font' : 'paragfont'}`}
          onMouseEnter={() => setHoveredIndex(5)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="faq-question flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(5)}
          >
            <h3 className="text-xl pr-3"> {t('faq6thtitle')}</h3>
            <motion.div
              initial={false}
              animate={{ rotate: activeIndex === 5 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-1.5 rounded-full transition-colors duration-300 ${
                activeIndex === 5 || hoveredIndex === 5
                  ? "bg-[#aaaa9b]"
                  : "bg-transparent"
              }`}
            >
              <FaChevronDown
                className={`transition-colors duration-300 ${
                  activeIndex === 5 || hoveredIndex === 5
                    ? "text-white"
                    : "text-black"
                }`}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === 5 ? "auto" : 0,
              opacity: activeIndex === 5 ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-lg">
            {t('faq6thanswer')}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
