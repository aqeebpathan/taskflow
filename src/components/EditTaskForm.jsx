import { useState, useEffect, useRef } from "react";

/**
 * EditTaskForm component renders a form for editing an existing task.
 *
 * @param {Object} props - Component props.
 * @param {function} props.editTask - Function to edit the task.
 * @param {Object} props.curTask - The current task object being edited.
 * @param {number} props.curTask.id - The ID of the task being edited.
 * @param {string} props.curTask.taskName - The name or description of the task being edited.
 * @returns {JSX.Element} EditTaskForm component JSX.
 */

function EditTaskForm({ editTask, curTask }) {
  const [task, setTask] = useState(curTask.taskName);
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input field when the component mounts
    inputRef.current.focus();
  }, []);

  /**
   * Handles form submission to edit the task.
   * @param {Object} e - Event object representing form submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(task, curTask.id);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex bg-[#1e1e1e] px-6 py-4 rounded-xl border-2 border-[#8d8270] mt-6">
        <input
          type="text"
          name="task"
          placeholder="Update your task"
          className="w-full mr-4 bg-[#1e1e1e] outline-none py-1 futura-light tracking-wider placeholder:text-[#6b6358] text-xl"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          ref={inputRef} // Ref to focus on this input element
          required
        />
        <button
          type="submit"
          className="flex justify-center items-center text-[#0d0d0d] bg-[#ff5631] text-sm leading-none px-2 rounded-lg"
          aria-label="Submit Edit"
        >
          Edit
        </button>
      </div>
    </form>
  );
}

export default EditTaskForm;
