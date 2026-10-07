import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { m, useScroll, useTransform } from 'motion/react';
import {
  BsArrowUpRight,
  BsArrowRight,
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsCheck2
} from 'react-icons/bs';

import './IntroductionSection.scss';
import personalPhoto from '../../../../assets/images/hero_danielle.webp';
import flowerOne from '../../../../assets/images/flower_1_reduced.webp';
import flowerTwo from '../../../../assets/images/flower_2.webp';
import flowerThree from '../../../../assets/images/flower_3.webp';
import doodleCoffee from '../../../../assets/images/doodles/doodle_coffee.svg';
import doodleSparkles from '../../../../assets/images/doodles/doodle_sparkles.svg';
import doodleArrow from '../../../../assets/images/doodles/doodle_arrow.svg';
import doodleCodingBubble from '../../../../assets/images/doodles/doodle_coding_bubble.svg';
import '../../../../i18n';

const EMAIL = 'silvasoaresdanielle2@gmail.com';
const GITHUB_URL = 'https://github.com/danielle-soaress';
const LINKEDIN_URL = 'https://www.linkedin.com/in/danielle-soares-712910206/';

// Smooth GPU-composited easing curves (transforms & opacity only, 60fps)
const cinematicEase = [0.22, 1, 0.36, 1];
const cinematicSoftEase = [0.25, 1, 0.5, 1];
const cinematicPop = [0.34, 1.25, 0.64, 1];

// Left panel narrative: progressive reveal without delaying LCP
const leftPanelVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.32,
      staggerChildren: 0.09
    }
  }
};

const leftItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cinematicEase }
  }
};

const ctaVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: cinematicEase }
  }
};

const arrowVariants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -18 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.75, ease: cinematicPop }
  }
};

// Right panel social pills: cascading connection links
const rightPanelVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.45,
      staggerChildren: 0.08
    }
  }
};

const pillVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: cinematicEase }
  }
};

