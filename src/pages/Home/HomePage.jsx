import './HomePage.scss'
import Navbar from '../../components/navbar/Navbar.jsx'
import IntroductionSection from './sections/introduction/IntroductionSection.jsx'
import AboutMeSection from './sections/aboutMe/AboutMeSection.jsx';
import SkillsSection from './sections/skills/SkillsSection.jsx'
import ContactMeSection from './sections/contactMe/ContactMeSection.jsx'
import ProjectsSection from './sections/projects/ProjectsSection.jsx' 
import ExperienceSection from './sections/experience/ExperienceSection.jsx'
import {useRef} from 'react';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const containerRef = useRef(null);
  const {t} = useTranslation();

  return (
    <div ref={containerRef} className="main">
    <Navbar/>
      <div className="main_container">
        <IntroductionSection/>
        <AboutMeSection/>
        <ExperienceSection/>
        <ProjectsSection/>
        <SkillsSection/>
        <ContactMeSection/>
        {/* <Footer/> */}
      </div>
    </div>
    
  )
}

export default HomePage;
