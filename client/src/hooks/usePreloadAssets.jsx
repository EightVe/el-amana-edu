import { useState, useEffect, useRef } from 'react';

const usePreloadAssets = (assets) => {
  const [loaded, setLoaded] = useState(false);
  const loadCountRef = useRef(0);
  const totalAssetsRef = useRef(assets.length);

  useEffect(() => {
    const totalAssets = totalAssetsRef.current;

    const checkLoaded = () => {
      loadCountRef.current += 1;
      console.log(`Loaded ${loadCountRef.current} of ${totalAssets} assets`);
      if (loadCountRef.current === totalAssets) {
        setLoaded(true);
      }
    };

    const loadAsset = (asset) => {
      if (asset.endsWith('.jpg') || asset.endsWith('.jpeg') || asset.endsWith('.png')) {
        const img = new Image();
        img.src = asset;
        img.onload = checkLoaded;
        img.onerror = checkLoaded;
      } else if (asset.endsWith('.mp4') || asset.endsWith('.webm')) {
        const video = document.createElement('video');
        video.src = asset;
        video.onloadeddata = checkLoaded;
        video.onerror = checkLoaded;
      }
    };

    if (loadCountRef.current === 0) {
      assets.forEach(asset => {
        loadAsset(asset);
      });
    }
  }, [assets]);

  return loaded;
};

export default usePreloadAssets;
