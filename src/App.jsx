import ScrollProgress from './components/layout/ScrollProgress'
import AmbientBackground from './components/ui/AmbientBackground'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/ui/CustomCursor'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'

function App() {
  return (
        <>
      <AmbientBackground />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App