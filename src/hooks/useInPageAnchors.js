import { useEffect } from 'react';
import { scrollToSection } from '../utils/scrollToSection';

// Routes every plain `href="#section"` link on the page through scrollToSection,
// so jumps land on the right place even while sections are still loading.
export function useInPageAnchors() {
    useEffect(() => {
        const handleClick = (event) => {
            if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
            const link = event.target.closest?.('a[href^="#"]');
            const id = link?.getAttribute('href').slice(1);
            if (!id || !document.getElementById(id)) return;
            event.preventDefault();
            scrollToSection(id);
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);
}
