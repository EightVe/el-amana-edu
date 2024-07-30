import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import bg1 from './components/imgs/niiissss.jpg';
import bg2 from './components/imgs/nisbg.jpg';
import bg3 from './components/imgs/campus4.jpg';
import bg4 from './components/imgs/nis4.webp';
import PagesFooter from '@/components/general/PagesFooter/PagesFooter';
import HomeNavigation from '@/components/general/HomeNavigation';

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const NisantasiUni = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });

  return (
    <>
      <HomeNavigation />
      <div className={`bg-white pt-[20vh] ${isArabic ? 'arabic-font' : 'paragfont'}`}>
        <div className="pt-6">
          <motion.div
            className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
            ref={ref1}
          >
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={bg1}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={bg2}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={bg3}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={bg4}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
            ref={ref2}
          >
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">{t('nisunititlep')}</h1>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-900">{t('nisuniarticlepara1')}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">{t('nisuniarticleadvantagestitle')}</h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-lg">
                    <li className="text-gray-400">
                      <span className="text-gray-600">{t('nisuniarticleadv1')}</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">{t('nisuniarticleadv2')}</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">{t('nisuniarticleadv3')}</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">{t('nisuniarticleadv4')}</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">{t('nisuniarticleadv5')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">{t('nisunidocforregist')}</h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-lg">
                    <li className="text-[#aaaa9b]">
                      <span className="text-[#aaaa9b]">{t('nisunidocforregist1')} :</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">{t('nisunidocforregist2')}</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">{t('nisunidocforregist3')}</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">{t('nisunidocforregist4')}</span>
                    </li>
                    <li className="text-[#aaaa9b]">
                      <span className="text-[#aaaa9b]">{t('nisunidocforregist5')} :</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">{t('nisunidocforregist6')}</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">{t('nisunidocforregist7')}</span>
                    </li>
                    <li className="text-[#aaaa9b]">
                      <span className="text-[#aaaa9b]">{t('nisunidocforregist8')} :</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">{t('nisunidocforregist9')}</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">{t('nisunidocforregist10')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='my-8'>
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/amana1912system.appspot.com/o/nisantasi-departments.pdf?alt=media&token=61c699f1-b4ab-46cc-b579-f6be1292b327&_gl=1*1vhczq1*_ga*MzcwNTQ3MTQyLjE2OTY3MzE3OTA.*_ga_CW55HF8NVT*MTY5NzE3MzA2OC4xMy4xLjE2OTcxNzQyOTMuMTkuMC4w"
                  target="_blank"
                  className="my-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {t('departmentsdownload')}
                </a>
              </div>
              <div className='my-8'>
                <a
                  href="/apply"
                  className="my-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {t('heroapplybtn')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <PagesFooter />
    </>
  );
}

export default NisantasiUni;
