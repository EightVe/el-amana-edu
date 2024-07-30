import React from 'react'
import { useTranslation } from 'react-i18next';

const UniOkanContent = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
  return (
    <div className={`h-auto text-start py-12 lg:px-32 px-4 text-xl ${isArabic ? 'arabic-font' : 'paragfont'}`}>
        <div className="space-y-6">
                  <p className=" text-gray-900">{t('kentuuniarticlepara1')}</p>
                  
                </div>
        
                <div className="mt-10">
              <h3 className="font-medium text-gray-900">{t('kentuniarticleadvantagestitle')}</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4">

                    <li  className="text-gray-400">
                      <span className="text-gray-600">{t('kentuniarticleadv1')}</span>
                    </li>
                    <li  className="text-gray-400">
                      <span className="text-gray-600">{t('kentuniarticleadv2')}</span>
                    </li>
                    <li  className="text-gray-400">
                      <span className="text-gray-600">{t('kentuniarticleadv3')}</span>
                    </li>
                    <li  className="text-gray-400">
                      <span className="text-gray-600">{t('kentuniarticleadv4')}</span>
                    </li>

                </ul>
              </div>
              
            </div>
        <div className="mt-10">
                <h3 className=" font-medium text-gray-900">{t('nisunidocforregist')}</h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 ">
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
              <div className='flex items-center justify-center flex-col'>
              <div className='my-8'>
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/amana1912system.appspot.com/o/kent.pdf?alt=media&token=64ab4961-cd87-4a72-952c-8c066b3acaf5&_gl=1*1l44fgk*_ga*MzcwNTQ3MTQyLjE2OTY3MzE3OTA.*_ga_CW55HF8NVT*MTY5NzE3NjgwMi4xNC4xLjE2OTcxNzY4MTYuNDYuMC4w"
                  target="_blank"
                  className=" border-t-2 border-b-2 py-2 border-[#aaaa9b] text-[#aaaa9b]"
                >
                  {t('departmentsdownload')}
                </a>
              </div>
              <div className='my-8'>
                <a
                  href="/apply"
                   className=" border-t-2 border-b-2 py-2 border-[#aaaa9b] text-[#aaaa9b]"
                >
                  {t('heroapplybtn')}
                </a>
              </div>
              </div>
    </div>
  )
}

export default UniOkanContent