import React, {useState} from 'react'
import './navbar.scss'


const Navbar = () => {
    // ps: tenho que implementar essa função logo! (lightmode)
    const [light, setLight] = useState(true);

return (
    <div className="navbar">
        <div className="logo">
            <h2>Danielle Soares</h2>
        </div>
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