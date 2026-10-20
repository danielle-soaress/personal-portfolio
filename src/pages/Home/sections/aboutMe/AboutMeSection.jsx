
import './AboutMeSection.scss'
import flowerImg from '../../../../assets/images/flower_3.webp'
import doodleSmiley from '../../../../assets/images/doodles/doodle_smiley.svg'

import personalPhoto from '../../../../assets/images/about.webp'
import personalPhotoSmall from '../../../../assets/images/about-360.webp'
import { useTranslation } from 'react-i18next';
import "../../../../i18n";
import { useRef } from 'react';
import { m, useTransform } from "motion/react";
import { useSmoothScroll } from "../../../../hooks/useSmoothScroll";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";

// Larger screens: the flower drops and spins past the photo as the section scrolls by
function FallingFlower({ sectionRef }) {
    const { scrollYProgress } = useSmoothScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 600]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -60]);

    return (
        <m.div className="abm_flower abm_flower--falling" style={{ y, rotate, opacity }} aria-hidden="true">
            <img loading="lazy" decoding="async" width="100" height="98" alt="" src={flowerImg}/>
        </m.div>
    );
}

function AboutMe() {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    // Phones keep the static sticker: scroll-linked motion is too costly there
    const isPhone = useMediaQuery('(max-width: 768px)');

    return (
        <section id="about_me" ref={sectionRef} className="about_me_section">
            <div className="blur_abm"></div>
            <div className="about_me_bottom_glow" aria-hidden="true" />
            <div className="about_me_container">
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
                        <img loading="lazy" decoding="async" width="700" height="678" alt="Personal Photo" className="card-image" src={personalPhoto} srcSet={`${personalPhotoSmall} 360w, ${personalPhoto} 700w`} sizes="(max-width: 480px) 60vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, 25vw"/>
                        <div className="category">{t('about.photoCategory')}</div>
                        <div className="heading">{t('about.photoHeading')}
                            <div className="author"><span className="name">{t('about.photoAuthor')}</span>, 2024</div>
                        </div>
                    </div>  
                    {isPhone ? (
                        <div className="abm_flower" aria-hidden="true">
                            <img loading="lazy" decoding="async" width="100" height="98" alt="" src={flowerImg}/>
                        </div>
                    ) : (
                        <FallingFlower sectionRef={sectionRef} />
                    )}
                </div>
            </div>

        </section>
    )
}

export default AboutMe;