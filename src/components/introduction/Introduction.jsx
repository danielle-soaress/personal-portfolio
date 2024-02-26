import './Introduction.scss';
import PurpleButton from '../purpleButton/PurpleButton.jsx'
import ImageShape from '../../assets/images/Vector.png'
import ImageShape2 from '../../assets/images/Vector2.png'
import SocialMedias from '../socialMedias/SocialMedias';


function Introduction() {
    return (
    <div className="introduction_container">
        <div className="aside_nav">
            <a className="aside_a"><i className="bi bi-house"></i></a>
            <a className="aside_a"><i className="bi bi-person"></i></a>
            <a className="aside_a"><i className="bi bi-grid"></i></a>
            <a className="aside_a"><i class="bi bi-telephone"></i></a>
        </div>
        <div>
            <div className="main_content">
                <h2 className="apresentation_title">
                    Olá, eu sou a <span className="my_name">Danielle</span>!
                </h2>
                <p>
                    Estudante de Engenharia de Software na 
                    Universidade de Brasília (UnB) e entusiasta em programação 
                    full-stack.
                </p>
                <SocialMedias/>
                <br></br>
                <PurpleButton content="Fale comigo"/>
            </div>
        </div>
        <div className="right_image">
            <img src={ImageShape} className="shape1 shape_background_image"></img>
            <img src={ImageShape2} className="shape2 shape_background_image"></img>
        </div>
    </div>
    )
}

export default Introduction;