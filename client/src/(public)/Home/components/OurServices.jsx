import { useRef } from "react";
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const OurServices = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const splitDistanceLeft = useTransform(scrollYProgress, [0.1, 0.4], [0, isArabic ? 150 : -150]);
  const splitDistanceRight = useTransform(scrollYProgress, [0.1, 0.4], [0, isArabic ? -150 : 150]);
  const circleScale = useTransform(scrollYProgress, [0.4, 1], [0, 1]);
  const borderRadius = useTransform(scrollYProgress, [0.4, 0.7, 1], ['999px', '999px', '0px']);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const section1InView = useInView(section1Ref, { once: true });
  const section2InView = useInView(section2Ref, { once: true });
  const section3InView = useInView(section3Ref, { once: true });

  return (
    <div>
      <section ref={targetRef} className="relative h-[300vh]">
        <div 
        className={`sticky top-0 flex h-screen items-center justify-center overflow-hidden gap-1 paragfont ${isArabic ? 'arabic-font' : 'paragfont'}`}>
          <motion.h1
            style={{ x: splitDistanceLeft }}
            className="text-white uppercase text-5xl lg:text-9xl"
          >
           {t('ServText')}
          </motion.h1>
          <motion.div
            style={{
              scale: circleScale,
              height: '100vh',
              width: '100vw',
              borderRadius: borderRadius,
            }}
            className="absolute bg-white"
          />
          <motion.h1
            style={{ x: splitDistanceRight }}
            className="text-white uppercase text-5xl lg:text-9xl"
          >
            {t('IcesText')}
          </motion.h1>
        </div>
      </section>
      <section
       className={`bg-white h-auto py-12 pt-[50vh] px-6 paragfont ${isArabic ? 'arabic-font' : 'paragfont'}`}>
        <div ref={section1Ref} className="md:text-7xl text-3xl flex justify-center items-center flex-col gap-3 h-screen">
          <motion.div
            className="flex items-center gap-1 justify-center flex-col"
            initial={{ opacity: 0 }}
            animate={section1InView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >

            <motion.span
              className=' uppercase md:text-6xl text-xl'
              initial={{ opacity: 0 }}
              animate={section1InView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              1
            </motion.span>
            <motion.div
              className="h-2 w-2 bg-black rounded-full"
              initial={{ opacity: 0 }}
              animate={section1InView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            <motion.p
              className=' capitalize'
              initial={{ opacity: 0 }}
              animate={section1InView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {t('servicesMajorTitle')}
            </motion.p>
            <motion.div
              className="h-1 w-1/2 bg-black rounded-full"
              initial={{ opacity: 0 }}
              animate={section1InView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>
          <motion.p
            className=" text-xl lg:text-3xl lg:w-1/2 w-full text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={section1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {t('servicesMajorParagraph')}
          </motion.p>
        </div>
        <div ref={section2Ref} className="md:text-7xl text-3xl flex justify-center items-center flex-col gap-3 h-screen">
          <motion.div
            className="flex items-center gap-1 justify-center flex-col"
            initial={{ opacity: 0 }}
            animate={section2InView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >

            <motion.span
              className=' uppercase md:text-6xl text-xl'
              initial={{ opacity: 0 }}
              animate={section2InView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              2
            </motion.span>
            <motion.div
              className="h-2 w-2 bg-black rounded-full"
              initial={{ opacity: 0 }}
              animate={section2InView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            <motion.p
              className=' capitalize'
              initial={{ opacity: 0 }}
              animate={section2InView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {t('servicesUniversityTitle')}
            </motion.p>
            <motion.div
              className="h-1 w-1/2 bg-black rounded-full"
              initial={{ opacity: 0 }}
              animate={section2InView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            
          </motion.div>
          <motion.p
            className=" text-xl lg:text-3xl lg:w-1/2 w-full text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
           {t('servicesUniversityParagraph')}
          </motion.p>
        </div>
        <div ref={section3Ref} className="md:text-7xl text-3xl flex justify-center items-center flex-col gap-3 h-screen">
          <motion.div
            className="flex items-center gap-1 justify-center flex-col"
            initial={{ opacity: 0 }}
            animate={section3InView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >

            <motion.span
              className=' uppercase md:text-6xl text-xl'
              initial={{ opacity: 0 }}
              animate={section3InView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              3
            </motion.span>
            <motion.div
              className="h-2 w-2 bg-black rounded-full"
              initial={{ opacity: 0 }}
              animate={section3InView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            <motion.p
              className=' capitalize'
              initial={{ opacity: 0 }}
              animate={section3InView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {t('servicesApplyingTitle')}
            </motion.p>
            <motion.div
              className="h-1 w-1/2 bg-black rounded-full"
              initial={{ opacity: 0 }}
              animate={section3InView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>
          <motion.p
            className=" text-xl lg:text-3xl lg:w-1/2 w-full text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={section3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {t('servicesApplyingParagraph')}
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default OurServices;

