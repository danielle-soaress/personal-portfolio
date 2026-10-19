import { m } from 'motion/react';
import { useTranslation } from 'react-i18next';

const VALUE_KEYS = ['purpose', 'innovation', 'growth'];

// Phones: the same three values shown together, revealed once (no pinned scroll story)
function ValuesList() {
    const { t } = useTranslation();

    return (
        <section className="values_list">
            <span className="values_list_title">{t('contact.searchTitle')}</span>
            <ul>
                {VALUE_KEYS.map((key, index) => (
                    <m.li
                        key={key}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
                    >
                        {t(`contact.values.${key}`)}
                    </m.li>
                ))}
            </ul>
        </section>
    );
}

export default ValuesList;
