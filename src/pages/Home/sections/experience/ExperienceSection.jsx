import { motion, useScroll, useTransform, useSpring} from "framer-motion";
import { useRef, useState} from "react";
import './ExperienceSection.scss';
import data from '../../../../assets/data/experience.json';
import { useTranslation } from 'react-i18next';
import "../../../../i18n";

function ExperienceSection() {
    const containerRef = useRef(null);
    const [experienceData, setExperienceData] = useState(data);
    const {t, i18n} = useTranslation();


    const currentLang = i18n.language.split('-')[0];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end start"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 0.9],[0, 1, 1, 0]);
    const x = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.9], ["30px", "-30px", "30px", "0px"]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return <section ref={containerRef} className="timeline-section">
        <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
        >
            <h2>{t('experience.title')}</h2>
            <h3>{t('experience.subtitle')}</h3>
        </motion.div>
        <div className="timeline-wrapper">
            <div className="left-experience-details"> 
                {data.map((exp) => {
                    const content = exp[currentLang] || exp.en;
                    const period = content.period || exp.en.period;
                    const type = content.type || exp.en.type;
                    const role = content.role || exp.en.role;
                    const company = exp.company;
                    const desc = content.shortDescription || exp.en.shortDescription;

                    return (
                    <motion.div 
                    key={exp.id}
                    initial={{ opacity: 0, x: -40 }} 
                    transition={{ duration: 0.5 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    whileInView={{ opacity: 1, x: 0 }}  
                    className="left-experience-card">
                        <h3 className="experience-period">{period}</h3>
                        <h2 className="experience-company">{company}</h2>
                        <p className="experience-role">{role}</p>
                        <div className="experience-type">{type}</div>
                        <p className="experience-desc">{desc}</p>
                        <div className="tech-stack">
                            {exp.techs.map((tech, index) => (
                                <span key={index} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                    
                    );
                })}
            </div>
            <div className="timeline-line-bg">
                <motion.div 
                className="timeline-line-active" 
                style={{ height: scaleY, }}>
                    <motion.div 
                    className="timeline-dot"
                    style={{ top: scaleY, }}
                    />
                </motion.div>
            </div>
            <div className="right-experience-details"> 
                {data.map((exp) => {

                    const content = exp[currentLang] || exp.en;
                    const desc = content.description || exp.en.description;

                    return (
                    <motion.div 
                    key={exp.id}
                    initial={{ opacity: 0, x: 30 }} 
                    transition={{ duration: 0.5 }} 
                    viewport={{ once: true, amount: 0.6 }} 
                    whileInView={{ opacity: 1, x: 0 }}  
                    className="right-experience-card">
                        <p>{desc}</p>
                        <div className="tech-stack">
                            {exp.techs.map((tech, index) => (
                                <span key={index} className="tech-badge">{tech}</span>
                            ))}
                        </div>

                    </motion.div>
                    );
                })}
            </div>
      </div>
        
    </section>
}

export default ExperienceSection;