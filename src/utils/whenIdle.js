// Runs `callback` once the page has loaded, `delay` ms have passed and the main thread is idle.
// Returns a function that cancels whatever is still pending.
export function whenIdle(callback, { delay = 0, timeout = 2000 } = {}) {
    let timer = 0;
    let idleHandle = 0;
    let cancelled = false;

    const requestIdle = window.requestIdleCallback
        ? (fn) => window.requestIdleCallback(fn, { timeout })
        : (fn) => window.setTimeout(fn, 1);
    const cancelIdle = window.cancelIdleCallback || window.clearTimeout;

    const schedule = () => {
        timer = window.setTimeout(() => {
            if (!cancelled) idleHandle = requestIdle(() => !cancelled && callback());
        }, delay);
    };

    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });

    return () => {
        cancelled = true;
        window.removeEventListener('load', schedule);
        window.clearTimeout(timer);
        if (idleHandle) cancelIdle(idleHandle);
    };
}
