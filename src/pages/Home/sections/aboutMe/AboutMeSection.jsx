
import './AboutMeSection.scss'
import flowerImg from '../../../../assets/images/flower_3.webp'
import doodleSmiley from '../../../../assets/images/doodles/doodle_smiley.svg'

import personalPhoto from '../../../../assets/images/about.webp'
import personalPhotoSmall from '../../../../assets/images/about-360.webp'
import { useTranslation } from 'react-i18next';
import "../../../../i18n";
import { m } from "motion/react";

function AboutMe() {
    const { t } = useTranslation();

    return (
        <section id="about_me" className="about_me_section">
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
                    {/* Static sticker on the card corner (no scroll-linked motion: too costly on phones) */}
                    <div className="abm_flower" aria-hidden="true">
                        <img loading="lazy" decoding="async" width="100" height="98" alt="" src={flowerImg}/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutMe;