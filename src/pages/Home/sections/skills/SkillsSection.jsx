import { useTranslation } from 'react-i18next';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from 'react';

import "../../../../i18n.js";
import './SkillsSection.scss';
import TechTree from '../../../../components/techTree/TechTree.jsx';
import Flutter from '../../../../assets/images/techs/Flutter.svg';
import Javascript from '../../../../assets/images/techs/JavaScript.svg';
import React from '../../../../assets/images/techs/React.svg';
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
import flowerImg from '../../../../assets/images/flower_1.png'


const stackForest = [
  {
    trunk: "Mobile & Frontend",
    branches: [
      { name: "Flutter", img: Flutter, level: 7},
      { name: "Java (Android)", img: Java, level: 8},
      { name: "React", img: React , level: 6},
      { name: "JavaScript", img: Javascript, level: 6},
      { name: "HTML5", img: HTML5, level: 10},
      { name: "Sass", img: Sass, level: 10}
    ]
  },
  {
    trunk: "Backend",
    branches: [
      { name: "Python", img: Python, level: 8},
      { name: "Flask", img: Flask, level: 6},
      { name: "Java", img: Java, level: 7},
      { name: "Spring Boot", img: Spring, level: 7},
      { name: "Ruby", img: Ruby, level: 4},
      { name: "Ruby on Rails", img: Rails, level: 3},
    ]
  },
  {
    trunk: "Databases",
    branches: [
      { name: "MySQL", img: MySQL, level: 9},
      { name: "OracleDB", img: Oracle, level: 5},
      { name: "SQLite", img: SQLite, level: 8}
    ]
  },
  {
    trunk: "Tools",
    branches: [
      { name: "Git", img: Git, level: 8},
      { name: "GitHub", img: GitHub, level: 9},
      { name: "Postman", img: Postman, level: 7},
      { name: "Figma", img: Figma, level: 10},
    ]
  }
];



function SkillsSection() {
  const { t } = useTranslation();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "center center"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0,1]);

  const flowers = [
    { top: '5%', left: '10%', delay: 0.1, xMove: 40 },
    { top: '15%', right: '15%', delay: 0.4, xMove: -30 },
    { top: '0%', left: '40%', delay: 0.7, xMove: -50 },
    { top: '0%', left: '40%', delay: 0.7, xMove: -50 },
    { top: '30%', left: '30%', delay: 0.6, xMove: 50 },
    { top: '40%', right: '30%', delay: 0.5, xMove: 50 },
    { top: '20%', right: '50%', delay: 0.2, xMove: 10 },
    ];

  return (
    <section className="skills_section">
      <motion.div 
        ref={ref} 
        className="portifolio_container"
      >
        <h2 className="gradient_title">Habilidades</h2>
        <motion.div className="forest_container">
          {stackForest.map((tree, index) => (
            <TechTree key={index} data={tree} />
          ))}
        </motion.div>
        <motion.div className="skills-flowers" style={opacity}>
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
              duration: 10,
              repeat: Infinity,
              delay: f.delay,
              ease: "linear"
              }}
              style={{
              delay: 2,
              position: 'absolute',
              top: f.top,
              left: f.left,
              right: f.right,
              filter: "blur(1px)",
              pointerEvents: 'none'
              }}
          >
              <img className="flowerImg_experience_section" src={flowerImg} style={{ width: '60px' }} />
          </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SkillsSection;
