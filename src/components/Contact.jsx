import { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaRegCheckCircle, FaTwitter } from "react-icons/fa";

export default function ({ darkMode }) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbykQk5JjTaDOPXOQKCrY5rWmmY2G6Awl2qbI0q_90NR9s2PgRpT1gYW_3ja05oPVsjN/exec'

    const [loading, setLoading] = useState(false)
    const [successAlert, setSuccessAlert] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        await fetch(scriptURL, { method: 'POST', body: new FormData(e.target) })
            .then(response => {
                setLoading(false)
                e.target.reset()
                setSuccessAlert(true)
            })
            .catch(error => {
                setLoading(false)
            })
    }

    function closeSuccessAlert() {
        setSuccessAlert(false)
    }

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

            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                <div className={`h-10 bg-green-500 bg-opacity-30 flex items-center justify-between px-2 rounded border border-green-800 mb-2 ${!successAlert && "hidden"}`}>
                    <div className="flex items-center gap-2">
                        <FaRegCheckCircle /> <h4>Pesan berhasil dikirim</h4>
                    </div>
                    <button type="button" className="px-2 hover:text-slate-300" onClick={closeSuccessAlert}>X</button>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-5">
                    <div className="flex flex-col gap-2 md:w-1/2">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="contoh@gmail.com" className={`h-10 rounded px-2 border ${darkMode ? 'bg-slate-800 border-slate-600' : 'text-slate-800 border-slate-400'}`} required />
                    </div>
                    <div className="flex flex-col gap-2 md:w-1/2">
                        <label htmlFor="name">Nama</label>
                        <input type="text" id="name" name="nama" placeholder="Nama anda" className={`h-10 rounded px-2 border ${darkMode ? 'bg-slate-800 border-slate-600' : 'text-slate-800 border-slate-400'}`} required />
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label htmlFor="pesan">Pesan</label>
                    <textarea name="pesan" id="pesan" placeholder="Tuliskan pesan anda disini" className={`h-32 rounded p-2 border ${darkMode ? 'bg-slate-800 border-slate-600' : 'text-slate-800 border-slate-400'}`} required></textarea>
                </div>
                <button type="submit" className={`px-6 py-2 mt-4 bg-orange-700 hover:bg-orange-800 text-white rounded ${loading && "hidden"}`}>Kirim</button>
                <button type="button" className={`px-6 py-2 mt-4 bg-orange-900 text-white rounded flex items-center gap-2 ${!loading && "hidden"}`}>Loading <div className="w-6 h-6 border-2 border-x-transparent animate-spin rounded-full"></div></button>
            </form>
        </div>
    )
}