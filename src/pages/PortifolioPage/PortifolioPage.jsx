import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './PortifolioPage.scss';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import ProjectCard from '../../components/projectCard/ProjectCard.jsx';
import data from '../../data/projects.json';
import '../../i18n';

const CATEGORY_SLUGS = {
  Fullstack: 'fullstack',
  Mobile: 'mobile',
  Compilers: 'compilers',
  'Software Engineering': 'softwareEngineering',
  Backend: 'backend',
  Frontend: 'frontend',
};

const CATEGORY_ORDER = [
  'Fullstack',
  'Mobile',
  'Software Engineering',
  'Backend',
  'Frontend',
  'Compilers',
];

function PortifolioPage() {
  const { i18n, t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = useMemo(() => (
    [...data]
      .sort((a, b) => b.relevance - a.relevance)
      .filter((project, index, arr) => (
        arr.findIndex((item) => item.gitLink === project.gitLink) === index
      ))
      .map((project) => ({
        ...project,
        description: i18n.language === 'en'
          ? project.descriptionEN
          : project.descriptionPT,
      }))
  ), [i18n.language]);

  const categories = useMemo(() => (
    CATEGORY_ORDER.filter((category) => projects.some((project) => project.category === category))
  ), [projects]);

  const filteredProjects = useMemo(() => (
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory)
  ), [projects, activeCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main_portfolio_page_container">
      <header className="portfolio_page_header_bar">
        <Navbar variant="horizontal" />
      </header>

      <section id="all_projects">
        <div className="portfolio_page_blur" />
        <div className="portfolio_page_content">
          <motion.div
            className="portfolio_page_header"
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <h1>{t('portfolioPage.title')}</h1>
            <p>{t('portfolioPage.subtitle')}</p>
            <span className="portfolio_page_count">
              {t('portfolioPage.projectCount', { count: filteredProjects.length })}
            </span>
          </motion.div>

          <div className="portfolio_page_filters">
            <button
              type="button"
              className={`portfolio_page_filter ${activeCategory === 'all' ? 'portfolio_page_filter--active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              {t('portfolioPage.allCategories')}
            </button>
            {categories.map((category) => {
              const slug = CATEGORY_SLUGS[category];

              return (
                <button
                  key={category}
                  type="button"
                  className={`portfolio_page_filter ${activeCategory === category ? 'portfolio_page_filter--active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {t(`portfolio.categories.${slug}`)}
                </button>
              );
            })}
          </div>

          {filteredProjects.length > 0 ? (
            <motion.div
              key={activeCategory}
              className="portfolio_page_cards_grid"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="portfolio_page_card_wrapper"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                >
                  <ProjectCard
                    imgSrc={project.imgSrc}
                    imgAlt={project.imgAlt}
                    title={project.title}
                    description={project.description}
                    demoLink={project.demoLink}
                    gitLink={project.gitLink}
                    techs={project.techs}
                    category={project.category}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="portfolio_page_empty">{t('portfolioPage.emptyState')}</p>
          )}
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PortifolioPage;
