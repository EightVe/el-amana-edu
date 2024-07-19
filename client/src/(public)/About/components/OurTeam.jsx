import React from 'react'
import noufpic from "../imgs/noufpic.jpg"
import yazidpic from "../imgs/yazidpic.jpg"
import { useTranslation } from 'react-i18next'
const OurTeam = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
  return (
    <div
    className={`h-auto py-10 flex xl:flex-row flex-col justify-between items-center xl:items-start px-6 md:px-12 lg:px-36 ${isArabic ? 'arabic-font' : 'paragfont'}`}>
        <h1 className='text-6xl lg:text-6xl uppercase pb-10'>{t('ourteamtitle')}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
            <img src={yazidpic} className='h-[300px] w-[300px] lg:h-[800px] lg:w-[400px] object-cover'/>
            <p className='text-lg pt-2'>El Yazid Dehdi</p>
            <p>{t('ourtm1')}</p>
        </div>
        <div>
            <img src={noufpic} className='h-[300px] w-[300px] lg:h-[800px] lg:w-[400px]  object-cover'/>
            <p className='text-lg pt-2'>Naoufal Rachib</p>
            <p>{t('ourtm1')}</p>
        </div>
        </div>
    </div>
  )
}

export default OurTeam