import './ProjectCard.scss'
import PurpleButton from '../purpleButton/PurpleButton'

function ProjectCard(props) {

    let technologies = props.techs.split(' ');

    function addTech (name) {
        return (
            <div className="tech">
                {name}
            </div>
        )
    }

    return (
        <div className="project_card_container">
            <img src={props.imgSrc} alt={props.imgAlt} class="card_image"></img>
            <div className="card_text">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div className="technologies_container">
                    {technologies.map((tech) => addTech(tech))}
                </div>
                <div className="git_demo">
                    <div className="link">
                        <a href={props.gitLink} class="git_demo_text" target="_blank">
                            <i class="bi bi-github"></i>
                            Código
                        </a>
                    </div>
                    <div className="link">
                        <a href={props.demoLink} class="git_demo_text" target="_blank">
                            <i class="bi bi-link-45deg"></i>
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;