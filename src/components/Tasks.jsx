import NewTask from "./NewTask";

export default function Tasks({ onAdd, onDelete, tasks }) {
    return (
      <section>
        <h1 className="text-3xl font-bold text-stone-600 mb-6">Tasks</h1>
        <NewTask onAdd={onAdd} />
        {tasks.length === 0 && (
          <p className="text-stone-800 my-4">
            This project does not contain any tasks.
          </p>
        )}
        {tasks.length > 0 && (
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map(task => (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => onDelete(task.id)}
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
} 