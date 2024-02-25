import './Portifolio.scss'
import randomColorsImage from '../../assets/images/random_colors.png'
import ProjectCard from '../projectCard/ProjectCard.jsx'
import PurpleButton from '../purpleButton/PurpleButton.jsx'

function Portifolio() {
    return (
        <div className="portifolio_container">
            <h2>Conheça alguns dos meus projetos</h2>
            <div className="cards_container">
                <ProjectCard 
                imgSrc={randomColorsImage} 
                imgAlt="Preview do site Random Colors"
                title="Random Colors"
                description="Crie uma paleta de cores aleatórias com apenas um clique."
                techs="HTML CSS JavaScript"
                gitLink="https://github.com/danielle-soaress/colors-generator"
                demoLink="https://danielle-soaress.github.io/colors-generator/"
                />
                <ProjectCard 
                imgSrc={randomColorsImage} 
                imgAlt="Preview do site Random Colors"
                title="Random Colors"
                description="Crie uma paleta de cores aleatórias com apenas um clique."
                techs="HTML CSS JavaScript"
                gitLink="https://github.com/danielle-soaress/colors-generator"
                demoLink="https://danielle-soaress.github.io/colors-generator/"
                />
                <ProjectCard 
                imgSrc={randomColorsImage} 
                imgAlt="Preview do site Random Colors"
                title="Random Colors"
                description="Crie uma paleta de cores aleatórias com apenas um clique."
                techs="HTML CSS JavaScript"
                gitLink="https://github.com/danielle-soaress/colors-generator"
                demoLink="https://danielle-soaress.github.io/colors-generator/"
                />
            </div>
            <a href=""><PurpleButton content="Ver mais projetos"></PurpleButton></a>
        </div>
    );
}

export default Portifolio;