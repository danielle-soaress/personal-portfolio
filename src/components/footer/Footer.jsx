import './Footer.scss'
import Logo from '../../assets/images/Logo.png'
import SocialMedias from '../socialMedias/SocialMedias';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <div className="footer_container">
            <div className="left_side">
                <img className="footer_logo" src={Logo}></img>
                <SocialMedias showRectangle={true}/>
            </div>
            <div className="copyrights">
                <p>{t('footer.copyright')} </p>
                <img className="cop_logo" src={Logo}></img>
            </div>
        </div>
    );
}

export default Footer;