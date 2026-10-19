import { lazy } from 'react';

const RELOAD_KEY = 'chunk-reload-at';
const RELOAD_COOLDOWN_MS = 60_000;

function readLastReload() {
    try {
        return Number(sessionStorage.getItem(RELOAD_KEY)) || 0;
    } catch {
        return Date.now();
    }
}

function markReload() {
    try {
        sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
        return true;
    } catch {
        return false;
    }
}

// After a deploy, a tab opened on the previous version asks for chunk files that no longer exist.
// Retry the import once, then reload the page to pick up the new build — at most once per minute,
// so a chunk that is genuinely broken can never cause a reload loop.
export function lazyWithRetry(importer) {
    return lazy(async () => {
        try {
            return await importer().catch(() => importer());
        } catch (error) {
            const canReload = Date.now() - readLastReload() > RELOAD_COOLDOWN_MS && markReload();
            if (canReload) {
                window.location.reload();
                return new Promise(() => {});
            }
            throw error;
        }
    });
}
