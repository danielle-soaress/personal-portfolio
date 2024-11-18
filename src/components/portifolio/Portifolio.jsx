import {useState, useEffect} from "react"
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './Portifolio.scss'
import ProjectCard from '../projectCard/ProjectCard.jsx'
import PurpleButton from '../purpleButton/PurpleButton.jsx'
import { useTranslation } from 'react-i18next';
import "../../i18n";
import data from '../../assets/data/projects.json'; 
import {getProjectsRelevance} from '../PortifolioPage/PortifolioPage';

function Portifolio() {
    const [slidesPerView, setSlidesPerView] = useState(3)
    const {t, i18n} = useTranslation();
    const [projects, setProjects] = useState([...data]);

    window.addEventListener('resize', () => {
        slidesPerViewDefiner();
    })

    useEffect(() => {
        slidesPerViewDefiner();
        getProjectsRelevance();
    }, [])

    useEffect(() => {
        const updatedProjects = data.map((project) => ({
            ...project,
            description: i18n.language === 'en' ? project.shortDescriptionEN : project.shortDescriptionPT,
        }));
        setProjects(updatedProjects);
    }, [i18n.language]);


    const slidesPerViewDefiner = () => {
        if (window.innerWidth > 1890) {
            setSlidesPerView(3)
        } else if (window.innerWidth < 1890 && window.innerWidth > 1250) {
            setSlidesPerView(2)
        } else {
            setSlidesPerView(1)
        }
    }


    const loadProjects = () => {
        return projects.slice(0, slidesPerView).map((project, index) => (
            <ProjectCard 
                                imgSrc={projects[index].imgSrc}
                                imgAlt={projects[index].imgAlt}
                                title={projects[index].title}
                                description={projects[index].description}
                                demoLink={projects[index].demoLink}
                                gitLink={projects[index].gitLink}
                                techs={projects[index].techs}
                            />
        ));
    };



    return (
        <div className="portifolio_container">
            <h2>{t('portfolio.title')}</h2>
            <div className="carousel_container">
            {loadProjects()}
            </div>
            <a class="button_anchor" onClick={() => window.location.href = '/portifolio'}>
                <PurpleButton content={t('portfolio.button')} >
                    </PurpleButton>
            </a>
        </div>
    );
}

export default Portifolio;

