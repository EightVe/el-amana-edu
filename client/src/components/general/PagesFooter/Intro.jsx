import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Intro() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  return (
    <div className={`h-screen flex xl:text-9xl text-4xl md:text-6xl paragfont items-center justify-center bg-white ${isArabic ? 'arabic-font' : 'paragfont'}`}>
        <h2 className='w-full text-center leading-none uppercase'>{t('FooterIntroOne')} <br/> {t('FooterIntroTwo')}</h2>
    </div>
  )
}