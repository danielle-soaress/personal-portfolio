import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LazyMotion, domAnimation, MotionConfig, MotionGlobalConfig } from 'motion/react'

import HomePage from './pages/Home/HomePage.jsx'

// The landing page ships in the entry bundle (no extra round trip before the hero); other routes load on demand
const PortifolioPage = lazy(() => import('./pages/PortifolioPage/PortifolioPage.jsx'))

// Phones: every motion animation (entrances, reveals, hover) jumps straight to its end state.
// Scroll-linked styles still follow the scroll; sections that relied on them have phone layouts.
if (window.matchMedia('(max-width: 768px)').matches) {
  MotionGlobalConfig.skipAnimations = true
}

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
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
