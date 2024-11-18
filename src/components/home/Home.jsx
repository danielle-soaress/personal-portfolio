import './Home.scss'
import Navbar from '../navbar/Navbar.jsx'
import Introduction from '../introduction/Introduction.jsx'
import AboutMe from '../aboutMe/AboutMe.jsx'
import Portifolio from '../portifolio/Portifolio.jsx'
import ContactMe from '../contactMe/ContactMe.jsx'
import Footer from '../footer/Footer.jsx'
import AsideNav from '../asideNav/AsideNav.jsx'

import React from 'react';

function Home() {
  return (
      <div class="main_container">
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
  )
}

export default Home;
