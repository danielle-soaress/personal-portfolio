import './Introduction.scss';
import PurpleButton from '../purpleButton/PurpleButton.jsx';
import SocialMedias from '../socialMedias/SocialMedias';
import { useTranslation } from 'react-i18next';
import "../../i18n";
import { actualSection } from '../navbar/Navbar.jsx';


function Introduction() {
    const {t} = useTranslation();
    return (
    <div className="introduction_container">
        <div className="aside_nav_fake"></div>
        <div>
            <div className="main_content">
                <h2 className="apresentation_title">
                    {t('introduction.title')} <span className="my_name">Danielle</span>!
                </h2>
                <p>
                    {t('introduction.description')}
                </p>
                <SocialMedias/>
                <br></br>
                <a class="button_anchor" onClick={actualSection} el="contact" href="/#contact_me"> {t('introduction.button')}</a>
            </div>
        </div>
        <div className="right_image">
            <div className="shape1 shape_background_image">
                <div className="shape2 shape_background_image">
                    <div className= "shape3 shape_background_image">
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Introduction;