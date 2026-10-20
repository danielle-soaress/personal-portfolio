import './LanguageButton.scss';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import "../../i18n";

const LANGUAGES = ['pt', 'en'];

// Plain-text switch: "PT / EN", the active language lit and underlined, one tap to change.
// Reads the language from i18n, so every instance (sidebar, mobile bar) stays in sync.
function LanguageButton({ orientation = 'horizontal' }) {
    const { i18n } = useTranslation();
    const current = (i18n.language || 'pt').startsWith('en') ? 'en' : 'pt';

    return (
        <div
            className={`lang_switch lang_switch--${orientation}`}
            role="group"
            aria-label={current === 'en' ? 'Language' : 'Idioma'}
        >
            {LANGUAGES.map((lng, index) => (
                <Fragment key={lng}>
                    {index > 0 && <span className="lang_switch_divider" aria-hidden="true">/</span>}
                    <button
                        type="button"
                        className={`lang_switch_option ${current === lng ? 'is-active' : ''}`}
                        aria-pressed={current === lng}
                        lang={lng}
                        onClick={() => i18n.changeLanguage(lng)}
                    >
                        {lng.toUpperCase()}
                    </button>
                </Fragment>
            ))}
        </div>
    );
}

export default LanguageButton;
