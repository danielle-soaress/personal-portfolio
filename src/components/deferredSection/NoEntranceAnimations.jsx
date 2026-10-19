import { AnimatePresence } from 'motion/react';

// When enabled, every motion element inside renders straight in its final state: `initial`
// values are skipped, so whileInView/animate reveals have nothing to animate from.
// Scroll-linked styles (useTransform) and hover/tap feedback keep working.
function NoEntranceAnimations({ enabled, children }) {
    if (!enabled) return children;
    return <AnimatePresence initial={false}>{children}</AnimatePresence>;
}

export default NoEntranceAnimations;
