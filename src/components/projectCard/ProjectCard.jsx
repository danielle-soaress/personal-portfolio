import { useTranslation } from 'react-i18next';
import './ProjectCard.scss';

const CATEGORY_SLUGS = {
  Fullstack: 'fullstack',
  Mobile: 'mobile',
  Compilers: 'compilers',
  'Software Engineering': 'softwareEngineering',
  Backend: 'backend',
  Frontend: 'frontend',
};

function ProjectCard({
  imgSrc,
  imgAlt,
  title,
  description,
  demoLink,
  gitLink,
  techs = [],
  category,
}) {
  const { t } = useTranslation();
  const categorySlug = CATEGORY_SLUGS[category] ?? 'fullstack';

  return (
    <div className="project_card_container">
      <img src={imgSrc} alt={imgAlt} className="card_image" />
      <div className="card_text">
        <div className="title_description">
          <div className="card_meta">
            <span className="project_category">
              {t(`portfolio.categories.${categorySlug}`)}
            </span>
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="stack_section">
          <div className="technologies_container">
            {techs.map((tech) => (
              <div key={tech} className="tech">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="git_demo">
        {gitLink && (
          <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <i className="link bi bi-github" />
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <i className="link bi bi-link-45deg" />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
