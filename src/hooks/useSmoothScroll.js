import { useEffect, useState } from 'react';
import { useScroll, useSpring, useReducedMotion } from 'motion/react';

// Same criteria that previously disabled Lenis: small screens or touch devices keep raw native scroll
const SMOOTH_DISABLED_QUERY = '(max-width: 768px), (hover: none) and (pointer: coarse)';

// Critically damped spring tuned to match the old Lenis glide (lerp 0.1) without hijacking native scroll
const SPRING = { stiffness: 80, damping: 18, mass: 1, restDelta: 0.0001, restSpeed: 0.0001 };

function useSmoothEnabled() {
    const [enabled, setEnabled] = useState(() =>
        typeof window !== 'undefined' && !window.matchMedia(SMOOTH_DISABLED_QUERY).matches
    );

    useEffect(() => {
        const media = window.matchMedia(SMOOTH_DISABLED_QUERY);
        const update = () => setEnabled(!media.matches);
        media.addEventListener?.('change', update);
        return () => media.removeEventListener?.('change', update);
    }, []);

    return enabled;
}

// Drop-in replacement for useScroll that eases scrollYProgress on desktop
export function useSmoothScroll(options) {
    const scroll = useScroll(options);
    const smoothProgress = useSpring(scroll.scrollYProgress, SPRING);
    const enabled = useSmoothEnabled();
    const reducedMotion = useReducedMotion();

    return {
        ...scroll,
        scrollYProgress: enabled && !reducedMotion ? smoothProgress : scroll.scrollYProgress,
    };
}
