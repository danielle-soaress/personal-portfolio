import './ProjectCard.scss'
import PurpleButton from '../purpleButton/PurpleButton.jsx'

function ProjectCard(props) {

    let imgSrc = props.imgSrc ? props.imgSrc:null;
    let imgAlt = props.imgAlt ? props.imgAlt:null;
    let title = props.title ? props.title:null;
    let description = props.description ? props.description:null;
    let demoLink = props.demoLink ? props.demoLink:null;
    let gitLink = props.gitLink ? props.gitLink:null;
    let technologies = props.techs ? props.techs:null;

    function addTech (name) {
        return (
            <div key={name} className="tech">
                {name}
            </div>
        )
    }

    return (
        <div className="project_card_container">
            <img src={imgSrc} alt={imgAlt} className="card_image"></img>
            <div className="card_text">
                <div className="title_description">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="technologies_container">
                    {technologies.map((tech) => addTech(tech))}
                </div>
            </div>
            <div className="git_demo">
                <a href={gitLink} target="_blank" rel="noopener noreferrer">
                    <i className="link bi bi-github"></i>
                </a>
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    <i className="link bi bi-link-45deg"></i>
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;