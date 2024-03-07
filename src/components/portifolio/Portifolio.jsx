import './Portifolio.scss'
import randomColorsImage from '../../assets/images/random_colors.png'
import eletroLibrasImage from '../../assets/images/eletro_libras.png'
import ProjectCard from '../projectCard/ProjectCard.jsx'
import PurpleButton from '../purpleButton/PurpleButton.jsx'
import {useState, useRef, useEffect} from "react"


function Portifolio() {

    const leftButton = useRef(null);
    const rightButton = useRef(null);
    const cardsContainerRef = useRef(null);
    
    var [carouselStatus, setCarouselStatus] = useState(1);
    var [carouselDeslocation, setCarouselDeslocation] = useState(0);



    const toLeft = () => {
        if (carouselStatus == 2 || carouselStatus == 1) {
                cardsContainerRef.current.style.transform = `translateX(${carouselDeslocation+410}px)`
                setCarouselDeslocation(prev => prev + 410)

                rightButton.current.style.color = "#ffffff80";
        }

        leftButton.current.style.color = `${(carouselStatus == 1)? 'transparent': '#ffffff80'}`;

        setCarouselStatus((prev) => (prev == 1)? 1: prev-1)
    }

    const toRight = () => {
        if (carouselStatus == 1 || carouselStatus == 2) {
                cardsContainerRef.current.style.transform = `translateX(${carouselDeslocation-410}px)`
                setCarouselDeslocation(prev => prev - 410)
                leftButton.current.style.color = "#ffffff80";
        }

        rightButton.current.style.color = `${(carouselStatus == 2)? 'transparent': '#ffffff80'}`;

        setCarouselStatus((prev) => (prev == 2)? 2: prev+1)
    }
    return (
        <div className="portifolio_container">
            <h2>Conheça alguns dos meus projetos</h2>
            <div className="carousel_container">
                <i onClick={toLeft} ref={leftButton} className="bi bi-caret-left-fill"></i>
                <div className="carousel_aux">
                    <div ref={cardsContainerRef} className="cards_container">
                        <ProjectCard
                            id="carousel_1"
                            imgSrc={eletroLibrasImage} 
                            imgAlt="Preview do site Eletro Libras"
                            title="1 Random Colors"
                            description="Crie uma paleta de cores aleatórias com apenas um clique."
                            techs="HTML CSS JavaScript"
                            gitLink="https://github.com/danielle-soaress/colors-generator"
                            demoLink="https://danielle-soaress.github.io/colors-generator/"
                            />
                        <ProjectCard
                            id="carousel_2"
                            imgSrc={randomColorsImage} 
                            imgAlt="Preview do site Random Colors"
                            title="2 Random Colors"
                            description="Crie uma paleta de cores aleatórias com apenas um clique."
                            techs="HTML CSS JavaScript"
                            gitLink="https://github.com/danielle-soaress/colors-generator"
                            demoLink="https://danielle-soaress.github.io/colors-generator/"
                            />
                        <ProjectCard 
                            id="carousel_3"
                            imgSrc={randomColorsImage} 
                            imgAlt="Preview do site Random Colors"
                            title="3 Random Colors"
                            description="aaaaaa"
                            techs="HTML CSS JavaScript"
                            gitLink="https://github.com/danielle-soaress/colors-generator"
                            demoLink="https://danielle-soaress.github.io/colors-generator/"
                            />
                    </div>
                </div>
                <i onClick={toRight} ref={rightButton} className="bi bi-caret-right-fill"></i>
            </div>
            <a href=""><PurpleButton content="Ver mais projetos"></PurpleButton></a>
        </div>
    );
}

export default Portifolio;

