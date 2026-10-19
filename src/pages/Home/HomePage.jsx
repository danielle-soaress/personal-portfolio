import './HomePage.scss'
import Navbar from '../../components/navbar/Navbar.jsx'
import DeferredSection from '../../components/deferredSection/DeferredSection.jsx'
import IntroductionSection from './sections/introduction/IntroductionSection.jsx'
import { deferredHomeSections, IDLE_MOUNT_STEP_MS } from './homeSections.js'

function HomePage() {
  return (
    <main className="main">
      <Navbar/>
      <div className="main_container">
        {/* The hero renders immediately; everything below it loads on demand */}
        <IntroductionSection/>
        {deferredHomeSections.map(({ id, component, minHeight }, index) => (
          <DeferredSection
            key={id}
            id={id}
            component={component}
            minHeight={minHeight}
            idleDelay={(index + 1) * IDLE_MOUNT_STEP_MS}
          />
        ))}
      </div>
    </main>
  )
}

export default HomePage;
