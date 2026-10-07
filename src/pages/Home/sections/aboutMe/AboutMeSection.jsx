
import { useRef, useState, useEffect } from 'react';
import 'swiper/css/pagination';

import './AboutMeSection.scss'
import flowerImg from '../../../../assets/images/flower_3.webp'
import doodleSmiley from '../../../../assets/images/doodles/doodle_smiley.svg'

import personalPhoto from '../../../../assets/images/about.webp'
import { useTranslation } from 'react-i18next';
import "../../../../i18n";
import { m, useTransform, useScroll } from "motion/react"

function AboutMe() {
    const containerRef = useRef(null);
    const { t } = useTranslation();

    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth <= 768 : false
    );

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], isMobile ? [1, 1] : [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], isMobile ? [1, 1] : [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 320] : [0, 600]);
    const rotate = useTransform(scrollYProgress, [0, 1], isMobile ? [0, -35] : [0, -60]);

    return (
        <section id="about_me" className="about_me_section">
            <div className="blur_abm"></div>
            <div className="about_me_bottom_glow" aria-hidden="true" />
            <m.div ref={containerRef} className="about_me_container" style={{ scale, opacity }}>
                <div className="about_me_text">                 
                    <span>  
                        <m.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <span className="saudation_text">{t('introduction.title').trim()} </span>
                            <span className="saudation_name_lockup">
                                <span className="saudation_personal_name">danielle</span>
                                <span className="about_doodle_smiley_wrapper" aria-hidden="true">
                                    <img
                                        src={doodleSmiley}
                                        alt=""
                                        className="about_doodle_smiley_svg"
                                        width="24"
                                        height="24"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </span>
                            </span>
                        </m.h2>
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
                        <img loading="lazy" decoding="async" width="700" height="678" alt="Personal Photo" className="card-image" src={personalPhoto}/>
                        <div className="category">{t('about.photoCategory')}</div>
                        <div className="heading">{t('about.photoHeading')}
                            <div className="author"><span className="name">{t('about.photoAuthor')}</span>, 2024</div>
                        </div>
                    </div>  
                    <m.div
                        className="abm_flower"
                        style={{
                            y,
                            rotate,
                            opacity,
                        }}
                    >
                        <img loading="lazy" decoding="async" width="100" height="98" alt="Flower Image" src={flowerImg}/>
                    </m.div>
                </div>
            </m.div>

        </section>
    )
}

export default AboutMe;