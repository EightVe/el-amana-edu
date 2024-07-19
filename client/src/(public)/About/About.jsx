import React, { useState, useEffect, useRef } from 'react';
import usePreloadAssets from '@/hooks/usePreloadAssets';
import HomeNavigation from '@/components/general/HomeNavigation';
import PagesFooter from '@/components/general/PagesFooter/PagesFooter';
import HomePageLoading from '@/components/general/LoadingPage/HomePageLoading';
import AboutBanner from './components/AboutBanner';
import OurTeam from './components/OurTeam';
import './About.css'
const About = () => {
  const assetsToPreload = [
    './imgs/noufpic.jpg',
    './imgs/yazidpic.jpg',
  ];

  const [animationComplete, setAnimationComplete] = useState(false);
  const [loadedAssetsCount, setLoadedAssetsCount] = useState(0);

  const handleComplete = () => {
    setAnimationComplete(true);
  };

  const handleProgress = (loadedCount) => {
    setLoadedAssetsCount(loadedCount);
  };

  const assetsLoaded = usePreloadAssets(assetsToPreload, handleProgress);

  useEffect(() => {
    if (assetsLoaded) {
      setLoadedAssetsCount(assetsToPreload.length);
    }
  }, [assetsLoaded, assetsToPreload.length]);

  if (!animationComplete || !assetsLoaded) {
    return (
      <HomePageLoading
        onComplete={handleComplete}
        loadedAssets={loadedAssetsCount}
        totalAssets={assetsToPreload.length}
      />
    );
  }
  return (
    <>
    <div className="bg-[#aaaa9b]"
   >
      <HomeNavigation />
     <AboutBanner />
     <OurTeam />
      <PagesFooter />
    </div>
    </>
  );
};

export default About;
