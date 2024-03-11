import React, {useState, useRef} from 'react'
import './navbar.scss'
import LogoWhite from '../../assets/images/logoBranca.png'
import LogoBlack from '../../assets/images/logoPreta.png'


const Navbar = () => {
    // ps: tenho que implementar essa função logo! (lightmode)
    const [light, setLight] = useState(true);
    const linksRef = useRef(null);
    const navbarRef = useRef(null)
    const logoRef = useRef(null)
    const [menu, setMenu] = useState(true);

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
            <a className="header_nav_link " onClick={actualSection} el="about" href="#about_me">Sobre</a>
            <a className="header_nav_link " onClick={actualSection} el="portfolio" href="#portifolio">Portfolio</a>
            <a className="header_nav_link " onClick={actualSection} el="contact" href="#contact_me">Contato</a>
            <i className="bi bi-brightness-high-fill" onClick={() => setLight(!light)}>
            </i>
        </nav>
        <i class="bi bi-list" onClick={openMenu}></i>
    </div>
    )
}

export default Navbar;