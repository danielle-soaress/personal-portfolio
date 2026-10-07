import { m, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import './ExperienceSection.scss';
import data from '../../../../data/experience.json';
import { useTranslation } from 'react-i18next';
import "../../../../i18n";

import doodleSparkles from '../../../../assets/images/doodles/doodle_sparkles.svg';
import doodleTape from '../../../../assets/images/doodles/doodle_washi_tape.svg';
import doodleGem from '../../../../assets/images/doodles/doodle_gem.svg';
import doodleBulb from '../../../../assets/images/doodles/doodle_lightbulb.svg';
import doodleMobile from '../../../../assets/images/doodles/doodle_mobile.svg';
import doodleStarBadge from '../../../../assets/images/doodles/doodle_star_badge.svg';
import doodleSquiggly from '../../../../assets/images/doodles/doodle_squiggly.svg';

const STICKERS_BY_ID = {
    1: doodleGem,
    2: doodleBulb,
    3: doodleMobile,
    5: doodleStarBadge,
};

function ExperienceSection() {
    const containerRef = useRef(null);
    const { t, i18n } = useTranslation();

    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth <= 768 : false
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const currentLang = (i18n.language || 'pt').split('-')[0];
    const isEn = currentLang === 'en';

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: isMobile ? ["start 80%", "end 80%"] : ["start center", "end end"]
    });

    // Timeline line & dot scroll progress
    const scaleY = useTransform(scrollYProgress, isMobile ? [0, 1] : [0.08, 0.92], ["0%", "100%"]);

    // Progressive card reveals synchronized with timeline line growth (for desktop & tablet)
    const card0Opacity = useTransform(scrollYProgress, [0.02, 0.16], [0.35, 1]);
    const card0LeftX = useTransform(scrollYProgress, [0.02, 0.16], [-24, 0]);
    const card0RightX = useTransform(scrollYProgress, [0.02, 0.16], [24, 0]);
    const card0Scale = useTransform(scrollYProgress, [0.02, 0.16], [0.97, 1]);

    const card1Opacity = useTransform(scrollYProgress, [0.22, 0.38], [0, 1]);
    const card1LeftX = useTransform(scrollYProgress, [0.22, 0.38], [-24, 0]);
    const card1RightX = useTransform(scrollYProgress, [0.22, 0.38], [24, 0]);
    const card1Scale = useTransform(scrollYProgress, [0.22, 0.38], [0.97, 1]);

    const card2Opacity = useTransform(scrollYProgress, [0.46, 0.62], [0, 1]);
    const card2LeftX = useTransform(scrollYProgress, [0.46, 0.62], [-24, 0]);
    const card2RightX = useTransform(scrollYProgress, [0.46, 0.62], [24, 0]);
    const card2Scale = useTransform(scrollYProgress, [0.46, 0.62], [0.97, 1]);

    const card3Opacity = useTransform(scrollYProgress, [0.70, 0.86], [0, 1]);
    const card3LeftX = useTransform(scrollYProgress, [0.70, 0.86], [-24, 0]);
    const card3RightX = useTransform(scrollYProgress, [0.70, 0.86], [24, 0]);
    const card3Scale = useTransform(scrollYProgress, [0.70, 0.86], [0.97, 1]);

    const cardAnimConfigs = [
        { opacity: card0Opacity, leftX: card0LeftX, rightX: card0RightX, scale: card0Scale },
        { opacity: card1Opacity, leftX: card1LeftX, rightX: card1RightX, scale: card1Scale },
        { opacity: card2Opacity, leftX: card2LeftX, rightX: card2RightX, scale: card2Scale },
        { opacity: card3Opacity, leftX: card3LeftX, rightX: card3RightX, scale: card3Scale },
    ];

    return (
        <section ref={containerRef} className="timeline-section" id="experience">
            <m.div
                className="section-header"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
            >
                <div className="header-title-container">
                    <h2>{t('experience.title')}</h2>
                    <span className="header-sparkle-doodle" aria-hidden="true">
                        <img src={doodleSparkles} alt="" width="24" height="24" loading="lazy" decoding="async" />
                    </span>
                </div>
                <div className="header-subtitle-container">
                    <h3>{t('experience.subtitle')}</h3>
                    <span className="header-squiggly-doodle" aria-hidden="true">
                        <img src={doodleSquiggly} alt="" width="130" height="16" loading="lazy" decoding="async" />
                    </span>
                </div>
            </m.div>

            <div className="timeline-wrapper">
                <div className="left-experience-details">
                    {data.map((exp, index) => {
                        const content = exp[currentLang] || exp.en;
                        const period = content.period || exp.en.period;
                        const type = content.type || exp.en.type;
                        const role = content.role || exp.en.role;
                        const company = exp.company;
                        const desc = content.description || exp.en.description;
                        const anim = cardAnimConfigs[index] || cardAnimConfigs[cardAnimConfigs.length - 1];

                        const motionProps = isMobile
                            ? {
                                initial: { opacity: 0, y: 24 },
                                whileInView: { opacity: 1, y: 0 },
                                viewport: { once: true, amount: 0.2 },
                                transition: { duration: 0.5, ease: "easeOut" }
                            }
                            : {
                                style: {
                                    opacity: anim.opacity,
                                    x: anim.leftX,
                                    scale: anim.scale
                                }
                            };

                        return (
                            <m.div
                                key={exp.id}
                                {...motionProps}
                                className="left-experience-card"
                            >
                                <div className="experience-top-meta">
                                    <span className="experience-period">{period}</span>
                                </div>
                                <h2 className="experience-company">{company}</h2>
                                <p className="experience-role">{role}</p>
                                <div className="experience-type">
                                    <span>{type}</span>
                                </div>
                                <p className="experience-desc-mobile">{desc}</p>
                                <div className="tech-stack-mobile">
                                    {exp.techs.map((tech, techIdx) => (
                                        <span key={techIdx} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </m.div>
                        );
                    })}
                </div>

                <div className="timeline-line-bg">
                    <m.div
                        className="timeline-line-active"
                        style={{ height: scaleY }}
                    />
                    <m.div
                        className="timeline-dot"
                        style={{ top: scaleY }}
                    >
                        <span className="timeline-dot-inner" />
                        <span className="timeline-dot-halo" />
                    </m.div>
                </div>

                <div className="right-experience-details">
                    {data.map((exp, index) => {
                        const content = exp[currentLang] || exp.en;
                        const desc = content.description || exp.en.description;
                        const stickerIcon = STICKERS_BY_ID[exp.id] || doodleSparkles;
                        const anim = cardAnimConfigs[index] || cardAnimConfigs[cardAnimConfigs.length - 1];

                        const motionProps = isMobile
                            ? {
                                initial: { opacity: 0, y: 24 },
                                whileInView: { opacity: 1, y: 0 },
                                viewport: { once: true, amount: 0.2 },
                                transition: { duration: 0.5, ease: "easeOut" }
                            }
                            : {
                                style: {
                                    opacity: anim.opacity,
                                    x: anim.rightX,
                                    scale: anim.scale
                                }
                            };

                        return (
                            <m.div
                                key={exp.id}
                                {...motionProps}
                                className="right-experience-card"
                            >
                                <div className="card-washi-tape washi-right" aria-hidden="true">
                                    <img src={doodleTape} alt="" width="65" height="25" loading="lazy" decoding="async" />
                                </div>

                                <div className="card-corner-sticker" aria-hidden="true">
                                    <img src={stickerIcon} alt="" width="26" height="26" loading="lazy" decoding="async" />
                                </div>

                                <p className="experience-desc">{desc}</p>

                                <div className="tech-stack">
                                    {exp.techs.map((tech, techIdx) => (
                                        <span key={techIdx} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </m.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;