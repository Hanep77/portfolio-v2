import { PiStudent, PiStudentBold } from "react-icons/pi";

export default function Educations({ darkMode }) {
    return (
        <div className='mt-12 flex gap-8 flex-col md:flex-row'>
            <div className='md:w-1/2'>
                <h2 className={`text-3xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Education</h2>
                <div className='border-l-2 border-orange-700 px-6 relative mt-5 pb-5 mx-3'>
                    <div className='w-6 h-6 bg-orange-700 text-slate-100 absolute -top-0 -left-3 rounded-full flex items-center justify-center'><PiStudentBold /></div>
                    <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>SDN 2 Salawu</h4>
                    <p className='text-sm'>2012 - 2018</p>
                </div>

                <div className='border-l-2 border-orange-700 px-6 relative pb-5 mx-3'>
                    <div className='w-6 h-6 bg-orange-700 text-slate-100 absolute -top-0 -left-3 rounded-full flex items-center justify-center'><PiStudentBold /></div>
                    <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>SMPN 2 Sariwangi</h4>
                    <p className='text-sm'>2018 - 2021</p>
                </div>

                <div className='border-l-2 border-orange-700 px-6 relative mx-3'>
                    <div className='w-6 h-6 bg-orange-700 text-slate-100 absolute -top-0 -left-3 rounded-full flex items-center justify-center '><PiStudentBold /></div>
                    <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>SMK AL-HUDA Sariwangi</h4>
                    <p>Rekayasa Perangkat Lunak</p>
                    <p className='text-sm'>2021 - now</p>
                </div>
            </div>
            <div className='text-9xl flex justify-center items-center md:w-1/2 text-orange-700 py-8 border-4 rounded-md border-orange-700'><PiStudent /></div>
        </div>
    )
}