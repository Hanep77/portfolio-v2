import GoDown from "./GoDown";

export default function Hero({ darkMode }) {
    return (
        <div className='max-w-screen-md min-h-screen mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-0 gap-4 pt-20 md:pt-16'>
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
    )
}