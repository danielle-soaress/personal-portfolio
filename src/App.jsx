import HomePage from './pages/Home/HomePage.jsx'
import PortifolioPage from './pages/PortifolioPage/PortifolioPage.jsx'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import { LazyMotion, domAnimation } from 'motion/react'

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}/>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/portifolio" element={<PortifolioPage/>} />
          </Routes>
      </Router>
    </LazyMotion>
  )
}

export default App;
