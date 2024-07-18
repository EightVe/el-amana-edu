import { useEffect, useRef, useState } from 'react';
import CircleType from 'circletype';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const WhatAreUWaitingFor = () => {
  const textRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    new CircleType(textRef.current).radius(80);
  }, []);

  const h1Ref1 = useRef(null);
  const h1Ref2 = useRef(null);
  const isInView1 = useInView(h1Ref1, { once: true });
  const isInView2 = useInView(h1Ref2, { once: true });
  const isInViewButton = useInView(buttonRef, { once: true });

  return (
    <div className="h-[100vh] bg-[#aaaa9b] flex justify-center items-center p-6 paragfont py-[70vh]">
      <div className="flex flex-col items-center justify-center gap-20">
        <div className="flex justify-center items-center flex-col gap-4 text-center">
          <motion.h1
            className="uppercase text-3xl lg:text-6xl"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.25 }}
            ref={h1Ref1}
          >
            What Are you waiting for?
          </motion.h1>
          <motion.h1
            className="uppercase text-2xl lg:text-4xl"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            ref={h1Ref2}
          >
            *Don't miss the opportunity*
          </motion.h1>
        </div>
        <motion.div
          animate={isInViewButton ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          initial={{ opacity: 0 }}
          ref={buttonRef}
        >
          <Link to="/apply">
            <motion.div
              className="relative w-40 h-40 rounded-full border border-black flex items-center justify-center overflow-hidden"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              whileHover={{ scale: 1.2 }}
            >
              <motion.div
                className="absolute w-full h-full flex items-center justify-center"
                animate={{ rotate: hovered ? 360 : 0 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <div
                  ref={textRef}
                  className={`absolute inset-0 flex items-center justify-center font-bold text-white m-2 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transform: 'rotate(0deg)' }}
                >
                  Apply Now Apply Now Apply Now Apply Now
                </div>
              </motion.div>
              <motion.div
                className="absolute text-4xl"
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                &#x2192; {/* Right arrow symbol */}
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatAreUWaitingFor;
