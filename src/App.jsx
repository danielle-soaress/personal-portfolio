import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Navbar from './components/navbar/Navbar.jsx'
import Introduction from './components/introduction/Introduction.jsx'
import AboutMe from './components/aboutMe/AboutMe.jsx'
import Portifolio from './components/portifolio/Portifolio.jsx'
import ContactMe from './components/contactMe/ContactMe.jsx'
import Footer from './components/footer/Footer.jsx'

import AsideNav from './components/asideNav/AsideNav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return <div class="main_container">
    <header class="container">
      <Navbar/>
    </header>
    <AsideNav/>
    <section id="introduction" class="container">
      <Introduction/>
    </section>
    <section id="about_me" class="container">
      <AboutMe/>
    </section>
    <section id="portifolio" class="container">
      <Portifolio/>
    </section>
    <section id="contact_me" class="container">
      <ContactMe/>
    </section>
    <section id="footer">
      <Footer/>
    </section>
  </div>
}

export default App;
