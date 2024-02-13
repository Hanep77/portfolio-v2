import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

export default function Projects({ darkMode }) {
    return (
        <div className='max-w-screen-md min-h-screen mx-auto px-4 py-16 md:px-0'>
            <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Projects</h2>
            <div className="grid md:grid-cols-2 mt-8 gap-5">

                {/* NEPBLOG */}
                <div className={`bg-gradient-to-r border ${darkMode ? 'from-slate-700 to-slate-800 border-slate-600' : 'from-slate-300 to-slate-200 border-slate-400'} rounded-md overflow-hidden saturate-50 hover:saturate-100 transition`}>
                    <div className="w-full h-56">
                        <img src="/image/projects/nepblog.png" alt="nepblog" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>NepBlog</h4>
                            <div className="flex gap-2 text-xl">
                                <a target="_blank" href="https://github.com/Hanep77/nepblog" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><FaGithub /></a>
                            </div>
                        </div>
                        <p>Website blog untuk saya belajar nulis dan beropini</p>
                        <div className="flex gap-4">
                            <img src="/icons/laravel.svg" alt="laravel" className="w-8" />
                            <img src="/icons/tailwind.svg" alt="tailwind" className="w-8" />
                        </div>
                    </div>
                </div>

                {/* NEPNOTE */}
                <div className={`bg-gradient-to-r border ${darkMode ? 'from-slate-700 to-slate-800 border-slate-600' : 'from-slate-300 to-slate-200 border-slate-400'} rounded-md overflow-hidden saturate-50 hover:saturate-100 transition`}>
                    <div className="w-full h-56">
                        <img src="/image/projects/nepnote.png" alt="nepnote" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>NepNote</h4>
                            <div className="flex gap-2 text-xl">
                                <a target="_blank" href="https://github.com/Hanep77/NepNote" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><FaGithub /></a>
                            </div>
                        </div>
                        <p>Digunakan untuk menyimpan catatan-catatan</p>
                        <div className="flex gap-4">
                            <img src="/icons/laravel.svg" alt="laravel" className="w-8" />
                            <img src="/icons/bootstrap.svg" alt="bootstrap" className="w-8" />
                        </div>
                    </div>
                </div>

                {/* JADWAL PELAJARAN */}
                <div className={`bg-gradient-to-r border ${darkMode ? 'from-slate-700 to-slate-800 border-slate-600' : 'from-slate-300 to-slate-200 border-slate-400'} rounded-md overflow-hidden saturate-50 hover:saturate-100 transition`}>
                    <div className="w-full h-56">
                        <img src="/image/projects/jadwalpelajaran.png" alt="jadwal pelajaran" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>Jadwal pelajaran</h4>
                            <div className="flex gap-2 text-xl">
                                <a target="_blank" href="https://github.com/Hanep77/jadwal-pelajaran" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><FaGithub /></a>
                                <a target="_blank" href="https://jadwal-pelajaran-rpl.vercel.app/" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><IoIosLink /></a>
                            </div>
                        </div>
                        <p>Jadwal pelajaran kelas XI RPL A Tahun ajaran 2022/2023 di SMK Al-Huda Sariwangi</p>
                        <div className="flex gap-4">
                            <img src="/icons/javascript.svg" alt="javascript" className="w-8" />
                            <img src="/icons/tailwind.svg" alt="tailwind" className="w-8" />
                        </div>
                    </div>
                </div>

                {/* CATATAN BELANJA */}
                <div className={`bg-gradient-to-r border ${darkMode ? 'from-slate-700 to-slate-800 border-slate-600' : 'from-slate-300 to-slate-200 border-slate-400'} rounded-md overflow-hidden saturate-50 hover:saturate-100 transition`}>
                    <div className="w-full h-56">
                        <img src="/image/projects/catatan-belanja.png" alt="catatan belanja" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>Catatan belanja</h4>
                            <div className="flex gap-2 text-xl">
                                <a target="_blank" href="https://github.com/Hanep77/catatan-belanja" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><FaGithub /></a>
                                <a target="_blank" href="https://nepshoppinglist.vercel.app/" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><IoIosLink /></a>
                            </div>
                        </div>
                        <p>Biar gak lupa saat belanja ke warung, mungkin bisa pakai ini</p>
                        <div className="flex gap-4">
                            <img src="/icons/react.svg" alt="react js" className="w-8" />
                            <img src="/icons/tailwind.svg" alt="tailwindcss" className="w-8" />
                        </div>
                    </div>
                </div>

                {/* YAYASAN */}
                <div className={`bg-gradient-to-r border ${darkMode ? 'from-slate-700 to-slate-800 border-slate-600' : 'from-slate-300 to-slate-200 border-slate-400'} rounded-md overflow-hidden saturate-50 hover:saturate-100 transition`}>
                    <div className="w-full h-56">
                        <img src="/image/projects/foundation.png" alt="yayasan sekolah" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>Landing page yayasan</h4>
                            <div className="flex gap-2 text-xl">
                                <a target="_blank" href="https://github.com/Hanep77/foundation-landing-page" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><FaGithub /></a>
                                <a target="_blank" href="https://foundation-landing-page-eta.vercel.app/" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><IoIosLink /></a>
                            </div>
                        </div>
                        <p>Website landing page untuk yayasan sekolah</p>
                        <div className="flex gap-4">
                            <img src="/icons/next-js.svg" alt="next js" className="w-8" />
                            <img src="/icons/tailwind.svg" alt="tailwindcss" className="w-8" />
                        </div>
                    </div>
                </div>

                {/* PENGADUAN MASYARAKAT */}
                <div className={`bg-gradient-to-r border ${darkMode ? 'from-slate-700 to-slate-800 border-slate-600' : 'from-slate-300 to-slate-200 border-slate-400'} rounded-md overflow-hidden saturate-50 hover:saturate-100 transition`}>
                    <div className="w-full h-56">
                        <img src="/image/projects/pengaduan-masyarakat.png" alt="pengaduan masyarakat" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>Pengaduan masyarakat</h4>
                            <div className="flex gap-2 text-xl">
                                <a target="_blank" href="https://github.com/Hanep77/app-pengaduan-masyarakat" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><FaGithub /></a>
                                <a target="_blank" href="https://pengaduanmasyarakatyudis.000webhostapp.com/login" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><IoIosLink /></a>
                            </div>
                        </div>
                        <p>Website untuk masyarakat yang ingin menyampaikan keluhannya</p>
                        <div className="flex gap-4">
                            <img src="/icons/laravel.svg" alt="laravel" className="w-8" />
                            <img src="/icons/bootstrap.svg" alt="bootstrap" className="w-8" />
                        </div>
                    </div>
                </div>

                {/* PORTFOLIO V1 */}
                <div className={`bg-gradient-to-r border ${darkMode ? 'from-slate-700 to-slate-800 border-slate-600' : 'from-slate-300 to-slate-200 border-slate-400'} rounded-md overflow-hidden saturate-50 hover:saturate-100 transition`}>
                    <div className="w-full h-56">
                        <img src="/image/projects/portfoliov1.png" alt="portfolio v1" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>Portfolio v1</h4>
                            <div className="flex gap-2 text-xl">
                                <a target="_blank" href="https://github.com/Hanep77/hanep77.github.io" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><FaGithub /></a>
                                <a target="_blank" href="https://hanep77.github.io/" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><IoIosLink /></a>
                            </div>
                        </div>
                        <p>Website portfolio saya versi 1</p>
                        <div className="flex gap-4">
                            <img src="/icons/bootstrap.svg" alt="bootstrap" className="w-8" />
                        </div>
                    </div>
                </div>

                {/* PORTFOLIO V2 */}
                <div className={`bg-gradient-to-r border ${darkMode ? 'from-slate-700 to-slate-800 border-slate-600' : 'from-slate-300 to-slate-200 border-slate-400'} rounded-md overflow-hidden saturate-50 hover:saturate-100 transition`}>
                    <div className="w-full h-56">
                        <img src="/image/projects/portfoliov2.png" alt="portfolio v2" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>Portfolio v2</h4>
                            <div className="flex gap-2 text-xl">
                                <a target="_blank" href="https://github.com/Hanep77/portfolio-v2" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><FaGithub /></a>
                                <a target="_blank" href="https://hanep-portfolio.vercel.app/" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><IoIosLink /></a>
                            </div>
                        </div>
                        <p>Website portfolio saya versi 2</p>
                        <div className="flex gap-4">
                            <img src="/icons/react.svg" alt="react js" className="w-8" />
                            <img src="/icons/tailwind.svg" alt="tailwind" className="w-8" />
                        </div>
                    </div>
                </div>

                {/* SOCIAL NETWORK */}
                <div className={`bg-gradient-to-r border ${darkMode ? 'from-slate-700 to-slate-800 border-slate-600' : 'from-slate-300 to-slate-200 border-slate-400'} rounded-md overflow-hidden saturate-50 hover:saturate-100 transition`}>
                    <div className="w-full h-56">
                        <img src="/image/projects/social-network.png" alt="social network" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>Social network</h4>
                            <div className="flex gap-2 text-xl">
                                <a target="_blank" href="https://github.com/Hanep77/social-nepwork" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><FaGithub /></a>
                            </div>
                        </div>
                        <p>Website Social media sederhana yang memiliki fitur fitur dasar seperti like, komen, posting dll. ini projek mangkrak btw</p>
                        <div className="flex gap-4">
                            <img src="/icons/laravel.svg" alt="laravel" className="w-8" />
                            <img src="/icons/tailwind.svg" alt="tailwind" className="w-8" />
                            <img src="/icons/javascript.svg" alt="javascript" className="w-8" />
                        </div>
                    </div>
                </div>

                {/* TODOLIST */}
                <div className={`bg-gradient-to-r border ${darkMode ? 'from-slate-700 to-slate-800 border-slate-600' : 'from-slate-300 to-slate-200 border-slate-400'} rounded-md overflow-hidden saturate-50 hover:saturate-100 transition`}>
                    <div className="w-full h-56">
                        <img src="/image/projects/todolist.png" alt="todolist" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h4 className={`${darkMode ? 'text-slate-100' : 'text-slate-800'} text-xl font-semibold`}>Todolist</h4>
                            <div className="flex gap-2 text-xl">
                                <a target="_blank" href="https://github.com/Hanep77/todolist-laravel" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><FaGithub /></a>
                                <a target="_blank" href="https://neptodo.000webhostapp.com/" className={`${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-800'}`}><IoIosLink /></a>
                            </div>
                        </div>
                        <p>Website sederhana untuk mengelola aktifitas sehari-hari anda</p>
                        <div className="flex gap-4">
                            <img src="/icons/laravel.svg" alt="laravel" className="w-8" />
                            <img src="/icons/bootstrap.svg" alt="bootstrap" className="w-8" />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}