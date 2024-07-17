import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  const [count, setCount] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showText, setShowText] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30); // Adjust the interval for the speed of the count

    if (count === 100) {
      setLoadingComplete(true);
      setTimeout(() => setShowText(true), 500); // delay before showing text
    }

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    if (showText) {
      setTimeout(() => setExit(true), 8000); // delay before exiting
    }
  }, [showText]);

  const textAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial={{ x: 0, opacity: 1 }}
      animate={exit ? { x: '-100%', opacity: 0 } : {}}
      transition={{ duration: 2, ease: 'easeInOut' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#282c34',
        color: '#61dafb',
        fontSize: '4rem',
        fontWeight: 'bold',
        position: 'relative',
      }}
    >
      {!loadingComplete ? (
        <div>{count}</div>
      ) : (
        showText && (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1 }}
              variants={textAnimation}
              style={{ position: 'absolute' }}
            >
              guarantee
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1, delay: 1 }}
              variants={textAnimation}
              style={{ position: 'absolute' }}
            >
              your
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1, delay: 2 }}
              variants={textAnimation}
              style={{ position: 'absolute' }}
            >
              future
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1, delay: 3 }}
              variants={textAnimation}
              style={{ position: 'absolute' }}
            >
              with us
            </motion.div>
          </>
        )
      )}
    </motion.div>
  );
};

export default LoadingAnimation;
