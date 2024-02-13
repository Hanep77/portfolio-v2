export default function FooterLinks() {
    return (
        <div className="flex gap-8 md:gap-20">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Navigation</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-2">
                    <li>
                        <a href="#home" className="hover:underline">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:underline">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:underline">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:underline">Project</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow me</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-2">
                    <li>
                        <a target="_blank" href="https://web.facebook.com/hanep.hanep.378?_rdc=1&_rdr" className="hover:underline">Facebook</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/hanep77/" className="hover:underline">Instagram</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://twitter.com/yudis_aka_hanep" className="hover:underline">Twitter</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/Hanep77" className="hover:underline">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}