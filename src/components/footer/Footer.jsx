import './Footer.scss'
import Logo from '../../assets/images/Logo.png'
import SocialMedias from '../socialMedias/SocialMedias';

function Footer() {
    return (
        <div className="footer_container">
            <div class="left_side">
                <img className="footer_logo" src={Logo}></img>
                <SocialMedias/>
            </div>
            <div className="copyrights">
                <p>Copyrights © 2024 - Developed by </p>
                <img className="cop_logo" src={Logo}></img>
            </div>
        </div>
    );
}

export default Footer;