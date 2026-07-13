import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import { LazyMotion, domAnimation } from 'motion/react'

const HomePage = lazy(() => import('./pages/Home/HomePage.jsx'))
const PortifolioPage = lazy(() => import('./pages/PortifolioPage/PortifolioPage.jsx'))

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}/>
      <Router>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/portifolio" element={<PortifolioPage/>} />
            </Routes>
          </Suspense>
      </Router>
    </LazyMotion>
  )
}

export default App;
