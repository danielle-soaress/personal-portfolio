import './AboutMe.scss'
import javaIcon from '../../assets/images/java_icon.png'
import figmaIcon from '../../assets/images/figma_icon.png'
import reactIcon from '../../assets/images/react_icon.png'
import jsIcon from '../../assets/images/js_icon.png'
import cssIcon from '../../assets/images/css_icon.png'
import htmlIcon from '../../assets/images/html_icon.png'

function AboutMe() {
    return (
        <div className="about_me_container">
            <h2>Sobre mim</h2>
            <h3>Principais habilidades</h3>
            <div className="habilities_container">
                <img src={htmlIcon} alt="HTML logo" className="icon html_icon"></img>
                <img src={cssIcon} alt="CSS logo" className="icon css_icon"></img>
                <img src={jsIcon} alt="JavaScript logo" className="icon js_icon"></img>
                <img src={reactIcon} alt="React logo" className="icon react_icon"></img>
                <img src={figmaIcon} alt="Figma logo" className="icon figma_icon"></img>
                <img src={javaIcon} alt="Java logo" className="icon java_icon"></img>
            </div>
        </div>
    )
}

export default AboutMe;