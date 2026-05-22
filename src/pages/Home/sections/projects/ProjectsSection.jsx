import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect} from "react";
import { useTranslation } from 'react-i18next';
import data from '../../../../assets/data/projects.json';
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
    const updatedProjects = data.slice(0,4).map((project) => ({
    ...project,
      description: i18n.language === 'en' ? project.descriptionEN : project.descriptionPT,
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
          imgSrc={project.imgSrc}
          imgAlt={project.imgAlt}
          title={project.title}
          description={project.description}
          demoLink={project.demoLink}
          gitLink={project.gitLink}
          techs={project.techs}
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
          <div className="projects-section-title">
              <h2>{t('portfolio.title')}</h2>
              <h3>
                {t('portfolio.subtitle.pt1')} <span>{t('portfolio.subtitle.highlight_1')}</span> {t('portfolio.subtitle.pt2')} <span>{t('portfolio.subtitle.highlight_2')}</span>
              </h3>
          </div>
          <motion.div className="cards-container" style={ deviceWidth <= 1024 ? '' : {x}}>
            {LoadProjects()}
            <div className="view-more">
              <h3>{t('portfolio.viewMore.title')}</h3>
              <p>{t('portfolio.viewMore.description')}</p>
              <a href="/projects"><PurpleButton text={t('portfolio.viewMore.button')} link="/home"></PurpleButton></a>
            </div>
          </motion.div>
        </div>
    </motion.div>
  );
}

export default ProjectsSection;