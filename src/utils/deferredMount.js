// Broadcast used to mount every deferred section at once, e.g. right before jumping to one of them
export const MOUNT_ALL_EVENT = 'deferred-sections:mount-all';

export function requestMountAll() {
    window.dispatchEvent(new Event(MOUNT_ALL_EVENT));
}
