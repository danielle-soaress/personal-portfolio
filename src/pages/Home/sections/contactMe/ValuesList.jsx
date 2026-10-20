import { useTranslation } from 'react-i18next';
import doodleGem from '../../../../assets/images/doodles/doodle_gem.svg';
import doodleBulb from '../../../../assets/images/doodles/doodle_lightbulb.svg';
import doodleSparkles from '../../../../assets/images/doodles/doodle_sparkles.svg';

const VALUES = [
    { key: 'purpose', doodle: doodleGem },
    { key: 'innovation', doodle: doodleBulb },
    { key: 'growth', doodle: doodleSparkles },
];

// Phones: a handwritten question over a short list of the three values, all visible at once
// (the desktop pinned scroll story needs per-frame work phones can't afford)
function ValuesList() {
    const { t } = useTranslation();

    return (
        <section className="values_list">
            <span className="values_list_title">{t('contact.searchTitle')}</span>
            <ul className="values_rows">
                {VALUES.map(({ key, doodle }) => (
                    <li key={key}>
                        <span>{t(`contact.values.${key}`)}</span>
                        <img src={doodle} alt="" aria-hidden="true" width="30" height="30" loading="lazy" decoding="async" />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ValuesList;
