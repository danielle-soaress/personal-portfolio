import React, {useState} from 'react'
import './navbar.scss'
import Logo from '../../assets/images/Logo.png'


const Navbar = () => {
    // ps: tenho que implementar essa função logo! (lightmode)
    const [light, setLight] = useState(true);

return (
    <div className="navbar">
        <img className="logo" src={Logo} alt="logo"></img>
        <nav className="links">
            <a href="">Home</a>
            <a href="#about_me">Sobre</a>
            <a href="">Portfolio</a>
            <a href="">Contato</a>
            <i className="bi bi-brightness-high-fill" onClick={() => setLight(!light)}>
            </i>
        </nav>
    </div>
)
}

export default Navbar;