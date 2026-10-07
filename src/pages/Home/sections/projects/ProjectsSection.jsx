import { m, useTransform, useScroll } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import data from '../../../../data/projects.json';
import { getProjectImage } from '../../../../data/projectImages.js';
import ProjectCard from '../../../../components/projectCard/ProjectCard.jsx';
import PurpleButton from '../../../../components/purpleButton/PurpleButton.jsx';
import "../../../../i18n.js";
import "./ProjectsSection.scss";

import doodleSparkles from '../../../../assets/images/doodles/doodle_sparkles.svg';
import doodleSquiggly from '../../../../assets/images/doodles/doodle_squiggly.svg';

function ProjectsSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  const { i18n, t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [deviceWidth, setDeviceWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const [scrollDistance, setScrollDistance] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth * 1.8 : 2000
  );

  useEffect(() => {
    const updatedProjects = [...data]
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 4)
      .map((project) => ({
        ...project,
        description: i18n.language === 'en'
          ? project.shortDescriptionEN
          : project.shortDescriptionPT,
      }));
    setProjects(updatedProjects);
  }, [i18n.language]);

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isEn = (i18n.language || 'pt').startsWith('en');

  // Track the exact horizontal scroll distance needed to reveal the view-more card
  useEffect(() => {
    const updateDistance = () => {
      if (cardsRef.current) {
        const total = cardsRef.current.scrollWidth;
        const viewport = window.innerWidth;
        const diff = Math.max(0, total - viewport);
        setScrollDistance(diff);
      }
    };

    updateDistance();

    let observer;
    if (typeof ResizeObserver !== 'undefined' && cardsRef.current) {
      observer = new ResizeObserver(() => {
        updateDistance();
      });
      observer.observe(cardsRef.current);
    }

    window.addEventListener('resize', updateDistance);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('resize', updateDistance);
    };
  }, [projects]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Reaches the view-more card at 0.88 scroll progress and stays resting there through 1.0
  const x = useTransform(scrollYProgress, [0, 0.88], [0, -scrollDistance], {
    clamp: true,
  });

  const LoadProjects = () => {
    return projects.map((project) => (
      <ProjectCard
        key={project.id}
        imgSrc={getProjectImage(project.imgKey)}
        isDefaultImage={!project.imgKey}
        imgAlt={project.imgAlt}
        title={project.title}
        description={project.description}
        demoLink={project.demoLink}
        gitLink={project.gitLink}
        techs={project.techs}
        category={project.category}
        complexity={project.complexity}
        imageAlignRow={project.imageAlignRow}
        imageAlignColumn={project.imageAlignColumn}
      />
    ));
  };

  return (
    <m.div id="portifolio" exit={{ opacity: 0 }} ref={containerRef} className="projects-section">
      <div className="projects-container">
        <m.div
          className="projects-section-title"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="header-title-container">
            <h2>{t('portfolio.title')}</h2>
            <span className="header-sparkle-doodle" aria-hidden="true">
              <img src={doodleSparkles} alt="" width="24" height="24" loading="lazy" decoding="async" />
            </span>
          </div>

          <div className="header-subtitle-container">
            <h3>
              {t('portfolio.subtitle.pt1')}{' '}
              <span className="handdrawn-script">{t('portfolio.subtitle.highlight_1')}</span>{' '}
              {t('portfolio.subtitle.pt2')}{' '}
              <span className="handdrawn-script">{t('portfolio.subtitle.highlight_2')}</span>
            </h3>
            <span className="header-squiggly-doodle" aria-hidden="true">
              <img src={doodleSquiggly} alt="" width="120" height="15" loading="lazy" decoding="async" />
            </span>
          </div>
        </m.div>

        <m.div ref={cardsRef} className="cards-container" style={deviceWidth <= 1024 ? undefined : { x }}>
          {LoadProjects()}
          <div className="view-more">
            <span className="view-more-tag">
              ✦ {isEn ? '// more projects' : '// mais criações'}
            </span>
            <h3>{t('portfolio.viewMore.title')}</h3>
            <p>{t('portfolio.viewMore.description')}</p>
            <PurpleButton text={t('portfolio.viewMore.button')} link="/portifolio" />
          </div>
        </m.div>
      </div>
    </m.div>
  );
}

export default ProjectsSection;