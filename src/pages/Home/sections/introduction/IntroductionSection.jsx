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
import personalPhoto from '../../../../assets/images/hero_danielle.png';
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

// Velvety, cinematic easing curves (deliberate deceleration, theatrical quality)
const cinematicEase = [0.22, 1, 0.36, 1];
const cinematicSoftEase = [0.25, 1, 0.5, 1];
const cinematicPop = [0.34, 1.25, 0.64, 1]; // gentle, high-end artistic flourish

// Left panel narrative: deliberate, cinematic storytelling reveal
const leftPanelVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.35,
      staggerChildren: 0.18
    }
  }
};

const leftItemVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.95, ease: cinematicEase }
  }
};

const ctaVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: cinematicEase }
  }
};

const arrowVariants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: cinematicPop }
  }
};

// Right panel social pills: cascading connection links
const rightPanelVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.6,
      staggerChildren: 0.15
    }
  }
};

const pillVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.92, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: cinematicEase }
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
        {/* 1. Act I: Ambient Center Glow awakening */}
        <m.div
          className="hero_backdrop_glow"
          initial={{ opacity: 0, scale: 0.55 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0, ease: cinematicSoftEase }}
          aria-hidden="true"
        />

        {/* 2. Act I: Atmospheric Floating Flowers Layer (blooming out of mist) */}
        <m.div
          className="hero_bg_flowers_layer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.35, ease: cinematicSoftEase }}
          aria-hidden="true"
        >
          <img
            src={flowerOne}
            className="hero_bg_flower hero_flower_top_left_large"
            alt=""
            loading="lazy"
          />
          <img
            src={flowerTwo}
            className="hero_bg_flower hero_flower_yellow_mid"
            alt=""
            loading="lazy"
          />
          <img
            src={flowerThree}
            className="hero_bg_flower hero_flower_top_left_tiny"
            alt=""
            loading="lazy"
          />
          <img
            src={flowerTwo}
            className="hero_bg_flower hero_flower_top_right_large"
            alt=""
            loading="lazy"
          />
          <img
            src={flowerOne}
            className="hero_bg_flower hero_flower_top_right_small"
            alt=""
            loading="lazy"
          />
          <img
            src={flowerTwo}
            className="hero_bg_flower hero_flower_mid_left_small"
            alt=""
            loading="lazy"
          />
          <img
            src={flowerThree}
            className="hero_bg_flower hero_flower_mid_right_medium"
            alt=""
            loading="lazy"
          />
          <img
            src={flowerThree}
            className="hero_bg_flower hero_flower_bottom_left_medium"
            alt=""
            loading="lazy"
          />
          <img
            src={flowerOne}
            className="hero_bg_flower hero_flower_bottom_right_medium"
            alt=""
            loading="lazy"
          />
          <img
            src={flowerTwo}
            className="hero_bg_flower hero_flower_bottom_inner_micro"
            alt=""
            loading="lazy"
          />
        </m.div>

        {/* 3. Act V: Hand-drawn Coffee Mug Doodle */}
        <m.div
          className="doodle_coffee_wrapper"
          initial={{ opacity: 0, scale: 0.4, rotate: -20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
          transition={{ delay: 1.85, duration: 0.95, ease: cinematicPop }}
          aria-hidden="true"
        >
          <img
            src={doodleCoffee}
            alt=""
            className="doodle_coffee_svg"
            loading="lazy"
          />
        </m.div>

        {/* 4. Act II: Giant Monogram / Title Reveal ("danielle" + "soares" + sparkles) */}
        <div className="hero_name_backdrop" aria-hidden="true">
          <div className="name_lockup">
            <m.span
              className="script_first_name"
              initial={{ opacity: 0, y: -42, rotate: -8, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, rotate: -3, filter: 'blur(0px)' }}
              transition={{ duration: 1.35, delay: 0.4, ease: cinematicEase }}
            >
              danielle
            </m.span>
            <m.span
              className="bold_last_name"
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: 'blur(18px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.45, delay: 0.6, ease: cinematicEase }}
            >
              soares
              <m.span
                className="doodle_sparkles_wrapper"
                initial={{ opacity: 0, scale: 0.2, rotate: -25, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
                transition={{ delay: 1.4, duration: 0.9, ease: cinematicPop }}
                aria-hidden="true"
              >
                <img
                  src={doodleSparkles}
                  alt=""
                  className="doodle_sparkles_svg"
                  loading="lazy"
                />
              </m.span>
            </m.span>
          </div>
        </div>

        {/* 5. Act III: The Centerpiece — Danielle Takes Center Stage */}
        <m.div
          className="hero_portrait_anchor"
          initial={{ opacity: 0, y: 70, scale: 0.91, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.85, ease: cinematicEase }}
        >
          <m.div
            className="portrait_glow_halo"
            initial={{ opacity: 0, scale: 0.65, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            transition={{ duration: 1.7, delay: 0.95, ease: cinematicSoftEase }}
            aria-hidden="true"
          />
          <img
            src={personalPhoto}
            alt="Danielle Soares"
            className="portrait_image"
            loading="eager"
          />
        </m.div>

        {/* 6. Act V: Hand-drawn Coding Speech Bubble Doodle */}
        <m.div
          className="doodle_coding_bubble_wrapper"
          initial={{ opacity: 0, scale: 0.4, rotate: 18, filter: 'blur(6px)' }}
          animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
          transition={{ delay: 2.05, duration: 0.95, ease: cinematicPop }}
          aria-hidden="true"
        >
          <img
            src={doodleCodingBubble}
            alt=""
            className="doodle_coding_bubble_svg"
            loading="lazy"
          />
        </m.div>

        {/* 7. Act IV: Left Panel — Narrative Storytelling Reveal */}
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
              loading="lazy"
            />
          </m.div>
        </m.div>

        {/* 8. Act V: Right Panel — Cascading Social Connection Pills */}
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

      {/* 9. Act VI: Scroll Indicator with scroll progress fade */}
      <m.div
        className="hero_center_scroll_wrapper"
        style={{ opacity: scrollOpacity }}
      >
        <m.a
          href="#about_me"
          className="hero_center_scroll"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.35, duration: 1.0, ease: cinematicEase }}
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