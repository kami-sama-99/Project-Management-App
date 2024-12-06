import Button from "./Button";

export default function Sidebar({onAdd, projects, onSelectProject, selectedProjectId}) {
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
        <div>
            <Button onClick={onAdd}>+ Add project</Button>
            <ul className="mt-8">
                {projects.map(project => {
                    let cssClass = "w-full px-2 py-1 text-left rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
                    if (selectedProjectId === project.id) {
                        cssClass += " bg-stone-800 text-stone-200"
                    } else {
                        cssClass += " text-stone-400"
                    }
                    return (
                    <li key={project.id}>
                        <button className={cssClass} onClick={() => onSelectProject(project.id)}>{project.title}</button>
                    </li>)})
                }
            </ul>
        </div>
    </aside>
}