import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function handleToggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode ? 'bg-slate-900 text-slate-400' : 'bg-slate-200 text-slate-600'} transition`}>
      <Navbar darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />
      <main>
        <section id='home'>
          <Hero darkMode={darkMode} />
        </section>

        <section id='about' className={`${darkMode ? 'bg-slate-800' : 'bg-slate-100'} transition`}>
          <About darkMode={darkMode} />
        </section>

        <section id='skills'>
          <Skills darkMode={darkMode} />
        </section>

        <section id='projects' className={`${darkMode ? 'bg-slate-800' : 'bg-slate-100'} transition`}>
          <Projects darkMode={darkMode} />
        </section>
      </main>
    </div >
  )
}

export default App
