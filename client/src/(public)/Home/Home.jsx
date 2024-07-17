import React from 'react';
import Banner from './components/HomeBanner/Banner';
import HomeNavigation from '@/components/general/HomeNavigation';
import PlayReel from './components/PlayReel/PlayReel';


const Home = () => {
  return (
    <>
    <div className='bg-[#aaaa9b]'>
      <HomeNavigation />
      <Banner />
      <PlayReel />
      <div className='h-screen'></div>
      </div>
    </>
  );
};

export default Home;
