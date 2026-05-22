import React, {useEffect, useState, useRef} from 'react'
import './navbar.scss'
import FlowerIcon from '../../assets/images/flower_icon.svg'
import LogoWhite from '../../assets/images/logoBranca.png'
import LogoBlack from '../../assets/images/logoPreta.png'
import LanguageButton from '../languageButton/LanguageButton'
import { useTranslation } from 'react-i18next';
import "../../i18n";


const navItems = [
    { id: "introduction", labelKey: "nav.link_1", icon: "bi bi-house" },
    { id: "about_me", labelKey: "nav.link_2", icon: "bi bi-person" },
    { id: "portifolio", labelKey: "nav.link_3", icon: "bi bi-grid" },
    { id: "contact_me", labelKey: "nav.link_4", icon: "bi bi-telephone" },
];

const Navbar = () => {
    const mobileMenuContainer = useRef(null);
    const linksRef = useRef(null);
    const navbarRef = useRef(null)
    const logoRef = useRef(null)
    const [menu, setMenu] = useState(true);
    const [activeSection, setActiveSection] = useState(navItems[0].id);
    const {t} = useTranslation();

    useEffect(() => {
        const updateActiveSection = () => {
            const referencePoint = window.innerHeight * 0.4;
            const currentSection = navItems.reduce((current, item) => {
                const section = document.getElementById(item.id);

                if (!section) return current;

                const { top } = section.getBoundingClientRect();

                if (top <= referencePoint) {
                    return item.id;
                }

                return current;
            }, navItems[0].id);

            setActiveSection(currentSection);
        };

        updateActiveSection();
        window.addEventListener("scroll", updateActiveSection, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    const scrollToSection = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);

        if (!section) return;

        setActiveSection(sectionId);
        section.scrollIntoView({ behavior: "auto", block: "start" });
    };

    const openMenu = (e) => {
        setMenu(prev => !prev)
        linksRef.current.style.display = `${menu? 'flex': 'none'}`;
        mobileMenuContainer.current.style.background = `${menu? 'rgba(24, 24, 24, 0.9)': 'transparent'}`;
        e.target.style.color = `${menu? '#594AEB': 'white'}`;
        logoRef.current.setAttribute('src', `${menu? LogoBlack: LogoWhite}`)
        
    }

    return (
    <div className="navbar" ref={navbarRef}>
        <nav className="links" >
            <div className="icon-flood-container">
                <div className="icon-fill" style={{ maskImage: `url(${FlowerIcon})`, WebkitMaskImage: `url(${FlowerIcon})` }}></div>
                <img src={FlowerIcon} className="icon-base" alt={t('nav.logoAlt')} />
            </div>
            <div className="nav_links">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        className={`header_nav_link ${activeSection === item.id ? "active" : ""}`}
                        href={`#${item.id}`}
                        onClick={(event) => scrollToSection(event, item.id)}
                        aria-label={t(item.labelKey)}
                    >
                        <i className={`aside_nav_icon ${item.icon}`}></i>
                    </a>
                ))}
            </div>
            <LanguageButton />
        </nav>
        <div className="menu_mobile" ref={mobileMenuContainer}>
            <i className="menu_mobile_icon bi bi-list" onClick={openMenu}></i>
            <div className = "menu_mobile_links" ref={linksRef}>
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        className={`header_nav_link ${activeSection === item.id ? "active" : ""}`}
                        href={`#${item.id}`}
                        onClick={(event) => scrollToSection(event, item.id)}
                    >
                        {t(item.labelKey)}
                    </a>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Navbar;