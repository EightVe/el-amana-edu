import React, { useState, useEffect, useRef } from 'react';
import usePreloadAssets from '@/hooks/usePreloadAssets';
import HomeNavigation from '@/components/general/HomeNavigation';
import PagesFooter from '@/components/general/PagesFooter/PagesFooter';
import HomePageLoading from '@/components/general/LoadingPage/HomePageLoading';
import UnisBanner from './components/UnisBanner';
import UnisDisplay from './components/UnisDisplay';
const Universities = () => {
  const assetsToPreload = [
    './imgs/okan-logo.jpg',
    './imgs/ni-uni-logo.png',
    "./imgs/gelisim-universitesi-logo89.png",
    "./imgs/biruniunilogo.jpg",
    "./imgs/istinye-logo.png",
    "./imgs/Isik_Universitesi-logo.png",
    "./imgs/istmedipollogo.png",
    "./imgs/altinbaslogo.webp",
    "./imgs/fenerbahceunilogo.png",
    "./imgs/bau-uni-logo.png",
    "./imgs/beykentlogo.png",
    "./imgs/kentlogo.png",
    "./imgs/atlas.png",
    "./imgs/beykoz.png",
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
     <UnisBanner />
     <UnisDisplay />
      <PagesFooter />
    </div>
    </>
  );
};

export default Universities;
