
import {useRef} from 'react';
import 'swiper/css/pagination';

import './AboutMeSection.scss'
import flowerImg from '../../../../assets/images/flower_3.png'

import personalPhoto from '../../../../assets/images/about.jpg'
import { useTranslation } from 'react-i18next';
import "../../../../i18n";
import { motion, useTransform, useScroll} from "motion/react"

function AboutMe() {
    const containerRef = useRef(null);
    const {t} = useTranslation();

    const { scrollYProgress } = useScroll({
            target: containerRef,
            offset: ["start end", "end start"]
    });
    
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 600]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -60]);
    
    return (
        <section id="about_me" className="about_me_section">
            <div className="blur_abm"></div>
            <motion.div ref={containerRef} className="about_me_container"style={{scale, opacity}}>
                <div className="about_me_text">                 
                    <span>  
                        <motion.h2
                            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            {t('about.homeTitle')}
                        </motion.h2>
                        <p>
                        {t('about.paragraph_1')}
                        </p>
                        <p>
                        {t('about.paragraph_2')}
                        </p>
                        <a className="about_contact_cta" href="#contact_me">
                            {t('about.contactCta')} <span>→</span>
                        </a>
                    </span>
                </div>
                <div className="photo_container">
                    <div className="blur_abm"></div>
                    <div className="card">
                        <img className="card-image" src={personalPhoto}/>
                        <div className="category">{t('about.photoCategory')}</div>
                        <div className="heading">{t('about.photoHeading')}
                            <div className="author"><span className="name">{t('about.photoAuthor')}</span>, 2024</div>
                        </div>
                    </div>  
                    <motion.div
                        className="abm_flower"
                        initial={{ filter: "blur(10px)", opacity: 0, y: 290, x:-80}}
                        whileInView={{ filter: "blur(0px)", opacity: 1, y: 300, x:-40 }}
                        viewport={{ once: true, amount: 1}}
                        style={{
                        y,
                        rotate,
                        opacity,
                        }}
                    >
                        <img src={flowerImg}/>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    )
}

export default AboutMe;