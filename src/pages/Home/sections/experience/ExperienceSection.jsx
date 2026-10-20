import { m, useTransform } from "motion/react";
import { useSmoothScroll } from "../../../../hooks/useSmoothScroll";
import { useRef } from "react";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
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

import totvsLogo from '../../../../assets/images/companies/totvs.svg';
import cedisLogo from '../../../../assets/images/companies/cedis.svg';
import v360Logo from '../../../../assets/images/companies/v360_full.png';
import bemteviLogo from '../../../../assets/images/companies/bemtevi.png';
import ifbLogo from '../../../../assets/images/companies/ifb.svg';

const COMPANY_LOGOS_BY_ID = {
    1: totvsLogo,
    2: cedisLogo,
    3: v360Logo,
    4: bemteviLogo,
    5: ifbLogo,
};

const STICKERS_BY_ID = {
    1: doodleMobile,
    2: doodleBulb,
    3: doodleGem,
    4: doodleSparkles,
    5: doodleStarBadge,
};

const MOBILE_QUERY = '(max-width: 768px)';

function SectionHeader() {
    const { t } = useTranslation();
    return (
        <>
            <div className="header-title-container">
                <h2 className="header-title">
                    <span className="title-text">{t('experience.title')}</span>
                    <span className="header-sparkle-doodle" aria-hidden="true">
                        <img src={doodleSparkles} alt="" width="24" height="24" loading="lazy" decoding="async" />
                    </span>
                </h2>
            </div>
            <div className="header-subtitle-container">
                <h3>{t('experience.subtitle')}</h3>
                <span className="header-squiggly-doodle" aria-hidden="true">
                    <img src={doodleSquiggly} alt="" width="130" height="16" loading="lazy" decoding="async" />
                </span>
            </div>
        </>
    );
}

