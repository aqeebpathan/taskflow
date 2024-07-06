/**
 * TopStatus component displays a summary of completed tasks compared to total tasks.
 *
 * @param {Object} props - Component props.
 * @param {number} props.totalTask - Total number of tasks.
 * @param {number} props.completedTask - Number of tasks completed.
 * @returns {JSX.Element} TopStatus component JSX.
 */

function TopStatus({ totalTask, completedTask }) {
  return (
    <div className="flex border-2 border-[#605a50] rounded-[2rem] px-10 py-7 sm:px-14 sm:py-8 mt-4 mx-4">
      <div className="flex-1">
        <h1 className="text-2xl sm:text-3xl mt-8">Task Done</h1>
        <p className="text-sm futura-light tracking-[5px]">Keep it up</p>
      </div>
      <div className="flex justify-center items-center bg-[#ff5631] rounded-full h-32 w-32 sm:h-36 sm:w-36 text-[#0d0d0d] text-4xl tracking-widest ">
        <p>
          {completedTask}/{totalTask}
        </p>
      </div>
    </div>
  );
}

export default TopStatus;