function IntroductionSection() {
  const containerRef = useRef(null);
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const isEn = Boolean(i18n.language && i18n.language.startsWith('en'));
  const emailCopiedText = isEn ? 'Email copied!' : 'Email copiado!';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="introduction" ref={containerRef} className="hero_stage_wrapper">
      <div className="hero_stage_container">
        {/* 1. Ambient Center Glow */}
        <m.div
          className="hero_backdrop_glow"
          initial={{ opacity: 0, scale: 0.65 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: cinematicSoftEase }}
          aria-hidden="true"
        />

        {/* 2. Atmospheric Floating Flowers Layer */}
        <m.div
          className="hero_bg_flowers_layer"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: cinematicSoftEase }}
          aria-hidden="true"
        >
          <img
            src={flowerOne}
            className="hero_bg_flower hero_flower_top_left_large"
            alt=""
            width="175"
            height="150"
            loading="lazy"
            decoding="async"
          />
          <img
            src={flowerTwo}
            className="hero_bg_flower hero_flower_yellow_mid"
            alt=""
            width="700"
            height="600"
            loading="lazy"
            decoding="async"
          />
          <img
            src={flowerThree}
            className="hero_bg_flower hero_flower_top_left_tiny"
            alt=""
            width="404"
            height="396"
            loading="lazy"
            decoding="async"
          />
          <img
            src={flowerTwo}
            className="hero_bg_flower hero_flower_top_right_large"
            alt=""
            width="700"
            height="600"
            loading="lazy"
            decoding="async"
          />
          <img
            src={flowerOne}
            className="hero_bg_flower hero_flower_top_right_small"
            alt=""
            width="175"
            height="150"
            loading="lazy"
            decoding="async"
          />
          <img
            src={flowerTwo}
            className="hero_bg_flower hero_flower_mid_left_small"
            alt=""
            width="700"
            height="600"
            loading="lazy"
            decoding="async"
          />
          <img
            src={flowerThree}
            className="hero_bg_flower hero_flower_mid_right_medium"
            alt=""
            width="404"
            height="396"
            loading="lazy"
            decoding="async"
          />
          <img
            src={flowerThree}
            className="hero_bg_flower hero_flower_bottom_left_medium"
            alt=""
            width="404"
            height="396"
            loading="lazy"
            decoding="async"
          />
          <img
            src={flowerOne}
            className="hero_bg_flower hero_flower_bottom_right_medium"
            alt=""
            width="175"
            height="150"
            loading="lazy"
            decoding="async"
          />
          <img
            src={flowerTwo}
            className="hero_bg_flower hero_flower_bottom_inner_micro"
            alt=""
            width="700"
            height="600"
            loading="lazy"
            decoding="async"
          />
        </m.div>

        {/* 3. Hand-drawn Coffee Mug Doodle */}
        <m.div
          className="doodle_coffee_wrapper"
          initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.55, duration: 0.75, ease: cinematicPop }}
          aria-hidden="true"
        >
          <img
            src={doodleCoffee}
            alt=""
            className="doodle_coffee_svg"
            width="110"
            height="105"
            loading="lazy"
            decoding="async"
          />
        </m.div>

        {/* 4. Giant Monogram / Title Reveal ("danielle" + "soares" + sparkles) */}
        <div className="hero_name_backdrop" aria-hidden="true">
          <div className="name_lockup">
            <m.span
              className="script_first_name"
              initial={{ opacity: 0, y: -30, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 0.9, delay: 0.08, ease: cinematicEase }}
            >
              danielle
            </m.span>
            <m.span
              className="bold_last_name"
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.16, ease: cinematicEase }}
            >
              soares
              <m.span
                className="doodle_sparkles_wrapper"
                initial={{ opacity: 0, scale: 0.2, rotate: -25 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.45, duration: 0.75, ease: cinematicPop }}
                aria-hidden="true"
              >
                <img
                  src={doodleSparkles}
                  alt=""
                  className="doodle_sparkles_svg"
                  width="70"
                  height="70"
                  loading="lazy"
                  decoding="async"
                />
              </m.span>
            </m.span>
          </div>
        </div>

        {/* 5. Centerpiece: Danielle's Portrait */}
        <m.div
          className="hero_portrait_anchor"
          initial={{ opacity: 0, y: 45, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: cinematicEase }}
        >
          <m.div
            className="portrait_glow_halo"
            initial={{ opacity: 0, scale: 0.65, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            transition={{ duration: 1.3, delay: 0.24, ease: cinematicSoftEase }}
            aria-hidden="true"
          />
          <img
            src={personalPhoto}
            alt="Danielle Soares"
            className="portrait_image"
            width="444"
            height="561"
            loading="eager"
            decoding="async"
          />
        </m.div>

        {/* 6. Hand-drawn Coding Speech Bubble Doodle */}
        <m.div
          className="doodle_coding_bubble_wrapper"
          initial={{ opacity: 0, scale: 0.4, rotate: 18 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.65, duration: 0.75, ease: cinematicPop }}
          aria-hidden="true"
        >
          <img
            src={doodleCodingBubble}
            alt=""
            className="doodle_coding_bubble_svg"
            width="170"
            height="140"
            loading="lazy"
            decoding="async"
          />
        </m.div>

        {/* 7. Left Panel: Heading, Description, CTA Pill Button & Doodle Arrow */}
        <m.div
          className="hero_left_panel"
          variants={leftPanelVariants}
          initial="hidden"
          animate="visible"
        >
          <m.h2 className="hero_role_heading" variants={leftItemVariants}>
            {t('introduction.role')}
          </m.h2>

          <m.p className="hero_pitch_text" variants={leftItemVariants}>
            {t('introduction.description')}
          </m.p>

          <m.a
            href="#contact_me"
            className="hero_cta_pill_button"
            variants={ctaVariants}
          >
            <span>{t('introduction.button')}</span>
            <BsArrowRight className="cta_arrow_icon" />
          </m.a>

          <m.div
            className="doodle_arrow_wrapper"
            variants={arrowVariants}
            aria-hidden="true"
          >
            <img
              src={doodleArrow}
              alt=""
              className="doodle_arrow_svg"
              width="160"
              height="110"
              loading="lazy"
              decoding="async"
            />
          </m.div>
        </m.div>

        {/* 8. Right Panel: Cascading Social Connection Pills */}
        <m.div
          className="hero_right_panel"
          variants={rightPanelVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero_pill_stack">
            <m.a
              variants={pillVariants}
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero_social_pill"
              aria-label="GitHub - Danielle Soares"
            >
              <BsGithub className="pill_icon" />
              <span className="pill_label">GitHub</span>
              <BsArrowUpRight className="pill_arrow" />
            </m.a>

            <m.a
              variants={pillVariants}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero_social_pill"
              aria-label="LinkedIn - Danielle Soares"
            >
              <BsLinkedin className="pill_icon" />
              <span className="pill_label">LinkedIn</span>
              <BsArrowUpRight className="pill_arrow" />
            </m.a>

            <m.button
              variants={pillVariants}
              type="button"
              onClick={handleCopyEmail}
              className={`hero_social_pill ${copied ? 'hero_social_pill--copied' : ''}`}
              title={EMAIL}
              aria-label={t('social.copyEmailAria') || 'Copiar email'}
            >
              {copied ? <BsCheck2 className="pill_icon copied_icon" /> : <BsEnvelope className="pill_icon" />}
              <span className="pill_label">{copied ? emailCopiedText : 'Email'}</span>
              <BsArrowUpRight className="pill_arrow" />
            </m.button>
          </div>
        </m.div>
      </div>

      {/* 9. Scroll Indicator with scroll progress fade */}
      <m.div
        className="hero_center_scroll_wrapper"
        style={{ opacity: scrollOpacity }}
      >
        <m.a
          href="#about_me"
          className="hero_center_scroll"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: cinematicEase }}
          aria-label={t('introduction.scroll') || 'Rolar'}
        >
          <span className="scroll_label">{t('introduction.scroll')}</span>
          <svg
            className="scroll_chevron"
            viewBox="0 0 24 24"
            width="17"
            height="17"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </m.a>
      </m.div>
    </section>
  );
}

export default IntroductionSection;