import React, { useContext, useEffect, useState } from 'react';
import { Menu, User, X, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '@/contexts/AuthContext';
import NewNavAvatar from '../avatar/NewNavAvatar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChangeLanguage from '@/functions/ChangeLanguage';
import { useTranslation } from 'react-i18next';
gsap.registerPlugin(ScrollTrigger);

const HomeNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const h1 = document.querySelector('.fontone');
    const nav = document.querySelector('nav');

    gsap.to(h1, {
      scrollTrigger: {
        trigger: h1,
        start: 'top top',
        end: '+=500',
        scrub: true,
        onUpdate: (self) => {
          if (self.progress === 1) {
            nav.classList.add('nav-blur');
          } else if (self.progress === 0) {
            nav.classList.remove('nav-blur');
          }
        }
      },
      fontSize: '2rem',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const body = document.querySelector('body');
    body.classList.toggle('overflow-hidden');
  };

  return (
    <>
      <motion.nav
        className={`headlogo flex justify-between w-full fixed top-0 z-[500] text-white items-start py-4 px-6 ${i18n.language === 'ar' ? 'arabic-font' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h1
        className={`text-4xl lg:text-9xl fontone uppercase headlogo ${i18n.language === 'ar' ? 'arabic-font' : ''}`}>{t('NavLogo')}</h1>
        <Button variant="transparent" className="flex items-center gap-1 lg:hidden" onClick={toggleMenu}>
          <Menu className='h-4 w-4'/> {t('NavMenu')}
        </Button>
        <div className={`hidden items-center lg:flex navlinks`}>
          <div className='flex items-center'>
            <Button variant="transparent" className="flex items-center gap-1"><Link to="/">{t('NavHome')}</Link></Button>
            <Button variant="transparent" className="flex items-center gap-1"><Link to="/about">{t('NavAbout')}</Link></Button>
            <Button variant="transparent" className="flex items-center gap-1"><Link to="/universities">{t('NavUnis')}</Link></Button>
            <div>|</div>
          </div>
          {user ?
            <div className='h-10 pl-4 py-2'>
              <NewNavAvatar/>
            </div>
            :
            <Link to="/login"><Button variant="transparent" className="flex items-center gap-1"><User className='h-4 w-4'/>{t('NavSignIn')}</Button></Link> 
          }
          <ChangeLanguage />
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className='h-screen w-full fixed top-0 z-[600] bg-black lg:hidden'
          >
            <div className='flex flex-col text-white h-screen p-8 justify-between items-start'>
            
              <div className='flex justify-between items-center w-full'>
              
              <ChangeLanguage />
            
                <Button variant="transparent" className="flex items-center gap-1" onClick={toggleMenu}>
                  <X className='h-4 w-4'/> {t('NavClose')}
                </Button>
              </div>
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delayChildren: 0.5,
                      staggerChildren: 0.2
                    }
                  }
                }}
          
                className={`md:text-5xl text-3xl paragfont ${i18n.language === 'ar' ? 'arabic-font' : 'paragfont'}`}
              >
                <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <span className=' italic md:text-4xl text-xl'>1.</span> <Link to="/" className=' capitalize'>{t('NavHome')}</Link>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <span className=' italic md:text-4xl text-xl'>2.</span> <Link to="/about" className=' capitalize'>{t('NavAbout')}</Link>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <span className=' italic md:text-4xl text-xl'>3.</span> <Link to="/universities" className=' capitalize'>{t('NavUnis')}</Link>
                </motion.li>
                {user ?
            <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <span className=' italic md:text-4xl text-xl'>4.</span> <Link to="/settings" className=' capitalize'>{t('NavSettings')}</Link>
          </motion.li>
            :
            <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <span className=' italic md:text-4xl text-xl'>4.</span> <Link to="/login" className=' capitalize'>{t('NavSignIn')}</Link>
                </motion.li>
          }
                
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className='flex justify-between items-start w-full flex-col-reverse md:flex-row'
              >
                <ul className='flex gap-2 items-center text-lg md:text-xl flex-wrap'>
                  <li><Link to="/" className='paragfont uppercase'>Whatsapp</Link></li>
                  <div className='h-1 w-1 bg-white rounded-full'></div>
                  <li><Link to="/" className='paragfont uppercase'>Instagram</Link></li>
                  <div className='h-1 w-1 bg-white rounded-full'></div>
                  <li><Link to="/" className='paragfont uppercase'>Facebook</Link></li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomeNavigation;
