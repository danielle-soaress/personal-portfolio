import './ProjectCard.scss'

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
            <div className="tech">
                {name}
            </div>
        )
    }

    return (
        <div className="project_card_container">
            <img src={imgSrc} alt={imgAlt} class="card_image"></img>
            <div className="card_text">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="technologies_container">
                    {technologies.map((tech) => addTech(tech))}
                </div>
                <div className="git_demo">
                    <div className="link">
                        <a href={gitLink} class="git_demo_text" target="_blank">
                            <i class="bi bi-github"></i>
                            Código
                        </a>
                    </div>
                    <div className="link">
                        <a href={demoLink} class="git_demo_text" target="_blank">
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