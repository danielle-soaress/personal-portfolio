import './IntroductionSection.scss';
import SocialMedias from '../../../../components/socialMedias/SocialMedias';
import { useTranslation } from 'react-i18next';
import "../../../../i18n";
import { motion, useTransform, useScroll} from "motion/react"
import {useRef} from 'react';
import flowerImg from '../../../../assets/images/flower_1.png'

function IntroductionSection() {
    const containerRef = useRef(null);
    const {t} = useTranslation();

    const { scrollYProgress } = useScroll({
            target: containerRef,
            offset: ["start start", "end start"]
    });


    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
    const filter = useTransform(
        scrollYProgress,
        [0.2, 1],
        ["blur(0px)", "blur(6px)"]
    )

    const flowers = [
    { top: '5%', right: '10%', delay: 0.1, xMove: 40 },
    { top: '15%', right: '15%', delay: 0.4, xMove: -30 },
    { top: '40%', right: '20%', delay: 0.5, xMove: 50 },
    { top: '20%', right: '30%', delay: 0.2, xMove: 10 },
    { top: '30%', right: '23%', delay: 0.3, xMove: 20 },
    { top: '45%', right: '2%', delay: 0.6, xMove: 15 },
    ];


    return (
    <motion.div ref={containerRef} className="introduction_container" style={{filter}}>
        <div className="left_content">
            <h2 className="apresentation_title">
                <span className="my_name">Danielle<br/>Soares</span>
            </h2>
            <p className="myself_description">
            Desenvolvedora de Software <span>&</span><br/>
            Estudante de Engenharia de Software
            </p>
            <SocialMedias showRectangle={true}/>
        </div>
        <motion.div
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "ease" }}
        className="right_content"
        >
            <div className="right_image">
                <div className="shape1 shape_background_image">
                    <div className="shape2 shape_background_image">
                        <div className= "shape3 shape_background_image">
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        <div className="decoration">
            <div className="blur2"></div>
            <motion.div 
            initial={{ opacity: 0}} 
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
                <img className="flowerImg flower" src={flowerImg}/>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0}} 
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}>
                <img className="flowerImg2 flower" src={flowerImg}/>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0}} 
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}>
                <img className="flowerImg3 flower" src={flowerImg}/>
                <img className="flowerImg7 flower" src={flowerImg}/>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0}} 
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}>
                <img className="flowerImg4 flower" src={flowerImg}/>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0}} 
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}>
                <img className="flowerImg5 flower" src={flowerImg}/>
                <img className="flowerImg6 flower" src={flowerImg}/>
            </motion.div>
            <motion.div
            class="scroll-container"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.8, ease: "ease" }}
            exit={{ opacity: 0 }}
            style ={{opacity}}
            >
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
                <span class="scroll-text">Scroll</span>
            </motion.div>
        
            {flowers.map((f, i) => (
          <motion.div
              key={i}
              initial={{ y: -100, opacity: 0, rotate: 0 }}
              animate={{ 
              y: [0, 500, 1000],
              x: [0, 50, -50, 0],
              rotate: [0, 45, -45, 180],
              opacity: [0, 0.9, 0.9, 0] 
              }}
              transition={{
              duration: 14,
              repeat: Infinity,
              delay: f.delay,
              ease: "linear"
              }}
              style={{
              position: 'absolute',
              top: f.top,
              left: f.left,
              right: f.right,
              filter: "blur(1px)",
              pointerEvents: 'none'
              }}
          >
              <img className="flowerImg_experience_section flower" src={flowerImg} style={{ width: '60px' }} />
          </motion.div>
          ))}
        </div>
    </motion.div>
    )
}

export default IntroductionSection;