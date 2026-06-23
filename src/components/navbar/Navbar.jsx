import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './navbar.scss';
import FlowerIcon from '../../assets/images/flower_icon.svg?url';
import LanguageButton from '../languageButton/LanguageButton';
import '../../i18n';

const navItems = [
  { id: 'introduction', labelKey: 'nav.link_1', icon: 'bi bi-house' },
  { id: 'about_me', labelKey: 'nav.link_2', icon: 'bi bi-person' },
  { id: 'portifolio', labelKey: 'nav.link_3', icon: 'bi bi-grid' },
  { id: 'contact_me', labelKey: 'nav.link_4', icon: 'bi bi-telephone' },
];

function Navbar({ variant = 'vertical' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0].id);
  const { t } = useTranslation();
  const location = useLocation();
  const isHorizontal = variant === 'horizontal';

  useEffect(() => {
    if (isHorizontal) return undefined;

    const updateActiveSection = () => {
      const referencePoint = window.innerHeight * 0.4;
      const currentSection = navItems.reduce((current, item) => {
        const section = document.getElementById(item.id);
        if (!section) return current;

        const { top } = section.getBoundingClientRect();
        if (top <= referencePoint) return item.id;
        return current;
      }, navItems[0].id);

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [isHorizontal]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);


  const isLinkActive = (item) => {
    if (isHorizontal) {
      if (item.id === 'portifolio') return location.pathname === '/portifolio';
      return false;
    }
    return activeSection === item.id;
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (!section) return;

    setActiveSection(sectionId);
    section.scrollIntoView({ behavior: 'auto', block: 'start' });
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  const getNavTarget = (item, isHorizontal) => {
    if (item.id === 'portifolio' && isHorizontal) return '/portifolio';
    if (item.id === 'introduction' && isHorizontal) return '/';
    return `/#${item.id}`;
  };

  const renderNavLink = (item, showLabel = false) => {
    const className = `header_nav_link ${isLinkActive(item) ? 'active' : ''}`;
    
    return (
      <Link
        key={item.id}
        className={className}
        to={getNavTarget(item, isHorizontal)}
        {...(isHorizontal ? { onClick: closeMenu } : { onClick: (event) => scrollToSection(event, item.id)})}
        aria-label={t(item.labelKey)}
      >
        {isHorizontal ? (
          <>
            <i className={`aside_nav_icon ${item.icon}`} />
            <span className="nav_link_label">{t(item.labelKey)}</span>
          </>
        ) : (
          <i className={`aside_nav_icon ${item.icon}`} />
        )}
      </Link>
    );
  };

  const renderMobileLinks = () => {
    if (isHorizontal) {
      return navItems.map((item) => renderNavLink(item, true));
    }

    return navItems.map((item) => (
      <a
        key={item.id}
        className={`header_nav_link ${activeSection === item.id ? 'active' : ''}`}
        href={`#${item.id}`}
        onClick={(event) => scrollToSection(event, item.id)}
      >
        {t(item.labelKey)}
      </a>
    ));
  };

  return (
    <div className={`navbar ${isHorizontal ? 'navbar--horizontal' : ''} ${menuOpen ? 'navbar--horizontal--menu-open' : ''}`}>
      <nav className={`links ${isHorizontal ? 'links--horizontal' : ''}`}>
        <Link          
          to="/"
          className="icon-flood-container"
          style={{ '--flower-mask': `url("${FlowerIcon}")` }}
          aria-label={t('nav.logoAlt')}
          onClick={closeMenu}
        >
          <div className="icon-fill" />
          <img src={FlowerIcon} className="icon-base" alt={t('nav.logoAlt')} />
        </Link>
        <div className={`nav_links ${isHorizontal ? 'nav_links--horizontal' : ''}`}>
          {navItems.map((item) => renderNavLink(item))}
        </div>
        <LanguageButton />
      </nav>

      <div className={`menu_mobile  ${menuOpen ? 'menu_mobile--open' : ''}`}>
          <button
            type="button"
            className={`menu_mobile_icon bi ${menuOpen ? 'bi-x' : 'bi-list'} ${menuOpen ? 'menu_mobile_icon--open' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          />
          <div className="mobile_language_button">
            <LanguageButton/>
          </div>
          
        <div className={`menu_mobile_links ${isHorizontal ? 'menu_mobile_links--horizontal' : ''} ${menuOpen ? 'menu_mobile_links--open' : ''}`}>
          {renderMobileLinks()}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
