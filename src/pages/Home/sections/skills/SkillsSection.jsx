import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import '../../../../i18n.js';
import './SkillsSection.scss';
import skillsData from '../../../../data/skills.json';
import flowerImg from '../../../../assets/images/flower_1.png';
import Flutter from '../../../../assets/images/techs/Flutter.svg';
import Javascript from '../../../../assets/images/techs/JavaScript.svg';
import ReactIcon from '../../../../assets/images/techs/React.svg';
import Figma from '../../../../assets/images/techs/Figma.svg';
import Git from '../../../../assets/images/techs/Git.svg';
import GitHub from '../../../../assets/images/techs/GitHub.svg';
import HTML5 from '../../../../assets/images/techs/HTML5.svg';
import Java from '../../../../assets/images/techs/Java.svg';
import MySQL from '../../../../assets/images/techs/MySQL.svg';
import Oracle from '../../../../assets/images/techs/Oracle.svg';
import Postman from '../../../../assets/images/techs/Postman.svg';
import Python from '../../../../assets/images/techs/Python.svg';
import Flask from '../../../../assets/images/techs/Flask.svg';
import Sass from '../../../../assets/images/techs/Sass.svg';
import Spring from '../../../../assets/images/techs/Spring.svg';
import SQLite from '../../../../assets/images/techs/SQLite.svg';
import Ruby from '../../../../assets/images/techs/Ruby.svg';
import Rails from '../../../../assets/images/techs/Rails.svg';

const techImages = {
  Flutter,
  JavaScript: Javascript,
  React: ReactIcon,
  Figma,
  Git,
  GitHub,
  HTML5,
  Java,
  MySQL,
  Oracle,
  Postman,
  Python,
  Flask,
  Sass,
  Spring,
  SQLite,
  Ruby,
  Rails,
};

const flowers = [
  { top: '5%', left: '10%', delay: 0.1 },
  { top: '15%', right: '15%', delay: 0.4 },
  { top: '30%', left: '30%', delay: 0.6 },
  { top: '40%', right: '30%', delay: 0.5 },
  { top: '20%', right: '50%', delay: 0.2 },
];

function SkillsSection() {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(skillsData[0].id);

  const currentLang = i18n.language.split('-')[0];
  const activeSkills = skillsData.find((category) => category.id === activeCategory)?.skills ?? [];

  return (
    <section className="skills_section">
      <div className="skills_blur" />
      <div className="skills-flowers">
        {flowers.map((f, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 0, rotate: 0 }}
            animate={{
              y: [0, 500, 1000],
              x: [0, 50, -50, 0],
              rotate: [0, 45, -45, 180],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: f.delay,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              top: f.top,
              left: f.left,
              right: f.right,
              filter: 'blur(1px)',
              pointerEvents: 'none',
            }}
          >
            <img src={flowerImg} alt="" style={{ width: '60px' }} />
          </motion.div>
        ))}
      </div>

      <div className="skills_container">
        <motion.div
          className="skills_header"
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <h2>{t('skills.title')}</h2>
          <h3>{t('skills.subtitle')}</h3>
        </motion.div>

        <div className="skills_tabs">
          {skillsData.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`skills_tab ${activeCategory === category.id ? 'skills_tab--active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {t(`skills.categories.${category.id}`)}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          className="skills_grid"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {activeSkills.map((skill, index) => {
            const description = currentLang === 'en' ? skill.descriptionEN : skill.descriptionPT;

            return (
              <motion.article
                key={skill.name}
                className="skill_card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
              >
                <div className="skill_card_top">
                  <div className="skill_icon">
                    <img src={techImages[skill.img]} alt={skill.name} />
                  </div>
                  <div className="skill_progress">
                    <motion.div
                      className="skill_progress_fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
                <h3>{skill.name}</h3>
                <p>{description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;
