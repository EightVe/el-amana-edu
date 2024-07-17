import React, { useContext, useEffect, useState } from 'react';
import { Menu, User, Languages, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '@/contexts/AuthContext';
import NewNavAvatar from '../avatar/NewNavAvatar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const HomeNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, loading } = useContext(AuthContext);
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
        className='headlogo flex justify-between w-full fixed top-0 z-[500] text-white items-start py-4 px-6'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h1 className=' text-4xl lg:text-9xl fontone uppercase headlogo'>elamana</h1>
        <Button variant="transparent" className="flex items-center gap-1 lg:hidden" onClick={toggleMenu}>
          <Menu className='h-4 w-4'/> Menu
        </Button>
        <div className={`hidden items-center lg:flex navlinks`}>
          <div className='flex items-center'>
            <Button variant="transparent" className="flex items-center gap-1"><Link to="/">Home</Link></Button>
            <Button variant="transparent" className="flex items-center gap-1"><Link to="/">About</Link></Button>
            <Button variant="transparent" className="flex items-center gap-1"><Link to="/">Universities</Link></Button>
            <div>|</div>
          </div>
          {user ?
            <div className='h-10 pl-4 py-2'>
              <NewNavAvatar/>
            </div>
            :
            <Button variant="transparent" className="flex items-center gap-1"><User className='h-4 w-4'/>Sign In</Button>
          }
          <Button variant="transparent" className="flex items-center gap-1"><Languages className='h-5 w-5'/></Button>
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
              <div className='flex justify-end items-start w-full'>
                <Button variant="transparent" className="flex items-center gap-1" onClick={toggleMenu}>
                  <X className='h-4 w-4'/> Close
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
                className='md:text-7xl text-3xl'
              >
                <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <span className='paragfont italic md:text-6xl text-xl'>1.</span> <Link to="/" className='paragfont capitalize'>Home</Link>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <span className='paragfont italic md:text-6xl text-xl'>2.</span> <Link to="/" className='paragfont capitalize'>About</Link>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <span className='paragfont italic md:text-6xl text-xl'>3.</span> <Link to="/" className='paragfont capitalize'>Universities</Link>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <span className='paragfont italic md:text-6xl text-xl'>4.</span> <Link to="/" className='paragfont capitalize'>Sign In</Link>
                </motion.li>
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className='flex justify-between items-start w-full flex-col-reverse md:flex-row'
              >
                <ul className='flex gap-2 items-center text-lg md:text-xl'>
                  <li><Link to="/" className='paragfont uppercase'>Whatsapp</Link></li>
                  <div className='h-1 w-1 bg-white rounded-full'></div>
                  <li><Link to="/" className='paragfont uppercase'>Instagram</Link></li>
                </ul>
                <Link to="/">
                  <div className='flex items-center gap-2 text-2xl md:text-5xl uppercase paragfont'>
                    Play Reel <ArrowRight className='md:h-10 md:w-10 h-5 w-5'/>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomeNavigation;
