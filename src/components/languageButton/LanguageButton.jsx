import './LanguageButton.scss';
import langIcon from '../../assets/images/lang_icon.png';
import {useState, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import "../../i18n";


function LanguageButton() {
    const [open, setOpen] = useState(false)
    const [lang, setLang] = useState('pt')
    const {t, i18n} = useTranslation();
    
    const changeLanguage = (lng) => {
        setLang(`${lng}`)
        i18n.changeLanguage(lng);
    }

    return (
    <div className="lang_button" onClick={() => setOpen(!open)}>
        <img className="lang_img" src={langIcon} alt="Language icon"></img>
        <div className={open? "lang_options visible" : "lang_options"}>
            <span onClick={() => changeLanguage('pt')} className={lang == "pt" ? "lang_options_1 .selected" : "lang_options_1"}>PT</span>
            <span onClick={() => changeLanguage('en')} className={lang == "en" ? "lang_options_2 .selected" : "lang_options_2"}>EN</span>
        </div>
    </div>
    )
}

export default LanguageButton;