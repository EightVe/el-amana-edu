import React, { useState, useEffect, useRef } from 'react';
import HomeNavigation from '@/components/general/HomeNavigation';
import PagesFooter from '@/components/general/PagesFooter/PagesFooter';
import HomePageLoading from '@/components/general/LoadingPage/HomePageLoading';
import usePreloadAssets from '@/hooks/usePreloadAssets';
import ZoomParallaxContent from './components/ZoomParallax/ZoomParallaxContent';
import UniContent from './components/Content/UniContent';
const AtlasUniMain = () => {
  const assetsToPreload = [
    '../components/imgs/at2.jpg',
    '../components/imgs/at3.jpg',
    "../components/imgs/at4.jpg",
    "../components/imgs/at3.webp",
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
    <div className="">
      <HomeNavigation />
<ZoomParallaxContent />
<UniContent />
      <PagesFooter />
    </div>
  );
};

export default AtlasUniMain;
