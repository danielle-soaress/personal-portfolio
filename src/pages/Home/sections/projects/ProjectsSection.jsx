import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect} from "react";
import { useTranslation } from 'react-i18next';
import data from '../../../../data/projects.json';
import { getProjectImage } from '../../../../data/projectImages.js';
import ProjectCard from '../../../../components/projectCard/ProjectCard.jsx'
import PurpleButton from '../../../../components/purpleButton/PurpleButton.jsx';
import "../../../../i18n.js";
import "./ProjectsSection.scss";

function ProjectsSection() {
  const containerRef = useRef(null);

  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [deviceWidth, setdeviceWidth] = useState(window.innerWidth);

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
      setdeviceWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10", "-40%"]);

  return (
    <motion.div id="portifolio" exit={{opacity: 0}} ref={containerRef} className="projects-section">
        <div className="projects-container">
          <motion.div
            className="projects-section-title"
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
              <h2>{t('portfolio.title')}</h2>
              <h3>
                {t('portfolio.subtitle.pt1')} <span>{t('portfolio.subtitle.highlight_1')}</span> {t('portfolio.subtitle.pt2')} <span>{t('portfolio.subtitle.highlight_2')}</span>
              </h3>
          </motion.div>
          <motion.div className="cards-container" style={ deviceWidth <= 1024 ? '' : {x}}>
            {LoadProjects()}
            <div className="view-more">
              <h3>{t('portfolio.viewMore.title')}</h3>
              <p>{t('portfolio.viewMore.description')}</p>
              <a href="/portifolio"><PurpleButton text={t('portfolio.viewMore.button')} link="/portifolio"></PurpleButton></a>
            </div>
          </motion.div>
        </div>
    </motion.div>
  );
}

export default ProjectsSection;