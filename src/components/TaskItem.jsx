/**
 * TaskItem component displays an individual task item with options to toggle status,
 * edit task details, and delete the task.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.task - The task object containing task details.
 * @param {number} props.task.id - The unique identifier for the task.
 * @param {string} props.task.taskName - The name or description of the task.
 * @param {boolean} props.task.status - The current status of the task (completed or not).
 * @param {function} props.toggleStatus - Function to toggle the status of the task.
 * @param {function} props.setEdit - Function to set the task into edit mode.
 * @param {function} props.deleteTask - Function to delete the task.
 * @returns {JSX.Element} TaskItem component JSX.
 */

function TaskItem({ task, toggleStatus, setEdit, deleteTask }) {
  return (
    <div className="flex items-center gap-4 bg-[#1e1e1e] px-4 sm:px-6 py-4 rounded-xl border-2 border-[#8d8270] mt-6">
      <button
        onClick={() => toggleStatus(task.id)}
        className={`w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-[#ff5631] flex-shrink-0 ${
          task.status && "bg-[#57cb4c] border-none"
        }`}
        aria-label={task.status ? "Mark as incomplete" : "Mark as complete"}
      ></button>
      <p
        className={`flex-grow text-[18px] sm:text-xl tracking-wide overflow-hidden text-ellipsis whitespace-nowrap ${
          task.status ? "line-through" : ""
        } `}
      >
        {task.taskName}
      </p>

      {!task.status && (
        <button
          onClick={() => setEdit(task.id)}
          aria-label="Edit task"
          className="flex-shrink-0"
        >
          <img src="/edit-icon.svg" alt="edit" className="w-7 sm:w-9" />
        </button>
      )}
      <button
        onClick={() => deleteTask(task.id)}
        aria-label="Delete task"
        className="flex-shrink-0"
      >
        <img src="/delete-icon.svg" alt="delete" className="w-7 sm:w-9" />
      </button>
    </div>
  );
}

export default TaskItem;
