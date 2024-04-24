import React, {useState, useRef} from 'react'
import './navbar.scss'
import LogoWhite from '../../assets/images/logoBranca.png'
import LogoBlack from '../../assets/images/logoPreta.png'
import LanguageButton from '../languageButton/LanguageButton'
import { useTranslation } from 'react-i18next';
import "../../i18n";

const Navbar = () => {
    const linksRef = useRef(null);
    const navbarRef = useRef(null)
    const logoRef = useRef(null)
    const [menu, setMenu] = useState(true);
    const {t} = useTranslation();

    const actualSection = (e) => {
        let icons = document.querySelectorAll('.aside_nav_icon');
        let ID = e.target.getAttribute('el');

        for (let i = 0; i<icons.length; i++) {
            let classIcon = icons[i].getAttribute('class').split(' ')[0]
            
            if (classIcon == ID) {
                icons[i].style.color = (ID == "about" ? "#594AEB" : "white"); 
            } else {
                icons[i].style.color = (ID == "about" ? "black" : "#ffffff80"); 
            }
        }

    }

    const openMenu = (e) => {
        linksRef.current.style.display = `${menu? 'flex': 'none'}`;
        e.target.style.color = `${menu? '#594AEB': 'white'}`;
        logoRef.current.setAttribute('src', `${menu? LogoBlack: LogoWhite}`)
        setMenu(prev => !prev)
    }


    return (
    <div className="navbar" ref={navbarRef}>
        <img className="logo" ref={logoRef} src={LogoWhite} alt="logo"></img>
        <nav className="links" ref={linksRef}>
            <a className="header_nav_link " onClick={actualSection} el="home" href="#introduction">Home</a>
            <a className="header_nav_link " onClick={actualSection} el="about" href="#about_me">{t('nav.link_2')}</a>
            <a className="header_nav_link " onClick={actualSection} el="portfolio" href="#portifolio">{t('nav.link_3')}</a>
            <a className="header_nav_link " onClick={actualSection} el="contact" href="#contact_me">{t('nav.link_4')}</a>
            <LanguageButton />
        </nav>
        <i class="bi bi-list" onClick={openMenu}></i>
    </div>
    )
}

export default Navbar;