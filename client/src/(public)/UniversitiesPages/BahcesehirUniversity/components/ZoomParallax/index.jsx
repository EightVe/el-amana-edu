import styles from './styles.module.scss';
import Picture1 from '../../../components/imgs/bau-uni-bg.jpg';
import Picture3 from '../../../components/imgs/bauuni-cover.jpg';
import Picture6 from '../../../components/imgs/bau-uni-logo.png';
import Picture4 from '../../../components/imgs/bauuni-cover.jpg';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },

        {
            src: Picture3,
            scale: scale6
        },


    ]

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map( ({src, scale}, index) => {
                        return <motion.div key={index} style={{scale}} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={src}
                                    fill
                                    alt="image"
                                    placeholder='blur'
                                    className='h-[360px] w-[360px] lg:h-[35vh] lg:w-[25vw]'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}
