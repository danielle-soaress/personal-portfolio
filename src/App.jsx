import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Navbar from './components/navbar/Navbar.jsx'
import Introduction from './components/introduction/Introduction.jsx'
import AboutMe from './components/aboutMe/AboutMe.jsx'
import Portifolio from './components/portifolio/Portifolio.jsx'
import ContactMe from './components/contactMe/ContactMe.jsx'

function App() {
  const [count, setCount] = useState(0)

  return <div class="main_container">
    <header>
      <Navbar/>
    </header>
    <section id="introduction">
      <Introduction/>
    </section>
    <section id="about_me">
      <AboutMe/>
    </section>
    <section id="portifolio">
      <Portifolio/>
    </section>
    <section id="contact_me">
      <ContactMe/>
    </section>
  </div>
}

export default App;
