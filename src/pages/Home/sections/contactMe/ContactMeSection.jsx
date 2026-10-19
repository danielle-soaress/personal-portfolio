import './ContactMeSection.scss';
import { useRef } from 'react';
import { m, useTransform } from 'motion/react';
import { useSmoothScroll } from '../../../../hooks/useSmoothScroll';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import ValuesScrollStory from './ValuesScrollStory';
import ValuesList from './ValuesList';
import { useTranslation } from 'react-i18next';
import SocialMedias from '../../../../components/socialMedias/SocialMedias';
import flowerOne from '../../../../assets/images/flower_1_reduced.webp'
import flowerTwo from '../../../../assets/images/flower_2.webp';
import flowerThree from '../../../../assets/images/flower_3.webp';
import "../../../../i18n";

function ContactMeSection() {
    const contactRef = useRef(null);
    const { t } = useTranslation();
    // Phones get the static values list and static flowers: no per-frame scroll work
    const isMobile = useMediaQuery('(max-width: 768px)');

    const { scrollYProgress: contactScrollProgress } = useSmoothScroll({
        target: contactRef,
        offset: ["start 85%", "start start"],
    });

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
            {isMobile ? <ValuesList /> : <ValuesScrollStory />}

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
    