import { useRef, useState } from "react";
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { Play, Pause, X } from "lucide-react";
import './PlayReel.css';

const PlayReel = () => {
  const targetRef = useRef(null);
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [sliderValue, setSliderValue] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scaleHeight = useTransform(scrollYProgress, [0, 1], [200, window.innerHeight]);
  const scaleWidth = useTransform(scrollYProgress, [0, 1], [400, window.innerWidth]);
  const playX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);
  const reelX = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const buttonOpacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);

  const handlePlayClick = () => {
    setShowVideo(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleCloseClick = () => {
    setShowVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setSliderValue(videoRef.current.currentTime);
    }
  };

  const handleSliderChange = (event) => {
    const newTime = event.target.value;
    setSliderValue(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  return (
    <div className="bg-[#aaaa9b]">
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden gap-5 flex-col lg:flex-row">
          <motion.h1
            style={{ x: playX, opacity: textOpacity }}
            className="text-white paragfont uppercase text-5xl lg:text-9xl"
          >
            play
          </motion.h1>
          <motion.div
            style={{ height: scaleHeight, width: scaleWidth }}
            className="relative"
          >
            <video
              ref={videoRef}
              src="https://firebasestorage.googleapis.com/v0/b/elamana-6d79e.appspot.com/o/playreel.mp4?alt=media&token=36879b7d-a837-4089-8bdf-5e7f5dd85ad5"
              className="w-full h-full object-cover rounded-lg"
              muted
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
            ></video>
            <motion.button
              style={{ opacity: buttonOpacity }}
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-5xl lg:text-9xl rounded-lg"
            >
              <Play size={48} />
            </motion.button>
          </motion.div>
          <motion.h1
            style={{ x: reelX, opacity: textOpacity }}
            className="text-white  paragfont uppercase text-5xl lg:text-9xl"
          >
            reel
          </motion.h1>
        </div>
      </section>
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#aaaa9b] "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative h-screen w-full flex flex-col items-center"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <video
                ref={videoRef}
                src="https://firebasestorage.googleapis.com/v0/b/elamana-6d79e.appspot.com/o/playreel.mp4?alt=media&token=36879b7d-a837-4089-8bdf-5e7f5dd85ad5"
                className="max-h-full max-w-full"
                style={{ objectFit: 'contain' }}
                autoPlay
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
              ></video>
              <motion.div
                className="absolute bottom-10 flex items-center gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <button
                  onClick={togglePlayPause}
                  className="text-white bg-black bg-opacity-50 p-2 rounded-full"
                >
                  {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max={videoDuration}
                  value={sliderValue}
                  onChange={handleSliderChange}
                  className="w-[300px] lg:w-[850px] appearance-none bg-transparent slider"
                />
              </motion.div>
              <motion.button
                onClick={handleCloseClick}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full z-[9999999]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <X size={32} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlayReel;
