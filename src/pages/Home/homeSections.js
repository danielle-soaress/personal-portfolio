import { lazyWithRetry } from '../../utils/lazyWithRetry';

// Sections below the hero, in page order. Each one is its own chunk (code, styles and images)
// and mounts when it nears the viewport or during idle time, one after another.
// `minHeight` approximates the real section so the page keeps its length before it loads.
export const deferredHomeSections = [
    { id: 'about_me', minHeight: '100vh', component: lazyWithRetry(() => import('./sections/aboutMe/AboutMeSection.jsx')) },
    { id: 'experience', minHeight: '250vh', component: lazyWithRetry(() => import('./sections/experience/ExperienceSection.jsx')) },
    { id: 'education', minHeight: '100vh', component: lazyWithRetry(() => import('./sections/education/EducationSection.jsx')) },
    { id: 'achievements', minHeight: '100vh', component: lazyWithRetry(() => import('./sections/achievements/AchievementsSection.jsx')) },
    { id: 'portifolio', minHeight: '200vh', component: lazyWithRetry(() => import('./sections/projects/ProjectsSection.jsx')) },
    { id: 'skills', minHeight: '100vh', component: lazyWithRetry(() => import('./sections/skills/SkillsSection.jsx')) },
    { id: 'contact_me', minHeight: '200vh', component: lazyWithRetry(() => import('./sections/contactMe/ContactMeSection.jsx')) },
];

// Gap between idle mounts so a phone never builds several heavy sections in the same frame
export const IDLE_MOUNT_STEP_MS = 350;
