import EditTaskForm from "./EditTaskForm";
import TaskItem from "./TaskItem";

/**
 * TaskList component displays a list of tasks, allowing users to toggle task status,
 * edit tasks, delete tasks, and set tasks for editing mode.
 *
 * @param {Object[]} tasks - An array of task objects to display.
 * @param {number} tasks[].id - The unique identifier for the task.
 * @param {string} tasks[].taskName - The name or description of the task.
 * @param {boolean} tasks[].status - The current status of the task (completed or not).
 * @param {boolean} tasks[].isEditing - Indicates whether the task is in edit mode.
 * @param {function} toggleStatus - Function to toggle the status of a task.
 * @param {function} editTask - Function to edit a task.
 * @param {function} deleteTask - Function to delete a task.
 * @param {function} setEdit - Function to set a task into edit mode.
 * @returns {JSX.Element} TaskList component JSX.
 */

function TaskList({ tasks, toggleStatus, editTask, deleteTask, setEdit }) {
  if (tasks.length === 0) {
    return (
      <p className="futura-light text-sm text-center tracking-wider">
        Looks like you've completed all tasks! <br />
        Time to add more.
      </p>
    );
  }

  return (
    <div className="mb-12 px-4">
      {tasks.map((task) =>
        task.isEditing ? (
          <EditTaskForm key={task.id} editTask={editTask} curTask={task} />
        ) : (
          <TaskItem
            key={task.id}
            task={task}
            toggleStatus={toggleStatus}
            setEdit={setEdit}
            deleteTask={deleteTask}
          />
        )
      )}
    </div>
  );
}

export default TaskList;
