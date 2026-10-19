import { useEffect, useState } from 'react';
import { whenIdle } from '../utils/whenIdle';
import { MOUNT_ALL_EVENT } from '../utils/deferredMount';

/**
 * Tells a placeholder when its real content should mount: as soon as it gets close to the
 * viewport, when someone navigates to a section (MOUNT_ALL_EVENT), or, if the visitor never
 * scrolls there, during an idle moment after load.
 */
export function useDeferredMount(targetRef, { rootMargin = '600px 0px', idleDelay = 0 } = {}) {
    const [shouldMount, setShouldMount] = useState(false);

    useEffect(() => {
        if (shouldMount) return undefined;
        const target = targetRef.current;
        const mount = () => setShouldMount(true);

        const observer = 'IntersectionObserver' in window
            ? new IntersectionObserver((entries) => entries.some((entry) => entry.isIntersecting) && mount(), { rootMargin })
            : null;
        if (observer && target) observer.observe(target);

        const cancelIdle = whenIdle(mount, { delay: idleDelay });
        window.addEventListener(MOUNT_ALL_EVENT, mount);

        return () => {
            observer?.disconnect();
            cancelIdle();
            window.removeEventListener(MOUNT_ALL_EVENT, mount);
        };
    }, [shouldMount, targetRef, rootMargin, idleDelay]);

    return shouldMount;
}
