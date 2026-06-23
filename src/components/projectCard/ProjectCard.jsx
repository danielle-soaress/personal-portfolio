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

const IMAGE_ALIGN_MAP = {
  left: 'left center',
  center: 'center center',
  right: 'right center',
};

function ProjectCard({
  imgSrc,
  imgAlt,
  isDefaultImage = false,
  imageAlignRow,
  imageAlignColumn,
  title,
  description,
  demoLink,
  gitLink,
  techs = [],
  category,
}) {
  const { t } = useTranslation();
  const categorySlug = CATEGORY_SLUGS[category] ?? 'fullstack';
  const imageStyle = isDefaultImage
    ? undefined
    : {
        '--img-position-row': IMAGE_ALIGN_MAP[imageAlignRow] ?? '10% 0%',
        '--img-position-column': IMAGE_ALIGN_MAP[imageAlignColumn] ?? '10% 0%',
      };

  return (
    <div className="project_card_container">
      <img
        src={imgSrc}
        alt={imgAlt}
        style={imageStyle}
        className={`card_image${isDefaultImage ? ' card_image--default' : ''}`}
      />
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
