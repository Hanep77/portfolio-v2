import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import FooterLinks from "./FooterLinks";

export default function Footer({ darkMode }) {
    return (
        <footer className="bg-gray-950 text-slate-400">
            <div className="mx-auto w-full max-w-screen-md px-4 md:px-0 py-6 lg:py-8">
                <div className="flex justify-between">
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-2xl font-bold text-slate-100">Hanep</h1>
                    </div>
                    <FooterLinks />
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="flex justify-between">
                    <span className="text-sm">© 2024 Hanep
                    </span>
                    <div className="flex gap-4">
                        <a href="https://web.facebook.com/hanep.hanep.378?_rdc=1&_rdr" className="hover:text-slate-300"><FaFacebook /></a>
                        <a href="https://www.instagram.com/hanep77/" className="hover:text-slate-300"><FaInstagram /></a>
                        <a href="https://twitter.com/yudis_aka_hanep" className="hover:text-slate-300"><FaTwitter /></a>
                        <a href="https://github.com/Hanep77" className="hover:text-slate-300"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </footer >
    )
}