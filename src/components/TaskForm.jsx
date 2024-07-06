import { useState } from "react";

/**
 * TaskForm component renders a form for adding new tasks.
 *
 * @param {Object} props - Component props.
 * @param {function} props.addTask - Function to add a new task.
 * @returns {JSX.Element} TaskForm component JSX.
 */

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");

  /**
   * Handles form submission to add a new task.
   * @param {Object} e - Event object representing form submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex my-10 px-8">
        <input
          type="text"
          name="task"
          placeholder="write your next task"
          value={task}
          className="w-full mr-4 bg-[#1e1e1e] rounded-2xl outline-none px-6 py-4 futura-light tracking-wider text-sm placeholder:text-[#6b6358] font-semibold"
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-[#0d0d0d] bg-[#ff5631] rounded-2xl px-4  text-xl leading-none "
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
