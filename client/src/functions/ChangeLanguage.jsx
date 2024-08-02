import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n/i18n';
import arlogo from './Flag_of_Morocco.svg'
import enlogo from './Flag_of_the_United_States.svg'
const ChangeLanguage = () => {
    const [t, i18n] = useTranslation();

    const changeLanguage = (newLanguage) => {
        i18n.changeLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    };

    useEffect(() => {
        document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');
    }, [i18n.language]);

    return (
        <>
            {i18n.language === 'en' && (
                <button onClick={() => changeLanguage('ar')} className='flex justify-center items-center gap-1 text-whitecol text-sm arabic_font'>
                    العربية <img src={arlogo} className='h-6 w-6'/>
                </button>
            )}
            {i18n.language === 'ar' && (
                <button onClick={() => changeLanguage('en')} className='flex justify-center items-center gap-1 text-whitecol text-sm'>
                    English <img src={enlogo}  className='h-6 w-6'/>
                </button>
            )}
        </>
    );
};

export default ChangeLanguage;
