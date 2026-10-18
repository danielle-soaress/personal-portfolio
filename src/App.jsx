import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LazyMotion, domAnimation, MotionConfig } from 'motion/react'

const HomePage = lazy(() => import('./pages/Home/HomePage.jsx'))
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
