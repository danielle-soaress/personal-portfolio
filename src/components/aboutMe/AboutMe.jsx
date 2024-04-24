import React from 'react'
import {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './AboutMe.scss'
import javaIcon from '../../assets/images/java_icon.png'
import figmaIcon from '../../assets/images/figma_icon.png'
import reactIcon from '../../assets/images/react_icon.png'
import jsIcon from '../../assets/images/js_icon.png'
import cssIcon from '../../assets/images/css_icon.png'
import htmlIcon from '../../assets/images/html_icon.png'
import scssIcon from '../../assets/images/scss_icon.png'
import SoftSkill from '../softSkills/softSkill'
import { useTranslation } from 'react-i18next';
import "../../i18n";

function AboutMe() {

    const {t} = useTranslation();
    const [slidesPerView, setSlidesPerView] = useState(2);

    window.addEventListener('resize', () => {
        slidesDefiner();
    })

    useEffect(() => {
        slidesDefiner();
    }, [])


    const slidesDefiner = () => {
        let minWidth = 1730;

        if (window.innerWidth <= minWidth) {
            setSlidesPerView(1)
        } else if (slidesPerView != 1 && window.innerWidth > minWidth) {
            setSlidesPerView(2)
        }
    }
    const [swiperStyle, setSwiperStyle] = useState({
        height: '280px',
        width: '100%',
    })

    const [swiperStyle2, setSwiperStyle2] = useState({
        height: '140px',
        width: '100%',
    })

    return (
        <div className="about_me_container">
            <h2>{t('about.title')}</h2>
            <p>{t('about.description')}</p>
            <div className="soft_skills">
                <div className="techs_container_title">
                    <i className="bi bi-chat"></i>
                    <h3>Soft Skills</h3>
                </div>
                <Swiper 
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={false}
                spaceBetween={10}
                pagination={{clickable: true, type: 'bullets'}}
                className="swiper-container"
                style={swiperStyle}
                slidesPerView={slidesPerView}
                >
                    <SwiperSlide className="slide-item">
                        <SoftSkill
                        iconClass="icon bi-book"
                        title={t('about.softSkills.skill_1.title')}
                        desc={t('about.softSkills.skill_1.description')}
                        />
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <SoftSkill
                        iconClass="icon bi-card-checklist"
                        title={t('about.softSkills.skill_2.title')}
                        desc={t('about.softSkills.skill_2.description')}
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide className="slide-item">
                        <SoftSkill
                        iconClass="icon bi-code-slash"
                        title={t('about.softSkills.skill_3.title')}
                        desc={t('about.softSkills.skill_3.description')}
                    />
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <SoftSkill
                        iconClass="icon bi-chat-dots"
                        title={t('about.softSkills.skill_4.title')}
                        desc={t('about.softSkills.skill_4.description')}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="techs_main_container">
                <div className="techs_container_title">
                    <i className="bi bi-tools"></i>
                    <h3>{t('about.techs')}</h3>
                </div>
                <Swiper 
                className="techs_container"
                modules={[Autoplay]}
                autoplay={{delay: 500}}
                style={swiperStyle2}
                spaceBetween={10}
                slidesPerView={'auto'}
                >
                    <SwiperSlide>
                        <img src={javaIcon} alt="Java logo" className="icon java_icon"></img>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <img src={jsIcon} alt="JavaScript logo" className="icon js_icon"></img>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <img src={reactIcon} alt="React logo" className="icon react_icon"></img>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <img src={htmlIcon} alt="HTML logo" className="icon html_icon"></img>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <img src={cssIcon} alt="CSS logo" className="icon css_icon"></img>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <img src={figmaIcon} alt="Figma logo" className="icon figma_icon"></img>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <img src={scssIcon} alt="Figma logo" className="icon figma_icon"></img>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default AboutMe;