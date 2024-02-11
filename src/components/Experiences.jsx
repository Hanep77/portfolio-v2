import { MdOutlineWorkOutline } from "react-icons/md";

export default function Experiences({ darkMode }) {
    return (
        <div className='mt-12 flex gap-8 flex-col md:flex-row'>
            <div className='md:w-1/2'>
                <h2 className={`text-3xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Experience</h2>
                <div className='border-l-2 border-orange-700 px-6 relative mt-5 mx-3'>
                    <div className='w-6 h-6 bg-orange-700 text-slate-100 absolute -top-0 -left-3 rounded-full flex items-center justify-center'><MdOutlineWorkOutline /></div>
                    <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>CV Tridaya Mitra Informatika</h4>
                    <p>Web Developer Intern</p>
                    <p className='text-sm'>december 2023 - now</p>
                </div>
            </div>
            <div className='text-9xl flex justify-center items-center md:w-1/2 text-orange-700 py-8 border-4 rounded-md border-orange-700'><MdOutlineWorkOutline /></div>
        </div>
    )
}