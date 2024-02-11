import Educations from "./Educations";
import Experiences from "./Experiences";

export default function About({ darkMode }) {
    return (
        <div className='max-w-screen-md min-h-screen mx-auto px-4 py-16 md:px-0'>
            <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>About Me</h2>
            <p className='pt-5 text-justify md:text-center text-lg'>Nama saya Yudis Sutisna biasa di panggil Hanep. Saya seorang siswa yang sedang bersekolah di SMK Al Huda Sariwangi dan mengambil jurusan Rekayasa Perangkat Lunak. Saat ini saya sedang belajar hal-hal seputar ilmu komputer khususnya di bidang Web Programming.</p>
            <Educations darkMode={darkMode} />
            <Experiences darkMode={darkMode} />
        </div>
    )
}