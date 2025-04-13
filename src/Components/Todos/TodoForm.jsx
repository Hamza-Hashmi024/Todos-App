import { useState } from "react";
import { Todos } from "../../Todos";

const TodoForm = ({ setTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <input
            className="flex-1 border-2 border-indigo-600 rounded-md p-2 bg-[#080808] text-[#DDDBCB] focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="text"
            placeholder="Enter your task"
            autoComplete="off"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            type="submit"
            className="text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-200"
          >
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;