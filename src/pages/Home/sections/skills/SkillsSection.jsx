import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { m } from 'motion/react';
import { LuFolder, LuFolderOpen, LuFileCode2 } from 'react-icons/lu';

import '../../../../i18n.js';
import './SkillsSection.scss';
import skillsData from '../../../../data/skills.json';

import doodleSparkles from '../../../../assets/images/doodles/doodle_sparkles.svg';
import doodleSquiggly from '../../../../assets/images/doodles/doodle_squiggly.svg';

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
import Angular from '../../../../assets/images/techs/Angular.svg';
import MongoDB from '../../../../assets/images/techs/Mongodb.svg';
import PostgreSQL from '../../../../assets/images/techs/Postgre.svg';
import Docker from '../../../../assets/images/techs/Docker.svg';

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
  Angular,
  MongoDB,
  PostgreSQL,
  Docker,
};

function SkillsSection() {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(skillsData[0].id);

  const currentLang = i18n.language.split('-')[0];
  const isEn = currentLang === 'en';
  const activeSkills = skillsData.find((category) => category.id === activeCategory)?.skills ?? [];

  return (
    <section className="skills_section" id="skills">
      <div className="skills_blur" />

      <div className="skills_container">
        {/* Section Header */}
        <m.div
          className="skills_header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <div className="header-title-container">
            <h2>{t('skills.title')}</h2>
            <span className="header-sparkle-doodle" aria-hidden="true">
              <img src={doodleSparkles} alt="" width="22" height="22" loading="lazy" decoding="async" />
            </span>
          </div>

          <div className="header-subtitle-container">
            <h3>{t('skills.subtitle')}</h3>
            <span className="header-squiggly-doodle" aria-hidden="true">
              <img src={doodleSquiggly} alt="" width="110" height="14" loading="lazy" decoding="async" />
            </span>
          </div>
        </m.div>

        {/* Computer Folders System */}
        <div className="folder_system">
          {/* Folder Tabs (Styled like tabbed folders) */}
          <div className="folder_tabs" role="tablist">
            {skillsData.map((category) => {
              const isActive = activeCategory === category.id;
              const skillCount = category.skills.length;

              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  className={`folder_tab ${isActive ? 'folder_tab--active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="folder_tab_icon" aria-hidden="true">
                    {isActive ? <LuFolderOpen /> : <LuFolder />}
                  </span>
                  <span className="folder_tab_name">
                    {t(`skills.categories.${category.id}`)}
                  </span>
                  <span className="folder_tab_count">{skillCount}</span>
                </button>
              );
            })}
          </div>

          {/* Folder Box Container (Contorno da pasta que guarda os arquivos) */}
          <div className="folder_box">
            {/* Folder Header Bar: Breadcrumb + Count */}
            <div className="folder_bar">
              <div className="folder_path_chip">
                <LuFolderOpen className="path_icon" />
                <span className="path_text">
                  ~/danielle/ferramentas/<span className="path_current">{activeCategory}</span>/
                </span>
              </div>
              <div className="folder_items_badge">
                <LuFileCode2 className="badge_icon" />
                <span>
                  {activeSkills.length} {isEn ? 'technologies' : 'tecnologias'}
                </span>
              </div>
            </div>

            {/* Internal Skill Cards Grid */}
            <m.div
              key={activeCategory}
              className="skills_cards_grid"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {activeSkills.map((skill, index) => {
                const description = currentLang === 'en' ? skill.descriptionEN : skill.descriptionPT;

                return (
                  <m.article
                    key={skill.name}
                    className="skill_card"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
                  >
                    <div className="skill_card_top">
                      <div className="skill_icon_box">
                        <img loading="lazy" decoding="async" width="30" height="30" src={techImages[skill.img]} alt={skill.name} />
                      </div>
                    </div>

                    <div className="skill_card_body">
                      <h3>{skill.name}</h3>

                      <div className="skill_progress">
                        <m.div
                          className="skill_progress_fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: 0.1 + index * 0.04, ease: 'easeOut' }}
                        />
                      </div>

                      <p>{description}</p>
                    </div>
                  </m.article>
                );
              })}
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
