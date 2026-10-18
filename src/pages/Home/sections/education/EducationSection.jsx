import { m } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { BsArrowUpRight } from 'react-icons/bs';
import './EducationSection.scss';
import data from '../../../../data/education.json';
import '../../../../i18n';

import doodleSparkles from '../../../../assets/images/doodles/doodle_sparkles.svg';
import doodleSquiggly from '../../../../assets/images/doodles/doodle_squiggly.svg';
import doodleTape from '../../../../assets/images/doodles/doodle_washi_tape.svg';
import unbGamaPhoto from '../../../../assets/images/education/unb-gama.webp';
import unbLogo from '../../../../assets/images/companies/unb.svg';
import ifbLogo from '../../../../assets/images/companies/ifb.svg';

const LOGOS_BY_ID = {
    unb: unbLogo,
    ifb: ifbLogo,
};

const toMonths = (yearMonth) => {
    const [year, month] = yearMonth.split('-').map(Number);
    return year * 12 + (month - 1);
};

const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: 'easeOut', delay },
});

function EducationSection() {
    const { t, i18n } = useTranslation();
    const currentLang = (i18n.language || 'pt').split('-')[0];
    const localize = (item) => item[currentLang] || item.en;

    // Newest first; the arrow points up from the earlier course to the one that followed
    const path = [...data.degrees].sort((a, b) => toMonths(b.start) - toMonths(a.start));

    return (
        <section className="education-section" id="education">
            <m.div className="education-header" {...reveal()}>
                <h2 className="education-title">
                    <span className="title-text">{t('education.title')}</span>
                    <span className="header-sparkle-doodle" aria-hidden="true">
                        <img src={doodleSparkles} alt="" width="24" height="24" loading="lazy" decoding="async" />
                    </span>
                </h2>
                <div className="education-subtitle">
                    <h3>{t('education.subtitle')}</h3>
                    <span className="header-squiggly-doodle" aria-hidden="true">
                        <img src={doodleSquiggly} alt="" width="130" height="16" loading="lazy" decoding="async" />
                    </span>
                </div>
            </m.div>

            <div className="education-layout">
                <m.figure className="education-photo" {...reveal(0.05)}>
                    <div className="card-washi-tape" aria-hidden="true">
                        <img src={doodleTape} alt="" width="65" height="25" loading="lazy" decoding="async" />
                    </div>
                    <img src={unbGamaPhoto} alt="Caixa d'água com o logo da UnB Gama" width="900" height="1200" loading="lazy" decoding="async" />
                    <figcaption>UnB · Gama</figcaption>
                </m.figure>

                <div className="education-content">
                    <ol className="degree-path">
                        {path.map((degree, index) => {
                            const content = localize(degree);
                            return (
                                <li key={degree.id} className={`degree-step ${degree.main ? 'is-main' : ''}`}>
                                    {index > 0 && (
                                        <svg className="degree-connector" viewBox="0 0 64 52" fill="none" aria-hidden="true">
                                            {/* Straight hand-drawn stroke pointing up from the earlier course to the next one */}
                                            <m.path
                                                d="M 32 48 L 32 6"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                viewport={{ once: true, amount: 1 }}
                                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                            />
                                            <m.path
                                                d="M 23 14 L 32 5 L 41 14"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                viewport={{ once: true, amount: 1 }}
                                                transition={{ duration: 0.25, ease: 'easeOut', delay: 0.65 }}
                                            />
                                        </svg>
                                    )}
                                    <m.article className="degree-card" {...reveal(0.1 + index * 0.12)}>
                                        <span className="degree-logo">
                                            <img src={LOGOS_BY_ID[degree.id]} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                                        </span>
                                        <div className="degree-info">
                                            <span className="degree-period">{content.period}</span>
                                            <h4 className="degree-course">{content.course}</h4>
                                            <p className="degree-institution">
                                                {degree.institution}
                                                {degree.campus && ` · ${degree.campus}`}
                                            </p>
                                        </div>
                                    </m.article>
                                </li>
                            );
                        })}
                    </ol>

                    <m.div className="courses" {...reveal(0.2)}>
                        <span className="education-label">{t('education.coursesLabel')}</span>
                        <ul className="course-list">
                            {data.courses.map((course) => {
                                const title = localize(course).title;
                                return (
                                    <li key={course.id} className="course-row">
                                        <span className="course-year">{course.year}</span>
                                        <span className="course-title">{title}</span>
                                        <span className="course-issuer">{course.issuer}</span>
                                        {course.url && (
                                            <a
                                                className="course-link"
                                                href={course.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${t('education.viewCertificate')}: ${title}`}
                                            >
                                                <BsArrowUpRight aria-hidden="true" />
                                            </a>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                        {data.lattesUrl && (
                            <a className="education-lattes" href={data.lattesUrl} target="_blank" rel="noopener noreferrer">
                                {t('education.lattes')}
                                <BsArrowUpRight aria-hidden="true" />
                            </a>
                        )}
                    </m.div>
                </div>
            </div>
        </section>
    );
}

export default EducationSection;
