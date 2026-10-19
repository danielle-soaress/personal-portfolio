import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LazyMotion, domAnimation, MotionConfig } from 'motion/react'

import HomePage from './pages/Home/HomePage.jsx'

// The landing page ships in the entry bundle (no extra round trip before the hero); other routes load on demand
const PortifolioPage = lazy(() => import('./pages/PortifolioPage/PortifolioPage.jsx'))

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
