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
    return window.innerWidth <= 768 || window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
        window.matchMedia('(hover: none) and (pointer: coarse)').matches
      );
    };

    window.addEventListener('resize', checkMobile);
    const touchMedia = window.matchMedia('(hover: none) and (pointer: coarse)');
    touchMedia.addEventListener?.('change', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      touchMedia.removeEventListener?.('change', checkMobile);
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        {!isMobile && (
          <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }} />
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
