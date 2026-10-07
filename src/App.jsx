import { lazy, Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import { LazyMotion, domAnimation, MotionConfig } from 'motion/react'

const HomePage = lazy(() => import('./pages/Home/HomePage.jsx'))
const PortifolioPage = lazy(() => import('./pages/PortifolioPage/PortifolioPage.jsx'))

function App() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768 || ('ontouchstart' in window && window.innerWidth <= 1024);
  });

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    const update = () => {
      setIsMobile(media.matches || ('ontouchstart' in window && window.innerWidth <= 1024));
    };
    media.addEventListener?.('change', update);
    window.addEventListener('resize', update);
    return () => {
      media.removeEventListener?.('change', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion={isMobile ? 'always' : 'user'}>
        {!isMobile && (
          <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }} />
        )}
        <Router>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portifolio" element={<PortifolioPage />} />
            </Routes>
          </Suspense>
        </Router>
      </MotionConfig>
    </LazyMotion>
  )
}

export default App;
