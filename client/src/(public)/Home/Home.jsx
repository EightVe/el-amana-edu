import React, { useState, useEffect, useRef } from 'react';
import HomeNavigation from '@/components/general/HomeNavigation';
import Banner from './components/Banner';
import OurServices from './components/OurServices';
import PlayReel from './components/PlayReel';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';
import Gallery from './components/Gallery';
import WhatAreUWaitingFor from './components/WhatAreUWaitingFor';
import PagesFooter from '@/components/general/PagesFooter/PagesFooter';
import HomePageLoading from '@/components/general/LoadingPage/HomePageLoading';
import usePreloadAssets from '@/hooks/usePreloadAssets';
import SEO from '@/lib/SEO';
const Home = () => {
  const assetsToPreload = [
    '@/vids/Banner.mp4',
    './assets/PlayReel.mp4',
    "https://turkeycampus.com/storage/uploads/oT7J8Q6zB0B9rwXtc841xGYcCbwjl4LNfFlIvv59.jpg",
    "https://www.nisantasi.edu.tr/Images/Yazilar/nisantasi-university-received-green-flag-for-access-to-education-1154039582.jpg",
    "https://www.globalacademia.com/wp-content/uploads/istinye-university-campus.jpg",
    "https://oktamam.com/wp-content/uploads/2023/05/biruni-15.jpg",
    "https://brive.com/media/images/brive-istanbul-gelisim-university-top-banner.jpg",
    "https://cdn.bau.edu.tr/content/5oilwyul5nc8k-bau%20be%C5%9Fikta%C5%9F%20kamp%C3%BCs%C3%BC.jpg",
    "https://mio.medipol.edu.tr/sites/mio.medipol.edu.tr/files/styles/large/public/2022-11/01_Kapak-019857a4-81f7-4cab-815c-8429d99f3861-b6a03d32-a423-4e0a-8801-dcba354fef52-2048x1365.jpg",
    "https://international.altinbas.edu.tr/uploads/editor/AANEW%20PHOTOS/DSC00338.jpg",
    "https://www.okanhealthcare.com/upload/kategori/istanbul-okan-university_20230112134019.jpg",
    "https://kent.edu.tr/content/images/kampus/1.jpg",
    "https://www.beykoz.edu.tr/content/editor/5ee0a9e7bcdf4_kavacik-yerleskesi.jpg",
    "https://media-cdn.t24.com.tr/media/library/2022/03/1648569194085-nistas.jpg",
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
    <div className="bg-[#aaaa9b]">
            <SEO
        title="الأمانة - الصفحة الرئيسية"
        description=" اضمن مستقبلك معنا الان و احصل على فرصتك الدراسة في الجامعات التركية"
        name=" name."
        type="article"
      />
      <HomeNavigation />
      <Banner />
      <PlayReel />
      <OurServices />
      <Gallery />
      <WhatAreUWaitingFor />
      <FrequentlyAskedQuestions />
      <PagesFooter />
    </div>
  );
};

export default Home;
