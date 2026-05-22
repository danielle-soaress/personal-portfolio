import './ContactMeSection.scss';
import {useRef} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SocialMedias from '../../../../components/socialMedias/SocialMedias';
import "../../../../i18n";

function ContactMeSection() {
    const introRef = useRef(null);
    const contactRef = useRef(null);
    const { t } = useTranslation();

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

    return (
        <section className="ContactMe_container">
            <section ref={introRef} className="ContactMe_intro">
                <div className="ContactMe_sticky">
                    <motion.div className="sticky_phrase" style={{ opacity: stickyOpacity, filter: stickyBlur }}>
                        <motion.div
                            className="purple_blur purple_blur_one"
                            style={{ x: blurOneX, y: blurOneY, scale: blurOneScale }}
                        />
                        <motion.div
                            className="purple_blur purple_blur_two"
                            style={{ x: blurTwoX, y: blurTwoY, scale: blurTwoScale }}
                        />
                        <span>{t('contact.searchTitle')}</span>
                        <div className="rotating_words">
                            <motion.h2 style={{ opacity: purposeOpacity, y: purposeY }}>{t('contact.values.purpose')}</motion.h2>
                            <motion.h2 style={{ opacity: innovationOpacity, y: innovationY }}>{t('contact.values.innovation')}</motion.h2>
                            <motion.h2 style={{ opacity: growthOpacity, y: growthY }}>{t('contact.values.growth')}</motion.h2>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="contact_me" ref={contactRef} className="form_panel">
                <motion.div
                    className="form_intro_text"
                >
                    <motion.span
                        style={{ opacity: identifiedOpacity, y: identifiedY }}
                    >
                        {t('contact.identified')}
                    </motion.span>
                    <motion.span
                        style={{ opacity: workTogetherOpacity, y: workTogetherY }}
                    >
                        {t('contact.workTogether')}
                    </motion.span>
                </motion.div>

                <motion.div
                    className="form_divider"
                    style={{ opacity: dividerOpacity, scaleX: dividerScaleX }}
                ></motion.div>

                <motion.div
                    className="contact_socials"
                    style={{ opacity: socialsOpacity, y: socialsY }}
                >
                    <SocialMedias showRectangle={false} />
                    <p>{t('contact.description.pt2')}</p>
                </motion.div>
            </section>
        </section>
    );
}

export default ContactMeSection;
    