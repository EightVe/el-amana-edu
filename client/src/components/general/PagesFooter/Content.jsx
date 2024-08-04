import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Content() {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
  return (
    <div className='bg-[#aaaa9b] py-8 px-12 h-full w-full flex flex-col lg:justify-between justify-end'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <div className={`flex justify-center flex-col items-start ${isArabic ? 'arabic-font' : 'paragfont'}`}>
            <h1 className='text-6xl lg:text-9xl leading-[0.8] mt-10  uppercase'>{t('NavLogo')}</h1>
            <div>
            <p className=''>© {t('copyright')}</p>
            
            <Link to="http://studio.eightve.com/" className='hover:underline'><p className=''>{t('footerEightve')}</p></Link>
            </div>
        </div>
    )
}

const Nav = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <div
        className={`flex shrink-0 gap-20 ${isArabic ? 'arabic-font' : 'paragfont'}`}>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-black font-bold '>{t('footerPages')}</h3>
                <Link to="/"><p className='capitalize  text-base'>{t('NavHome')}</p></Link>
                <Link to="/about"><p className='capitalize  text-base'>{t('NavAbout')}</p></Link>
                <Link to="/universities"><p className='capitalize  text-base'>{t('NavUnis')}</p></Link>
                <Link to="/login"><p className='capitalize  text-base'>{t('NavSignIn')}</p></Link>

            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-black font-bold'>{t('footerContact')}</h3>
                <a href="https://wa.me/+905528812754">                <p className='capitalize text-base'>Whatsapp</p></a>
                <a href="https://www.instagram.com/el_amanaforeducation?igsh=MTdnOXZuODNoNHdmaw%3D%3D&utm_source=qr">    <p className='capitalize text-base'>instagram</p></a>
            </div>
        </div>
    )
}