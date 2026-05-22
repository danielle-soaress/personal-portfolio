import React, {useState, useRef} from 'react'
import './navbar.scss'
import FlowerIcon from '../../assets/images/flower_icon.svg'
import LogoWhite from '../../assets/images/logoBranca.png'
import LogoBlack from '../../assets/images/logoPreta.png'
import LanguageButton from '../languageButton/LanguageButton'
import { useTranslation } from 'react-i18next';
import "../../i18n";


export const actualSection = (e) => {
    let icons = document.querySelectorAll('.aside_nav_icon');
    console.log(icons);
    let ID = e.target.getAttribute('el');
    console.log(ID);

    for (let i = 0; i<icons.length; i++) {
        let classIcon = icons[i].getAttribute('class').split(' ')[0]
        
        if (classIcon == ID) {
            icons[i].style.color = (ID == "about" ? "#594AEB" : "white"); 
        } else {
            icons[i].style.color = (ID == "about" ? "black" : "#ffffff80"); 
        }
    }

}

const Navbar = () => {
    const mobileMenuContainer = useRef(null);
    const linksRef = useRef(null);
    const navbarRef = useRef(null)
    const logoRef = useRef(null)
    const [menu, setMenu] = useState(true);
    const {t} = useTranslation();

    const openMenu = (e) => {
        setMenu(prev => !prev)
        linksRef.current.style.display = `${menu? 'flex': 'none'}`;
        mobileMenuContainer.current.style.background = `${menu? '#181818': 'transparent'}`;
        e.target.style.color = `${menu? '#594AEB': 'white'}`;
        logoRef.current.setAttribute('src', `${menu? LogoBlack: LogoWhite}`)
        
    }

    return (
    <div className="navbar" ref={navbarRef}>
        <nav className="links" >
            <div className="icon-flood-container">
                <div className="icon-fill" style={{ maskImage: `url(${FlowerIcon})`, WebkitMaskImage: `url(${FlowerIcon})` }}></div>
                <img src={FlowerIcon} className="icon-base" alt="Flower Icon" />
            </div>
            <div className="nav_links">
                <a className="header_nav_link " onClick={actualSection} el="home" href="/#introduction"><i el="home" className="home aside_nav_icon bi bi-house"></i></a>
                <a className="header_nav_link " onClick={actualSection} el="about" href="/#about_me"><i el="about" className="about aside_nav_icon bi bi-person"></i></a>
                <a className="header_nav_link " onClick={actualSection} el="portfolio" href="/#portifolio"><i el="portfolio" className="portfolio aside_nav_icon bi bi-grid"></i></a>
                <a className="header_nav_link " onClick={actualSection} el="contact" href="/#contact_me"><i el="contact" className="contact aside_nav_icon bi bi-telephone"></i></a>
            </div>
            <LanguageButton />
        </nav>
        <div className="menu_mobile" ref={mobileMenuContainer}>
            <i className="menu_mobile_icon bi bi-list" onClick={openMenu}></i>
            <div className = "menu_mobile_links" ref={linksRef}>
                <a className="header_nav_link " onClick={actualSection} el="home" href="/#introduction">Home</a>
                <a className="header_nav_link " onClick={actualSection} el="about" href="/#about_me">Sobre</a>
                <a className="header_nav_link " onClick={actualSection} el="portfolio" href="/#portifolio">Portfolio</a>
                <a className="header_nav_link " onClick={actualSection} el="contact" href="/#contact_me">Contatos</a>
            </div>
        </div>
    </div>
    )
}

export default Navbar;