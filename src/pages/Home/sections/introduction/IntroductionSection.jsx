import './IntroductionSection.scss';
import SocialMedias from '../../../../components/socialMedias/SocialMedias';
import { useTranslation } from 'react-i18next';
import "../../../../i18n";
import { m, useTransform, useScroll} from "motion/react"
import {useRef, useState, useEffect} from 'react';
import flowerImg from '../../../../assets/images/flower_1.webp'
import flowerImgReduced from '../../../../assets/images/flower_1_reduced.webp'

function IntroductionSection() {
    const containerRef = useRef(null);
    const {t} = useTranslation();

    const { scrollYProgress } = useScroll({
            target: containerRef,
            offset: ["start start", "end start"]
    });


    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
    const filter = useTransform(
        scrollYProgress,
        [0.2, 1],
        ["blur(0px)", "blur(6px)"]
    )

    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const flowers = [
    { top: '5%', right: '10%', delay: 0.1, xMove: 40 },
    { top: '15%', right: '15%', delay: 0.4, xMove: -30 },
    { top: '40%', right: '20%', delay: 0.5, xMove: 50 },
    { top: '20%', right: '30%', delay: 0.2, xMove: 10 },
    { top: '30%', right: '23%', delay: 0.3, xMove: 20 },
    { top: '45%', right: '2%', delay: 0.6, xMove: 15 },
    ];


    return (
    <m.div id="introduction" ref={containerRef} className="introduction_container" style={{filter}}>
        <div className="left_content">
            <m.h2
                className="apresentation_title"
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="my_name">Danielle<br/>Soares</span>
            </m.h2>
            <m.p
                className="myself_description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            >
            {t('introduction.role')} <span>&</span><br/>
            {t('introduction.education')}
            </m.p>
            <SocialMedias showRectangle={true}/>
        </div>
        <m.div
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "ease" }}
        className="right_content"
        >
            <div className="right_image">
                <div className="shape1 shape_background_image">
                    <div className="shape2 shape_background_image">
                        <div className= "shape3 shape_background_image">
                        </div>
                    </div>
                </div>
            </div>
        </m.div>
        <div className="decoration">
            <div className="blur2"></div>
            <m.div 
            initial={{ opacity: 0}} 
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
                <img loading="lazy" alt="Flower Image" className="flowerImg flower" src={flowerImg}/>
            </m.div>
            <m.div 
            initial={{ opacity: 0}} 
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}>
                <img loading="lazy" alt="Flower Image" className="flowerImg2 flower" src={flowerImgReduced}/>
            </m.div>
            <m.div 
            initial={{ opacity: 0}} 
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}>
                <img loading="lazy" alt="Flower Image" className="flowerImg3 flower" src={flowerImgReduced}/>
                <img loading="lazy" alt="Flower Image" className="flowerImg7 flower" src={flowerImgReduced}/>
            </m.div>
            <m.div 
            initial={{ opacity: 0}} 
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}>
                <img loading="lazy" alt="Flower Image" className="flowerImg4 flower" src={flowerImgReduced}/>
            </m.div>
            <m.div 
            initial={{ opacity: 0}} 
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}>
                <img loading="lazy" alt="Flower Image" className="flowerImg5 flower" src={flowerImgReduced}/>
                <img loading="lazy" alt="Flower Image"className="flowerImg6 flower" src={flowerImgReduced}/>
            </m.div>
            <m.div
            className="scroll-container"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.8, ease: "ease" }}
            exit={{ opacity: 0 }}
            style ={{opacity}}
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span className="scroll-text">{t('introduction.scroll')}</span>
            </m.div>
        
            {!isMobile && flowers.map((f, i) => (
          <m.div
              key={i}
              initial={{ y: -100, opacity: 0, rotate: 0 }}
              animate={{ 
              y: [0, 500, 1000],
              x: [0, 50, -50, 0],
              rotate: [0, 45, -45, 180],
              opacity: [0, 0.9, 0.9, 0] 
              }}
              transition={{
              duration: 14,
              repeat: Infinity,
              delay: f.delay,
              ease: "linear"
              }}
              style={{
              position: 'absolute',
              top: f.top,
              left: f.left,
              right: f.right,
              filter: "blur(1px)",
              pointerEvents: 'none'
              }}
          >
              <img loading="lazy" alt="Flower Image" className="flowerImg_experience_section flower" src={flowerImg} style={{ width: '60px' }} />
          </m.div>
          ))}
        </div>
    </m.div>
    )
}

export default IntroductionSection;