
import styles from './page.module.scss'
import ZoomParallax from './index';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { useTranslation } from 'react-i18next';

export default function ZoomParallaxContent() {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])

    return (
        <main className=" bg-[#aaaa9b]">
            <div className={`h-[100vh] flex items-center justify-center ${isArabic ? 'arabic-font' : 'paragfont'}`}>
                <h1 className=' text-6xl lg:text-8xl font-bold break-normal text-center'>{t('nisunititlep')}</h1>
            </div>
            <ZoomParallax />
        </main>
    )
}
