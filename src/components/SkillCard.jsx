export default function SkillCard({ darkMode, image, name }) {
    return (
        <div className={`bg-gradient-to-r ${darkMode ? 'from-slate-800 to-slate-700 border-slate-600' : 'from-slate-300 to-slate-200 border-slate-400'} rounded border hover:rotate-3 transition`}>
            <div className="p-8 pb-0 flex justify-center">
                <img src={"/icons/" + image + ".svg"} alt={name} className="w-24" />
            </div>
            <div className="flex items-center justify-center py-5 text-lg font-semibold">
                <h5>{name}</h5>
            </div>
        </div>
    )
}