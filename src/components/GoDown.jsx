import { FaArrowDown } from "react-icons/fa";

export default function ({ darkMode }) {
    return (
        <div className="flex flex-col items-start gap-1 translate-y-8 text-slate-200">
            <div className='flex flex-col items-center'>
                <a href="#about" className="w-16 h-16 flex justify-center items-center bg-orange-700 rounded-full animate-bounce text-2xl">
                    <FaArrowDown />
                </a>
                <p className={`tracking-wider text-xs ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>Discover More</p>
            </div>
        </div>
    )
}