// Phones: same cards, but a static timeline (full line, one dot per job) instead of the
// scroll-driven line and card reveals, so scrolling never recalculates styles per frame
function ExperienceMobile() {
    const { i18n } = useTranslation();
    const currentLang = (i18n.language || 'pt').split('-')[0];

    return (
        <section className="timeline-section timeline-section--static" id="experience">
            <div className="section-header">
                <SectionHeader />
            </div>

            <div className="timeline-wrapper">
                <div className="left-experience-details">
                    {data.map((exp) => {
                        const content = exp[currentLang] || exp.en;
                        const logo = COMPANY_LOGOS_BY_ID[exp.id];

                        return (
                            <div key={exp.id} className="left-experience-card">
                                <span className="timeline-static-dot" aria-hidden="true" />
                                <div className="card-washi-tape" aria-hidden="true">
                                    <img src={doodleTape} alt="" width="65" height="25" loading="lazy" decoding="async" />
                                </div>
                                <div className="card-corner-sticker mobile-only" aria-hidden="true">
                                    <img src={STICKERS_BY_ID[exp.id] || doodleSparkles} alt="" width="26" height="26" loading="lazy" decoding="async" />
                                </div>
                                <div className="experience-card-main">
                                    {logo && (
                                        <div className="company-logo-container">
                                            <div className="company-logo-box">
                                                <img src={logo} alt={`${exp.company} logo`} className="company-logo-img" loading="lazy" decoding="async" />
                                            </div>
                                        </div>
                                    )}
                                    <div className="experience-card-info">
                                        <div className="experience-top-meta">
                                            <span className="experience-period">{content.period || exp.en.period}</span>
                                        </div>
                                        <h2 className="experience-company">{exp.company}</h2>
                                        <p className="experience-role">{content.role || exp.en.role}</p>
                                        <div className="experience-type">
                                            <span>{content.type || exp.en.type}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="experience-desc-mobile">{content.description || exp.en.description}</p>
                                <div className="tech-stack-mobile">
                                    {exp.techs.map((tech) => (
                                        <span key={tech} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="timeline-line-bg">
                    <div className="timeline-line-active" />
                </div>
            </div>
        </section>
    );
}

function ExperienceSection() {
    const isMobile = useMediaQuery(MOBILE_QUERY);
    return isMobile ? <ExperienceMobile /> : <ExperienceDesktop />;
}

function ExperienceDesktop() {
    const containerRef = useRef(null);
    const { i18n } = useTranslation();

    const currentLang = (i18n.language || 'pt').split('-')[0];

    const { scrollYProgress } = useSmoothScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    // Timeline line & dot scroll progress
    const scaleY = useTransform(scrollYProgress, [0.08, 0.92], ["0%", "100%"]);

    // Progressive card reveals synchronized with timeline line growth
    const card0Opacity = useTransform(scrollYProgress, [0.02, 0.14], [0.4, 1]);
    const card0LeftX = useTransform(scrollYProgress, [0.02, 0.14], [-24, 0]);
    const card0RightX = useTransform(scrollYProgress, [0.02, 0.14], [24, 0]);
    const card0Scale = useTransform(scrollYProgress, [0.02, 0.14], [0.97, 1]);

    const card1Opacity = useTransform(scrollYProgress, [0.18, 0.32], [0, 1]);
    const card1LeftX = useTransform(scrollYProgress, [0.18, 0.32], [-24, 0]);
    const card1RightX = useTransform(scrollYProgress, [0.18, 0.32], [24, 0]);
    const card1Scale = useTransform(scrollYProgress, [0.18, 0.32], [0.97, 1]);

    const card2Opacity = useTransform(scrollYProgress, [0.36, 0.50], [0, 1]);
    const card2LeftX = useTransform(scrollYProgress, [0.36, 0.50], [-24, 0]);
    const card2RightX = useTransform(scrollYProgress, [0.36, 0.50], [24, 0]);
    const card2Scale = useTransform(scrollYProgress, [0.36, 0.50], [0.97, 1]);

    const card3Opacity = useTransform(scrollYProgress, [0.54, 0.68], [0, 1]);
    const card3LeftX = useTransform(scrollYProgress, [0.54, 0.68], [-24, 0]);
    const card3RightX = useTransform(scrollYProgress, [0.54, 0.68], [24, 0]);
    const card3Scale = useTransform(scrollYProgress, [0.54, 0.68], [0.97, 1]);

    const card4Opacity = useTransform(scrollYProgress, [0.72, 0.88], [0, 1]);
    const card4LeftX = useTransform(scrollYProgress, [0.72, 0.88], [-24, 0]);
    const card4RightX = useTransform(scrollYProgress, [0.72, 0.88], [24, 0]);
    const card4Scale = useTransform(scrollYProgress, [0.72, 0.88], [0.97, 1]);

    const cardAnimConfigs = [
        { opacity: card0Opacity, leftX: card0LeftX, rightX: card0RightX, scale: card0Scale },
        { opacity: card1Opacity, leftX: card1LeftX, rightX: card1RightX, scale: card1Scale },
        { opacity: card2Opacity, leftX: card2LeftX, rightX: card2RightX, scale: card2Scale },
        { opacity: card3Opacity, leftX: card3LeftX, rightX: card3RightX, scale: card3Scale },
        { opacity: card4Opacity, leftX: card4LeftX, rightX: card4RightX, scale: card4Scale },
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
                <SectionHeader />
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
                        const logo = COMPANY_LOGOS_BY_ID[exp.id];
                        const anim = cardAnimConfigs[index] || cardAnimConfigs[cardAnimConfigs.length - 1];

                        const motionProps = {
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
                                <div className="experience-card-main">
                                    {logo && (
                                        <div className="company-logo-container">
                                            <div className="company-logo-box">
                                                <img
                                                    src={logo}
                                                    alt={`${company} logo`}
                                                    className="company-logo-img"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            </div>
                                        </div>
                                    )}
                                    <div className="experience-card-info">
                                        <div className="experience-top-meta">
                                            <span className="experience-period">{period}</span>
                                        </div>
                                        <h2 className="experience-company">{company}</h2>
                                        <p className="experience-role">{role}</p>
                                        <div className="experience-type">
                                            <span>{type}</span>
                                        </div>
                                    </div>
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

                        const motionProps = {
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