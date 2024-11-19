
import './ProjectCard_v2.scss'

function ProjectCardV2(props) {

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
        <div className="card_container">
            <img src={imgSrc} alt={imgAlt} class="card_img"></img>
            <div className="card_txt">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="techs_container">
                    {technologies.map((tech) => addTech(tech))}
                </div>
                <div className="links">
                    <div className="link_txt">
                        <a href={gitLink} target="_blank">
                            <i class="bi bi-github"></i>
                            Código
                        </a>
                    </div>
                    {   demoLink? 
                        <div className="link_txt">
                            <a href={demoLink} target="_blank">
                                <i class="bi bi-link-45deg"></i>
                                Live Demo
                            </a>
                        </div>
                        : <span></span>
                        }
                </div>
            </div>
        </div>
    );
}

export default ProjectCardV2;