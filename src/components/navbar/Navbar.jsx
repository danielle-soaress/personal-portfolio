import React, {useState} from 'react'
import './navbar.scss'
import Logo from '../../assets/images/Logo.png'


const Navbar = () => {
    // ps: tenho que implementar essa função logo! (lightmode)
    const [light, setLight] = useState(true);

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


    return (
    <div className="navbar">
        <img className="logo" src={Logo} alt="logo"></img>
        <nav className="links">
            <a className="header_nav_link " onClick={actualSection} el="home" href="#introduction">Home</a>
            <a className="header_nav_link " onClick={actualSection} el="about" href="#about_me">Sobre</a>
            <a className="header_nav_link " onClick={actualSection} el="portfolio" href="#portifolio">Portfolio</a>
            <a className="header_nav_link " onClick={actualSection} el="contact" href="#contact_me">Contato</a>
            <i className="bi bi-brightness-high-fill" onClick={() => setLight(!light)}>
            </i>
        </nav>
    </div>
    )
}

export default Navbar;