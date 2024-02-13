import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ({ darkMode }) {
    return (
        <div className={`max-w-screen-md min-h-screen mx-auto px-4 py-16 md:px-0 text-lg ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            <h2 className="text-3xl font-bold text-center">Contact</h2>

            <div className="my-8">
                <p>Jangan ragu untuk menghubungi saya :</p>
                <div className="flex gap-8 text-sm mt-4">
                    <div className="flex flex-col gap-4">
                        <a href="https://web.facebook.com/hanep.hanep.378?_rdc=1&_rdr" className="hover:text-orange-600 flex gap-1 items-center"><FaFacebook /> Hanep</a>
                        <a href="https://www.instagram.com/hanep77/" className="hover:text-orange-600 flex gap-1 items-center"><FaInstagram /> @hanep77</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="https://twitter.com/yudis_aka_hanep" className="hover:text-orange-600 flex gap-1 items-center"><FaTwitter /> @Yhanep_</a>
                        <a href="https://github.com/Hanep77" className="hover:text-orange-600 flex gap-1 items-center"><FaGithub /> Hanep77</a>
                    </div>
                </div>
            </div>

            <form action="">
                <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-5">
                    <div className="flex flex-col gap-2 md:w-1/2">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="contoh@gmail.com" className={`h-10 rounded px-2 border ${darkMode ? 'bg-slate-800 border-slate-600' : 'text-slate-800 border-slate-400'}`} />
                    </div>
                    <div className="flex flex-col gap-2 md:w-1/2">
                        <label htmlFor="email">Nama</label>
                        <input type="text" id="email" name="email" placeholder="Nama anda" className={`h-10 rounded px-2 border ${darkMode ? 'bg-slate-800 border-slate-600' : 'text-slate-800 border-slate-400'}`} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label htmlFor="message">Pesan</label>
                    <textarea name="message" id="message" placeholder="Tuliskan pesan anda disini" className={`h-32 rounded p-2 border ${darkMode ? 'bg-slate-800 border-slate-600' : 'text-slate-800 border-slate-400'}`}></textarea>
                </div>
                <button type="submit" className="px-6 py-2 mt-4 bg-orange-700 hover:bg-orange-800 text-white rounded">Kirim</button>
            </form>
        </div>
    )
}