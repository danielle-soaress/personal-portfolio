import {useState, useEffect} from "react"
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './Portifolio.scss'
import randomColorsImage from '../../assets/images/random_colors.png'
import eletroLibrasImage from '../../assets/images/eletro_libras.png'
import DrawingImage from '../../assets/images/drawing.png'
import ProjectCard from '../projectCard/ProjectCard.jsx'
import PurpleButton from '../purpleButton/PurpleButton.jsx'


function Portifolio() {

    const [slidesPerView, setSlidesPerView] = useState(3)

    window.addEventListener('resize', () => {
        slidesPerViewDefiner();
    })

    useEffect(() => {
        slidesPerViewDefiner();
    }, [])

    const slidesPerViewDefiner = () => {
        if (window.innerWidth > 1890) {
            setSlidesPerView(3)
        } else if (window.innerWidth < 1890 && window.innerWidth > 1250) {
            setSlidesPerView(2)
        } else {
            setSlidesPerView(1)
        }
    }


    return (
        <div className="portifolio_container">
            <h2>Conheça alguns dos meus projetos</h2>
            <div className="carousel_container">
                <div className="carousel_aux">
                    <Swiper className="cards_container"
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    pagination={{clickable: true, type: 'bullets'}}
                    slidesPerView={slidesPerView}>
                        <SwiperSlide className="slide-item">
                           <ProjectCard
                            id="carousel_1"
                            imgSrc={DrawingImage} 
                            imgAlt="Preview do site Drawing"
                            title="Draw.ing"
                            description="Lousa interativa virtual"
                            techs="JavaScript React SCSS HTML"
                            gitLink="https://github.com/danielle-soaress/paint"
                            demoLink="https://paint-green.vercel.app/"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                        <ProjectCard
                            id="carousel_2"
                            imgSrc={randomColorsImage} 
                            imgAlt="Preview do site Random Colors"
                            title="Random Colors"
                            description="Crie uma paleta de cores aleatórias com apenas um clique."
                            techs="JavaScript CSS HTML"
                            gitLink="https://github.com/danielle-soaress/colors-generator"
                            demoLink="https://danielle-soaress.github.io/colors-generator/"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">    
                        <ProjectCard 
                            id="carousel_3"
                            imgSrc={eletroLibrasImage} 
                            imgAlt="Preview do site Eletro Libras"
                            title="Eletro Libras"
                            description='O app "Eletro Libras" visa a inclusão de alunos surdos no curso de Eletrônica por meio de Libras.'
                            techs="HTML CSS JavaScript"
                            gitLink="https://github.com/danielle-soaress/eletro-libras-landingpage"
                            demoLink="https://eletro-libras-landingpage.vercel.app/"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <a onClick={() => window.alert("Em breve esta página será desenvolvida! ;)")}>
                <PurpleButton content="Ver mais projetos" >
                    </PurpleButton></a>
        </div>
    );
}

export default Portifolio;

