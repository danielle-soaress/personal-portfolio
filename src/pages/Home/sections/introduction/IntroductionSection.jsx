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

function IntroductionSection() {
  const containerRef = useRef(null);
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

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
        <div className="hero_backdrop_glow" aria-hidden="true" />
        <img
          src={flowerOne}
          className="hero_bg_flower hero_flower_top_left_large"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          src={flowerTwo}
          className="hero_bg_flower hero_flower_yellow_mid"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          src={flowerThree}
          className="hero_bg_flower hero_flower_top_left_tiny"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          src={flowerTwo}
          className="hero_bg_flower hero_flower_top_right_large"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          src={flowerOne}
          className="hero_bg_flower hero_flower_top_right_small"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          src={flowerTwo}
          className="hero_bg_flower hero_flower_mid_left_small"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          src={flowerThree}
          className="hero_bg_flower hero_flower_mid_right_medium"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          src={flowerThree}
          className="hero_bg_flower hero_flower_bottom_left_medium"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          src={flowerOne}
          className="hero_bg_flower hero_flower_bottom_right_medium"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          src={flowerTwo}
          className="hero_bg_flower hero_flower_bottom_inner_micro"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />

        <div className="doodle_coffee_wrapper" aria-hidden="true">
          <img
            src={doodleCoffee}
            alt=""
            className="doodle_coffee_svg"
            loading="lazy"
          />
        </div>

        <m.div
          className="hero_name_backdrop"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <div className="name_lockup">
            <span className="script_first_name">danielle</span>
            <span className="bold_last_name">
              soares
              <span className="doodle_sparkles_wrapper" aria-hidden="true">
                <img
                  src={doodleSparkles}
                  alt=""
                  className="doodle_sparkles_svg"
                  loading="lazy"
                />
              </span>
            </span>
          </div>
        </m.div>

        <m.div
          className="hero_portrait_anchor"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="portrait_glow_halo" aria-hidden="true" />
          <img
            src={personalPhoto}
            alt="Danielle Soares"
            className="portrait_image"
            loading="eager"
          />
        </m.div>

        <div className="doodle_coding_bubble_wrapper" aria-hidden="true">
          <img
            src={doodleCodingBubble}
            alt=""
            className="doodle_coding_bubble_svg"
            loading="lazy"
          />
        </div>

        <m.div
          className="hero_left_panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="doodle_arrow_wrapper" aria-hidden="true">
            <img
              src={doodleArrow}
              alt=""
              className="doodle_arrow_svg"
              loading="lazy"
            />
          </div>

          <h2 className="hero_role_heading">
            {t('introduction.role')}
          </h2>

          <p className="hero_pitch_text">
            {t('introduction.description')}
          </p>

          <a href="#contact_me" className="hero_cta_pill_button">
            <span>{t('introduction.button')}</span>
            <BsArrowRight className="cta_arrow_icon" />
          </a>
        </m.div>

        <m.div
          className="hero_right_panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero_pill_stack">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero_social_pill"
            >
              <BsGithub className="pill_icon" />
              <span className="pill_label">GitHub</span>
              <BsArrowUpRight className="pill_arrow" />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero_social_pill"
            >
              <BsLinkedin className="pill_icon" />
              <span className="pill_label">LinkedIn</span>
              <BsArrowUpRight className="pill_arrow" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className={`hero_social_pill ${copied ? 'hero_social_pill--copied' : ''}`}
              title={EMAIL}
              aria-label={t('social.copyEmailAria') || 'Copiar email'}
            >
              {copied ? <BsCheck2 className="pill_icon copied_icon" /> : <BsEnvelope className="pill_icon" />}
              <span className="pill_label">{copied ? emailCopiedText : 'Email'}</span>
              <BsArrowUpRight className="pill_arrow" />
            </button>

          </div>
        </m.div>
      </div>

      <m.a
        href="#about_me"
        className="hero_center_scroll"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ opacity }}
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
    </section>
  );
}

export default IntroductionSection;