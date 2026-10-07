import './ContactMeSection.scss';
import { useRef, useState, useEffect } from 'react';
import { m, useScroll, useTransform } from 'motion/react';
import { useTranslation } from 'react-i18next';
import SocialMedias from '../../../../components/socialMedias/SocialMedias';
import flowerOne from '../../../../assets/images/flower_1_reduced.webp'
import flowerTwo from '../../../../assets/images/flower_2.webp';
import flowerThree from '../../../../assets/images/flower_3.webp';
import "../../../../i18n";

function ContactMeSection() {
    const introRef = useRef(null);
    const contactRef = useRef(null);
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
        target: introRef,
        offset: ["start start", "end end"],
    });

    const { scrollYProgress: contactScrollProgress } = useScroll({
        target: contactRef,
        offset: ["start 85%", "start start"],
    });

    const purposeOpacity = useTransform(scrollYProgress, [0, 0.24, 0.34], [1, 1, 0]);
    const innovationOpacity = useTransform(scrollYProgress, [0.28, 0.38, 0.58, 0.68], [0, 1, 1, 0]);
    const growthOpacity = useTransform(scrollYProgress, [0.62, 0.72, 1], [0, 1, 1]);

    const purposeY = useTransform(scrollYProgress, [0, 0.24, 0.34], [0, 0, -45]);
    const innovationY = useTransform(scrollYProgress, [0.28, 0.38, 0.58, 0.68], [45, 0, 0, -45]);
    const growthY = useTransform(scrollYProgress, [0.62, 0.72, 1], [45, 0, 0]);

    const stickyOpacity = useTransform(scrollYProgress, [0, 0.12, 0.86, 1], [0, 1, 1, 0]);
    const stickyBlur = useTransform(scrollYProgress, [0, 0.12, 0.86, 1], ["blur(18px)", "blur(0px)", "blur(0px)", "blur(18px)"]);

    const blurOneX = useTransform(scrollYProgress, [0, 1], [-70, 120]);
    const blurOneY = useTransform(scrollYProgress, [0, 1], [-40, 80]);
    const blurOneScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.15, 1]);
    const blurTwoX = useTransform(scrollYProgress, [0, 1], [80, -130]);
    const blurTwoY = useTransform(scrollYProgress, [0, 1], [70, -90]);
    const blurTwoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 0.92, 1.12]);

    const identifiedOpacity = useTransform(contactScrollProgress, [0.05, 0.2], [0, 1]);
    const identifiedY = useTransform(contactScrollProgress, [0.05, 0.2], [34, 0]);
    const workTogetherOpacity = useTransform(contactScrollProgress, [0.32, 0.5], [0, 1]);
    const workTogetherY = useTransform(contactScrollProgress, [0.32, 0.5], [34, 0]);
    const dividerOpacity = useTransform(contactScrollProgress, [0.62, 0.72], [0, 1]);
    const dividerScaleX = useTransform(contactScrollProgress, [0.62, 0.72], [0, 1]);
    const socialsOpacity = useTransform(contactScrollProgress, [0.82, 0.96], [0, 1]);
    const socialsY = useTransform(contactScrollProgress, [0.82, 0.96], [34, 0]);
    const flowerLeftY = useTransform(contactScrollProgress, [0, 1], [80, -80]);
    const flowerLeftRotate = useTransform(contactScrollProgress, [0, 1], [-16, 24]);
    const flowerRightY = useTransform(contactScrollProgress, [0, 1], [-60, 70]);
    const flowerRightRotate = useTransform(contactScrollProgress, [0, 1], [18, -28]);
    const flowerBottomY = useTransform(contactScrollProgress, [0, 1], [70, -30]);
    const flowerBottomRotate = useTransform(contactScrollProgress, [0, 1], [8, 42]);
    const flowerTopY = useTransform(contactScrollProgress, [0, 1], [-30, 55]);
    const flowerTopRotate = useTransform(contactScrollProgress, [0, 1], [-28, 18]);
    const flowerCenterY = useTransform(contactScrollProgress, [0, 1], [45, -65]);
    const flowerCenterRotate = useTransform(contactScrollProgress, [0, 1], [34, -12]);
    const flowerSmallY = useTransform(contactScrollProgress, [0, 1], [-20, 36]);
    const flowerSmallRotate = useTransform(contactScrollProgress, [0, 1], [4, 38]);
    const flowerCornerY = useTransform(contactScrollProgress, [0, 1], [-36, 42]);
    const flowerCornerRotate = useTransform(contactScrollProgress, [0, 1], [-18, 30]);

    return (
        <section className="ContactMe_container">
            <section ref={introRef} className="ContactMe_intro">
                <div className="ContactMe_sticky">
                    <m.div className="sticky_phrase" style={isMobile ? undefined : { opacity: stickyOpacity, filter: stickyBlur }}>
                        {!isMobile && (
                            <>
                                <m.div
                                    className="purple_blur purple_blur_one"
                                    style={{ x: blurOneX, y: blurOneY, scale: blurOneScale }}
                                />
                                <m.div
                                    className="purple_blur purple_blur_two"
                                    style={{ x: blurTwoX, y: blurTwoY, scale: blurTwoScale }}
                                />
                            </>
                        )}
                        <span>{t('contact.searchTitle')}</span>
                        {isMobile ? (
                            <div className="rotating_words mobile_words">
                                <h2>{t('contact.values.purpose')}</h2>
                                <h2>{t('contact.values.innovation')}</h2>
                                <h2>{t('contact.values.growth')}</h2>
                            </div>
                        ) : (
                            <div className="rotating_words">
                                <m.h2 style={{ opacity: purposeOpacity, y: purposeY }}>{t('contact.values.purpose')}</m.h2>
                                <m.h2 style={{ opacity: innovationOpacity, y: innovationY }}>{t('contact.values.innovation')}</m.h2>
                                <m.h2 style={{ opacity: growthOpacity, y: growthY }}>{t('contact.values.growth')}</m.h2>
                            </div>
                        )}
                    </m.div>
                </div>
            </section>

            <section id="contact_me" ref={contactRef} className="form_panel">
                <m.img
                    src={flowerOne}
                    className="contact_flower contact_flower_left"
                    style={isMobile ? undefined : { y: flowerLeftY, rotate: flowerLeftRotate }}
                    alt=""
                    aria-hidden="true"
                    width="175"
                    height="150"
                    loading="lazy"
                    decoding="async"
                />
                <m.img
                    src={flowerTwo}
                    className="contact_flower contact_flower_right"
                    style={isMobile ? undefined : { y: flowerRightY, rotate: flowerRightRotate }}
                    alt=""
                    aria-hidden="true"
                    width="700"
                    height="600"
                    loading="lazy"
                    decoding="async"
                />
                <m.img
                    src={flowerThree}
                    className="contact_flower contact_flower_bottom"
                    style={isMobile ? undefined : { y: flowerBottomY, rotate: flowerBottomRotate }}
                    alt=""
                    aria-hidden="true"
                    width="404"
                    height="396"
                    loading="lazy"
                    decoding="async"
                />
                <m.img
                    src={flowerTwo}
                    className="contact_flower contact_flower_top"
                    style={isMobile ? undefined : { y: flowerTopY, rotate: flowerTopRotate }}
                    alt=""
                    aria-hidden="true"
                    width="700"
                    height="600"
                    loading="lazy"
                    decoding="async"
                />
                <m.img
                    src={flowerOne}
                    className="contact_flower contact_flower_center"
                    style={isMobile ? undefined : { y: flowerCenterY, rotate: flowerCenterRotate }}
                    alt=""
                    aria-hidden="true"
                    width="175"
                    height="150"
                    loading="lazy"
                    decoding="async"
                />
                <m.img
                    src={flowerThree}
                    className="contact_flower contact_flower_small"
                    style={isMobile ? undefined : { y: flowerSmallY, rotate: flowerSmallRotate }}
                    alt=""
                    aria-hidden="true"
                    width="404"
                    height="396"
                    loading="lazy"
                    decoding="async"
                />
                <m.img
                    src={flowerOne}
                    className="contact_flower contact_flower_corner"
                    style={isMobile ? undefined : { y: flowerCornerY, rotate: flowerCornerRotate }}
                    alt=""
                    aria-hidden="true"
                    width="175"
                    height="150"
                    loading="lazy"
                    decoding="async"
                />
                <m.div
                    className="form_intro_text"
                    {...(isMobile ? {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true, amount: 0.3 },
                        transition: { duration: 0.6, ease: "easeOut" }
                    } : {})}
                >
                    <m.span
                        style={isMobile ? undefined : { opacity: identifiedOpacity, y: identifiedY }}
                    >
                        {t('contact.identified')}
                    </m.span>
                    <m.span
                        style={isMobile ? undefined : { opacity: workTogetherOpacity, y: workTogetherY }}
                    >
                        {t('contact.workTogether')}
                    </m.span>
                </m.div>

                <m.div
                    className="form_divider"
                    {...(isMobile ? {
                        initial: { opacity: 0, scaleX: 0 },
                        whileInView: { opacity: 1, scaleX: 1 },
                        viewport: { once: true, amount: 0.5 },
                        transition: { duration: 0.5, ease: "easeOut" }
                    } : {})}
                    style={isMobile ? undefined : { opacity: dividerOpacity, scaleX: dividerScaleX }}
                ></m.div>

                <m.div
                    className="contact_socials"
                    {...(isMobile ? {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true, amount: 0.3 },
                        transition: { duration: 0.6, delay: 0.1, ease: "easeOut" }
                    } : {})}
                    style={isMobile ? undefined : { opacity: socialsOpacity, y: socialsY }}
                >
                    <SocialMedias showRectangle={false} />
                    <p>{t('contact.description.pt2')}</p>
                </m.div>
            </section>
        </section>
    );
}

export default ContactMeSection;
    