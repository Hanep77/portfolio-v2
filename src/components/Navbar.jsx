import { useState } from "react"

export default function Navbar({ darkMode, onToggleDarkMode }) {
    const [sidebar, setSidebar] = useState(false)

    function handleSidebar() {
        setSidebar(!sidebar)
    }

    return (
        <nav className={`${darkMode ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-400"} border-b-2 sticky top-0 transition`}>
            <div className="h-16 flex justify-between items-center max-w-screen-lg mx-auto px-4 xl:px-0">
                <div>
                    <h1 className="text-2xl font-bold">Hanep</h1>
                </div>
                <div className={`${darkMode ? "bg-slate-800" : "bg-slate-100"} fixed md:static z-30 mt-16 top-0 left-0 bottom-0 right-0 md:mt-0 ${!sidebar && 'translate-x-full'} transition md:translate-x-0 flex`}>
                    <ul className="flex flex-col md:flex-row items-center gap-5 text-lg font-medium px-4 md:px-0 bg-red w-full">
                        <li className="w-full md:w-auto text-center md:text-start">
                            <a href="#" className="hover:text-orange-600 block md:inline w-full border-b md:border-none border-slate-700 p-4 md:p-0">Home</a>
                        </li>
                        <li className="w-full md:w-auto text-center md:text-start">
                            <a href="#about" className="hover:text-orange-600 block md:inline w-full border-b md:border-none border-slate-700 p-4 md:p-0">About</a>
                        </li>
                        <li className="w-full md:w-auto text-center md:text-start">
                            <a href="#skills" className="hover:text-orange-600 block md:inline w-full border-b md:border-none border-slate-700 p-4 md:p-0">Skills</a>
                        </li>
                        <li className="w-full md:w-auto text-center md:text-start">
                            <a href="#projects" className="hover:text-orange-600 block md:inline w-full border-b md:border-none border-slate-700 p-4 md:p-0">Projects</a>
                        </li>
                        <li className="w-full md:w-auto text-center md:text-start">
                            <a href="#contact" className="hover:text-orange-600 block md:inline w-full border-b md:border-none border-slate-700 p-4 md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <button className={`w-12 h-6 px-1 rounded-full transition-all relative flex ${darkMode ? "bg-orange-700" : " bg-slate-400"} items-center`} onClick={onToggleDarkMode}>
                        <span className={`w-4 h-4 bg-white absolute rounded-full ${darkMode && "translate-x-6"} transition`}></span>
                    </button>
                    <button className="flex flex-col gap-[6px] md:hidden" onClick={handleSidebar}>
                        <div className={`w-8 h-[3px] ${darkMode ? "bg-slate-300" : "bg-slate-800"} rounded`}></div>
                        <div className={`w-8 h-[3px] ${darkMode ? "bg-slate-300" : "bg-slate-800"} rounded`}></div>
                        <div className={`w-8 h-[3px] ${darkMode ? "bg-slate-300" : "bg-slate-800"} rounded`}></div>
                    </button>
                </div>
            </div>
        </nav>
    )
}