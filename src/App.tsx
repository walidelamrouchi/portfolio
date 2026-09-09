
import { SiteHeader } from './components/SiteHeader';
import SmoothScroll from './components/ui/smooth-scroll';
import Hero  from './sections/Hero';
import './App.css'
import  About  from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
 
  return (
    <SmoothScroll>
      <SiteHeader />
      <div id="main">
        <div className="relative">
          <div className="sticky top-0 z-0 h-screen w-full overflow-hidden bg-black">
            <Hero />
          </div>
          <div className="relative z-10">
            <About />
          </div>
        </div>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
