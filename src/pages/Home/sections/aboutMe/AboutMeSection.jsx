
import {useRef} from 'react';
import 'swiper/css/pagination';

import './AboutMeSection.scss'
import flowerImg from '../../../../assets/images/flower_3.png'

import personalPhoto from '../../../../assets/images/about.jpg'
import { useTranslation } from 'react-i18next';
import "../../../../i18n";
import { motion, useTransform, useScroll} from "motion/react"

function AboutMe() {
    const containerRef = useRef(null);
    const {t} = useTranslation();

    const { scrollYProgress } = useScroll({
            target: containerRef,
            offset: ["start end", "end start"]
    });
    
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 600]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -60]);
    
    return (
        <section className="about_me_section">
            <div className="blur_abm"></div>
            <motion.div ref={containerRef} className="about_me_container"style={{scale, opacity}}>
                <div className="about_me_text">                 
                    <span>  
                        <h2>Olá, eu sou a Danielle!</h2>
                        <p>
                        Sou desenvolvedora Full-Stack e atualmente moro em Brasília (Brasil), onde estudo Engenharia de Software na UnB. Atuo na criação de soluções para Web e Mobile, mas também acumulo experiências em áreas como Arquitetura de Sistemas, Requisitos de Software, IoT e Integração de IA.
                        </p>
                        <p>
                        Minha trajetória é marcada pela flexibilidade e curiosidade, em que acredito que a boa engenharia vai além do código, é sobre solucionar problemas reais.
                        Estou sempre aberta a novas conexões e oportunidades, então sinta-se à vontade para entrar em contato!
                        </p>
                    </span>
                </div>
                <div className="photo_container">
                    <div className="blur_abm"></div>
                    <div className="card">
                        <img className="card-image" src={personalPhoto}/>
                        <div className="category">Maratona de Programação</div>
                        <div className="heading">Evento do Meninas.COMP, na UnB
                            <div className="author"><span className="name">Dani</span>, 2024</div>
                        </div>
                    </div>  
                    <motion.div
                        className="abm_flower"
                        initial={{ filter: "blur(10px)", opacity: 0, y: 290, x:-80}}
                        whileInView={{ filter: "blur(0px)", opacity: 1, y: 300, x:-40 }}
                        viewport={{ once: true, amount: 1}}
                        style={{
                        y,
                        rotate,
                        opacity,
                        }}
                    >
                        <img src={flowerImg}/>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    )
}

export default AboutMe;