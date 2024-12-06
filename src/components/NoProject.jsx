import Button from "./Button";
import taskSheet from "../assets/no-projects.png"

export default function NoProject({onAdd}) {
    return <div className="mt-24 text-center w-2/3">
        <img src={taskSheet} alt="Task sheet with no tasks" className="w-16 h-16 object-contain  mx-auto"/>
        <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
        <p className="text-stone-400 mb-4">Please select a project or create a new one</p>
        <p className="mt-8">
            <Button onClick={onAdd}>Create New Project</Button>
        </p>
    </div>
} 