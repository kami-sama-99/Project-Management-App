import Input from "./Input"
import { useRef } from "react"
import Modal from "./ErrorModal";

export default function NewProject({addProject, onCancel}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        addProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        })
    }

    return <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-700 mb-4">Please enter valid values for all inputs</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                </li>
                <li>
                    <button 
                    className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                    onClick={handleSave}
                    >
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type='text' label='Title' ref={title}/>
                <Input type='text' label='Description' textarea ref={description}/>
                <Input type='date' label='Due Date' ref={dueDate}/>
            </div>
        </div>
    </>
}