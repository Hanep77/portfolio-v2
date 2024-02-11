import { useState } from 'react'
import Navbar from './components/Navbar'
import GoDown from './components/GoDown';
import { PiStudent, PiStudentBold } from "react-icons/pi";

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
          <div className='max-w-screen-md min-h-screen mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-0 gap-4'>
            <div className='md:w-2/3 flex flex-col items-center md:items-start'>
              <p className='text:lg md:text-xl'>Hi, my name is...</p>
              <h1 className={`text-5xl md:text-7xl font-bold mt-1 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Yudis Sutisna</h1>
              <p className={`${darkMode ? 'text-orange-500' : 'text-orange-700'} mt-2 text-lg md:text-2xl font-medium`}>Welcome to my portfolio website</p>
              <GoDown darkMode={darkMode} />
            </div>
            <div className='flex md:w-1/3 justify-end items-center'>
              <div className='w-48 md:w-60 rounded-full overflow-hidden border-4 border-orange-700'>
                <img src="/image/me.jpg" alt='gw' />
              </div>
            </div>
          </div>
        </section>

        <section id='about'>
          <div className='max-w-screen-md min-h-screen mx-auto px-4 py-16 md:px-0'>
            <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>About Me</h2>
            <p className='pt-5 text-justify md:text-center text-lg'>Nama saya Yudis Sutisna biasa di panggil Hanep. Saya seorang siswa yang sedang bersekolah di SMK Al Huda Sariwangi dan mengambil jurusan Rekayasa Perangkat Lunak. Saat ini saya sedang belajar hal-hal seputar ilmu komputer khususnya di bidang Web Programming.</p>
            <div className='mt-12 flex gap-8 flex-col md:flex-row'>
              <div className='md:w-1/2'>
                <h2 className={`text-3xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Education</h2>
                <div className='border-l-2 border-orange-700 px-6 relative mt-5 pb-5 mx-2'>
                  <div className='w-6 h-6 bg-orange-700 text-slate-100 absolute -top-0 -left-3 rounded-full flex items-center justify-center'><PiStudentBold /></div>
                  <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>SDN 2 Salawu</h4>
                  <p className='text-sm'>2012 - 2018</p>
                </div>

                <div className='border-l-2 border-orange-700 px-6 relative pb-5 mx-2'>
                  <div className='w-6 h-6 bg-orange-700 text-slate-100 absolute -top-0 -left-3 rounded-full flex items-center justify-center'><PiStudentBold /></div>
                  <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>SMPN 2 Sariwangi</h4>
                  <p className='text-sm'>2018 - 2021</p>
                </div>

                <div className='border-l-2 border-orange-700 px-6 relative mx-2'>
                  <div className='w-6 h-6 bg-orange-700 text-slate-100 absolute -top-0 -left-3 rounded-full flex items-center justify-center '><PiStudentBold /></div>
                  <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>SMK AL-HUDA Sariwangi</h4>
                  <p>Rekayasa Perangkat Lunak</p>
                  <p className='text-sm'>2012 - 2018</p>
                </div>
              </div>
              <div className='text-9xl flex justify-center items-center md:w-1/2 text-orange-700 py-8 border-4 rounded-md border-orange-700'><PiStudent /></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
