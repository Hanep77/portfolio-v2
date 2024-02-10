import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function handleToggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-200 text-slate-800'} transition`}>
      <Navbar darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />
      <main>
        <section id='home' className='min-h-screen'>

        </section>
      </main>
    </div>
  )
}

export default App
