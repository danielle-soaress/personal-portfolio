import './AsideNav.scss';
import {useState} from 'react';

function AsideNav() {

    const [windowWidth, setwindowWidth] = useState(window.innerWidth);
    
    window.onresize = () => {
       setwindowWidth(window.innerWidth)
    }
    

    const actualSection = (e) => {
        let icons = document.querySelectorAll('.aside_nav_icon');

        let ID = e.target.getAttribute('el');
        
        if (ID == "about") {
            for (let i = 0; i<icons.length; i++) {
                icons[i].style.color = "black";
            }
            e.target.style.color= "#594AEB";
        } else {
            for (let i = 0; i<icons.length; i++) {
                icons[i].style.color = "#ffffff80"
            }
            e.target.style.color= "white";
        }


        if (windowWidth <= 1100 && e.target.getAttribute('el') == 'contact') {
            e.target.style.gap= "12vh";
        }
    }

    return (
        <div className="aside_nav">
            <a el="homeIcon" href="#introduction" onClick={actualSection} className="aside_a">
                <i el="home" className="home aside_nav_icon bi bi-house"></i>
                </a>
            <a el="aboutIcon" href="#about_me" onClick={actualSection} className="aside_a">
                <i el="about" className="about aside_nav_icon bi bi-person"></i>
                </a>
            <a el="portfolioIcon" href="#portifolio" onClick={actualSection} className="aside_a">
                <i el="portfolio" className="portfolio aside_nav_icon bi bi-grid"></i>
                </a>
            <a el="contactIcon" href="#contact_me" onClick={actualSection} className="aside_a">
                <i el="contact" className="contact aside_nav_icon bi bi-telephone"></i>
                </a>
        </div>
    )
}

export default AsideNav;