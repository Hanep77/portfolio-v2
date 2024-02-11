import SkillCard from "./SkillCard";

export default function Skills({ darkMode }) {
    return (
        <div className='max-w-screen-md min-h-screen mx-auto px-4 py-16 md:px-0'>
            <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-8 gap-5">
                <SkillCard darkMode={darkMode} image='html' name='HTML' />
                <SkillCard darkMode={darkMode} image='css' name='CSS' />
                <SkillCard darkMode={darkMode} image='javascript' name='Javascript' />
                <SkillCard darkMode={darkMode} image='php' name='PHP' />
                <SkillCard darkMode={darkMode} image='laravel' name='Laravel' />
                <SkillCard darkMode={darkMode} image='mysql' name='MySQL' />
                <SkillCard darkMode={darkMode} image='bootstrap' name='Bootstrap' />
                <SkillCard darkMode={darkMode} image='tailwind' name='TailwindCSS' />
                <SkillCard darkMode={darkMode} image='react' name='ReactJS' />
                <SkillCard darkMode={darkMode} image='next-js' name='NextJS' />
                <SkillCard darkMode={darkMode} image='git' name='Git' />
            </div>
        </div>
    )
}