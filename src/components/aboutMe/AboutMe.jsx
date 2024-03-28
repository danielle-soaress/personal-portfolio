import './AboutMe.scss'
import javaIcon from '../../assets/images/java_icon.png'
import figmaIcon from '../../assets/images/figma_icon.png'
import reactIcon from '../../assets/images/react_icon.png'
import jsIcon from '../../assets/images/js_icon.png'
import cssIcon from '../../assets/images/css_icon.png'
import htmlIcon from '../../assets/images/html_icon.png'
import scssIcon from '../../assets/images/scss_icon.png'
import SoftSkill from '../softSkills/softSkill'

function AboutMe() {
    return (
        <div className="about_me_container">
            <h2>Sobre mim</h2>
            <p>Olá! Me chamo Danielle Soares e sou estudante de Engenharia de Software na 
                Universidade de Brasília (UnB). Apaixonada por desenvolvimento de software, já
                explorei áreas como o desenvolvimento web e mobile.
                Como uma estudante assídua, estou sempre em busca de oportunidades para aprimorar meus conhecimentos e explorar novas áreas 
                e tecnologias.</p>
            <h3>Tecnologias</h3>
            <div className="techs_container">
                <img src={javaIcon} alt="Java logo" className="icon java_icon"></img>
                <img src={jsIcon} alt="JavaScript logo" className="icon js_icon"></img>
                <img src={reactIcon} alt="React logo" className="icon react_icon"></img>
                <img src={htmlIcon} alt="HTML logo" className="icon html_icon"></img>
                <img src={cssIcon} alt="CSS logo" className="icon css_icon"></img>
                <img src={figmaIcon} alt="Figma logo" className="icon figma_icon"></img>
                <img src={scssIcon} alt="Figma logo" className="icon figma_icon"></img>
            </div>
            <h3>Soft Skills</h3>
            <div className="soft_skills">
                <i class="bi bi-caret-left-fill"></i>
                <div className="carousel_1">
                    <SoftSkill
                    iconClass="icon bi-book"
                    title="Aprendizado contínuo"
                    desc="Diante do constante avanço das tecnologias, valorizo o estudo 
                    contínuo, não só para aprender novas ferramentas, mas também aprimorar 
                    habilidades adquiridas."
                    />
                    <SoftSkill
                    iconClass="icon bi-card-checklist"
                    title="Organização"
                    desc="Um sistema bem estruturado é, sem dúvidas, mais eficiente. Por isso, 
                    priorizo o planejamento e a organização durante todas as etapas 
                    de desenvolvimento."
                    />
                </div>
                <div className="carousel_2">
                    <SoftSkill
                    iconClass="icon bi-code-slash"
                    title="Flexibilidade"
                    desc="Estou preparada para lidar com  mudanças e novos desafios. Seja no 
                    front-end ou back-end, sou capaz de me adaptar às necessidades de 
                    cada projeto."
                    />
                    <SoftSkill
                    iconClass="icon bi-chat-dots"
                    title="Cooperatividade"
                    desc="A cooperatividade e a comunicação são indispensáveis para o trabalho 
                    colaborativo. Acredito que o trabalho em equipe promove o crescimento 
                    mútuo.  "
                    />
                </div>
                <i class="bi bi-caret-left-fill"></i>
            </div>
        </div>
    )
}

export default AboutMe;