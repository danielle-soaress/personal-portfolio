import { Suspense, forwardRef, useRef } from 'react';
import { useDeferredMount } from '../../hooks/useDeferredMount';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import SectionErrorBoundary from './SectionErrorBoundary';
import NoEntranceAnimations from './NoEntranceAnimations';

// Phones skip the reveal-on-scroll entrances of every section below the hero
const SKIP_ENTRANCES_QUERY = '(max-width: 768px)';

// Keeps the section's id and approximate height so navbar links and scroll position work before it loads
const SectionPlaceholder = forwardRef(function SectionPlaceholder({ id, minHeight }, ref) {
    return <div ref={ref} id={id} style={{ minHeight }} aria-busy="true" />;
});

/**
 * Renders a lazily imported page section only when it is about to be seen (or the browser is idle),
 * so the first paint does not pay for code, styles and images of sections below the fold.
 */
function DeferredSection({ id, component: Section, minHeight = '100vh', idleDelay = 0 }) {
    const placeholderRef = useRef(null);
    const shouldMount = useDeferredMount(placeholderRef, { idleDelay });
    const skipEntrances = useMediaQuery(SKIP_ENTRANCES_QUERY);

    if (!shouldMount) return <SectionPlaceholder ref={placeholderRef} id={id} minHeight={minHeight} />;

    return (
        <SectionErrorBoundary sectionId={id} fallback={<div id={id} />}>
            <Suspense fallback={<SectionPlaceholder id={id} minHeight={minHeight} />}>
                <NoEntranceAnimations enabled={skipEntrances}>
                    <Section />
                </NoEntranceAnimations>
            </Suspense>
        </SectionErrorBoundary>
    );
}

export default DeferredSection;
