

import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import DownloadResume from './components/DownloadResume'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Certificates from './components/Certificates'
// import Technologies from './components/Education'
import Education from './components/Education'
import TechnicalCoursesandTraining from './components/TechnicalCoursesandTraining'


function App() {


  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
     <div className='fixed top-0 -z-10 h-full w-full'>

     <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
     </div>
      <div className='container mx-auto px-8'>
      <Navbar/>
      <Hero id="hero"/>
      <About id="about" />
      <DownloadResume/>
      <Education id="education" />
      <Experience d="experience" />
      <Certificates/>
      <TechnicalCoursesandTraining/>
      <Contact/>
      </div>
      

    </div>
  )
}

export default App
