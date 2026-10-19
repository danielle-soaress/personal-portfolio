import { requestMountAll } from './deferredMount';

const FOLLOW_MS = 2500;
const USER_SCROLL_EVENTS = ['wheel', 'touchstart', 'keydown'];

/**
 * Smooth-scrolls to a section and keeps aiming at it while sections above finish loading and
 * change the page height. Stops following as soon as the visitor scrolls on their own.
 */
export function scrollToSection(id) {
    requestMountAll();
    const aim = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    aim();

    const page = document.querySelector('.main_container') || document.body;
    if (!('ResizeObserver' in window)) return;

    let frame = 0;
    const observer = new ResizeObserver(() => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(aim);
    });
    const stop = () => {
        observer.disconnect();
        cancelAnimationFrame(frame);
        USER_SCROLL_EVENTS.forEach((type) => window.removeEventListener(type, stop));
    };

    observer.observe(page);
    USER_SCROLL_EVENTS.forEach((type) => window.addEventListener(type, stop, { passive: true, once: true }));
    window.setTimeout(stop, FOLLOW_MS);
}
