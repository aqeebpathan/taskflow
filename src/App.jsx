import { useState } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TopStatus from "./components/TopStatus";

function App() {
  const [tasks, setTasks] = useState([]);

  /**
   * Function to add a new task to the tasks list.
   * @param {string} task - The task name or description to add.
   */
  function addTask(task) {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, taskName: task, status: false, isEditing: false },
    ]);
  }

  /**
   * Function to edit an existing task in the tasks list.
   * @param {string} editedTask - The edited task name or description.
   * @param {number} id - The ID of the task to edit.
   */
  function editTask(editedTask, id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              taskName: editedTask,
              isEditing: !task.isEditing,
            }
          : task
      )
    );
  }

  /**
   * Function to toggle the status (completed or not) of a task.
   * @param {number} id - The ID of the task to toggle status.
   */
  function toggleStatus(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  }

  /**
   * Function to delete a task from the tasks list.
   * @param {number} id - The ID of the task to delete.
   */
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  /**
   * Function to set a task into editing mode.
   * @param {number} id - The ID of the task to set into editing mode.
   */
  function setEdit(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  }

  // Calculate total and completed tasks for status summary
  const totalTask = tasks.length;
  const completedTask = tasks.reduce(
    (count, task) => (task.status ? count + 1 : count),
    0
  );

  return (
    <>
      <Navbar />
      <main className="max-w-[512px] mx-auto">
        <TopStatus totalTask={totalTask} completedTask={completedTask} />
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleStatus={toggleStatus}
          editTask={editTask}
          deleteTask={deleteTask}
          setEdit={setEdit}
        />
      </main>
    </>
  );
}

export default App;
