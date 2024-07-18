import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss'
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
    "https://turkeycampus.com/storage/uploads/oT7J8Q6zB0B9rwXtc841xGYcCbwjl4LNfFlIvv59.jpg",
    "https://www.nisantasi.edu.tr/Images/Yazilar/nisantasi-university-received-green-flag-for-access-to-education-1154039582.jpg",
    "https://www.globalacademia.com/wp-content/uploads/istinye-university-campus.jpg",
    "https://oktamam.com/wp-content/uploads/2023/05/biruni-15.jpg",
    "https://brive.com/media/images/brive-istanbul-gelisim-university-top-banner.jpg",
    "https://cdn.bau.edu.tr/content/5oilwyul5nc8k-bau%20be%C5%9Fikta%C5%9F%20kamp%C3%BCs%C3%BC.jpg",
    "https://mio.medipol.edu.tr/sites/mio.medipol.edu.tr/files/styles/large/public/2022-11/01_Kapak-019857a4-81f7-4cab-815c-8429d99f3861-b6a03d32-a423-4e0a-8801-dcba354fef52-2048x1365.jpg?itok=jCSpgp0O",
    "https://international.altinbas.edu.tr/uploads/editor/AANEW%20PHOTOS/DSC00338.jpg?1711624984064",
    "https://www.okanhealthcare.com/upload/kategori/istanbul-okan-university_20230112134019.jpg",
    "https://kent.edu.tr/content/images/kampus/1.jpg",
    "https://www.beykoz.edu.tr/content/editor/5ee0a9e7bcdf4_kavacik-yerleskesi.jpg",
    "https://media-cdn.t24.com.tr/media/library/2022/03/1648569194085-nistas.jpg",
  ];
  

export default function Gallery() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className={styles.main}>

      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>

    </main>
  )
}

const Column = ({images, y}) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src, i) => {
          return <div key={i} className={styles.imageContainer}>
            <img 
              src={src}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}