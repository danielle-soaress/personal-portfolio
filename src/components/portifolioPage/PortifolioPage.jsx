import './PortifolioPage.scss'
import ProjectCardV2 from '../projectCard/ProjectCard_v2.jsx'
import Navbar from '../navbar/Navbar.jsx'
import data from '../../assets/data/projects.json'; 
import Footer from '../footer/Footer.jsx'
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const getProjectsRelevance = () => {
    const jsonData = data
    let projectsID_relevance = []
    let relevance = 0;
            
        for (let i = 0; i<jsonData.length; i++) {
            let project = jsonData[i]
            if (project.relevance >=  relevance) {
                projectsID_relevance.unshift({"id": project.id, "relevance": project.relevance});
                relevance = project.relevance;
            } else {
                for (let i = projectsID_relevance.length-1; i>0; i--) {
                    let p_r = projectsID_relevance[i].relevance
                    console.log(p_r)
                    if (project.relevance <= p_r) {
                        projectsID_relevance.push({"id": project.id, "relevance": project.relevance});
                    } else {
                        projectsID_relevance.splice(i, 0, {"id": project.id, "relevance": project.relevance});
                    }
                }
            }
        }

    return projectsID_relevance
}

function PortifolioPage() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let projectsID_relevance = getProjectsRelevance();
        console.log(projectsID_relevance);
    }, []);

    useEffect(() => {
        const updatedProjects = data.map((project) => ({
            ...project,
            description: i18n.language === 'en' ? project.descriptionEN : project.descriptionPT,
        }));
        setProjects(updatedProjects);
    }, [i18n.language]);


    const LoadProjects = () => {
        return projects.map((project) => (
            <ProjectCardV2 
                key={project.id}
                imgSrc={project.imgSrc}
                imgAlt={project.imgAlt}
                title={project.title}
                description={project.description} // A descrição já atualizada
                demoLink={project.demoLink}
                gitLink={project.gitLink}
                techs={project.techs}
            />
        ));
    };


    return (
        
        <div className="main_portfolio_page_container">
            <header>
                <Navbar/>
            </header>
            <section id="all_projects">
                <div className="section_container cards_container">
                    <h1>{t('portfolioPage.title')}</h1>
                    {LoadProjects()}
                </div>
            </section>
            <footer>
                    <Footer/>
                </footer>
        </div>
    )
}

export default PortifolioPage;

