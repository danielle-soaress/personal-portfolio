import { useRef } from 'react';
import { m, useTransform } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useSmoothScroll } from '../../../../hooks/useSmoothScroll';

// Desktop: a pinned phrase whose value word swaps (purpose → innovation → growth) as the page scrolls
function ValuesScrollStory() {
    const introRef = useRef(null);
    const { t } = useTranslation();

    const { scrollYProgress } = useSmoothScroll({
        target: introRef,
        offset: ['start start', 'end end'],
    });

    const purposeOpacity = useTransform(scrollYProgress, [0, 0.24, 0.34], [1, 1, 0]);
    const innovationOpacity = useTransform(scrollYProgress, [0.28, 0.38, 0.58, 0.68], [0, 1, 1, 0]);
    const growthOpacity = useTransform(scrollYProgress, [0.62, 0.72, 1], [0, 1, 1]);

    const purposeY = useTransform(scrollYProgress, [0, 0.24, 0.34], [0, 0, -45]);
    const innovationY = useTransform(scrollYProgress, [0.28, 0.38, 0.58, 0.68], [45, 0, 0, -45]);
    const growthY = useTransform(scrollYProgress, [0.62, 0.72, 1], [45, 0, 0]);

    const stickyOpacity = useTransform(scrollYProgress, [0, 0.12, 0.86, 1], [0, 1, 1, 0]);
    const stickyBlur = useTransform(scrollYProgress, [0, 0.12, 0.86, 1], ['blur(18px)', 'blur(0px)', 'blur(0px)', 'blur(18px)']);

    const blurOneX = useTransform(scrollYProgress, [0, 1], [-70, 120]);
    const blurOneY = useTransform(scrollYProgress, [0, 1], [-40, 80]);
    const blurOneScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.15, 1]);
    const blurTwoX = useTransform(scrollYProgress, [0, 1], [80, -130]);
    const blurTwoY = useTransform(scrollYProgress, [0, 1], [70, -90]);
    const blurTwoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 0.92, 1.12]);

    return (
        <section ref={introRef} className="ContactMe_intro">
            <div className="ContactMe_sticky">
                <m.div className="sticky_phrase" style={{ opacity: stickyOpacity, filter: stickyBlur }}>
                    <m.div className="purple_blur purple_blur_one" style={{ x: blurOneX, y: blurOneY, scale: blurOneScale }} />
                    <m.div className="purple_blur purple_blur_two" style={{ x: blurTwoX, y: blurTwoY, scale: blurTwoScale }} />
                    <span>{t('contact.searchTitle')}</span>
                    <div className="rotating_words">
                        <m.h2 style={{ opacity: purposeOpacity, y: purposeY }}>{t('contact.values.purpose')}</m.h2>
                        <m.h2 style={{ opacity: innovationOpacity, y: innovationY }}>{t('contact.values.innovation')}</m.h2>
                        <m.h2 style={{ opacity: growthOpacity, y: growthY }}>{t('contact.values.growth')}</m.h2>
                    </div>
                </m.div>
            </div>
        </section>
    );
}

export default ValuesScrollStory;
