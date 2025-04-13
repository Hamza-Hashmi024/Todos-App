import { useEffect, useState } from "react";
import { GrTasks } from "react-icons/gr";
import TodoForm from "./Components/Todos/TodoForm";

export const Todos = () => {
  const [task, setTask] = useState([]);
  const [date, setDate] = useState("");

  const handleDelete = (value) => {
    const deletedTask = task.filter((item) => item !== value);
    setTask(deletedTask);
  };

  const handleDeleteAll = () => {
    setTask([]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatedDate = now.toLocaleDateString();
      const formatedTime = now.toLocaleTimeString();
      setDate(`${formatedDate} - ${formatedTime}`);
    });
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 space-y-6">
      {/* Header Section */}
      <section className="bg-[#008080] p-6 rounded-md shadow-md">
        <header className="text-center text-[#DDDBCB]">
          <h1 className="text-2xl font-bold mb-2">Todos App</h1>
          <h2 className="text-sm">Date: {date}</h2>
        </header>
      </section>

      {/* Form Section */}
      <section className=" rounded-md ">
        <TodoForm setTask={setTask} />
      </section>

      {/* Tasks Section */}
      <section className="bg-[#008080]  rounded-md shadow-md space-y-4">
        <ul className="space-y-3">
          {task.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-[#005f5f] p-3 rounded-md"
            >
              <div className="flex items-center gap-2 text-[#DDDBCB]">
                <GrTasks />
                <span className="text-base font-semibold">{item}</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete(item)}
                  className="text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-400 font-medium rounded-md text-xs px-4 py-1.5"
                >
                  Delete
                </button>
                <button
                  className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 font-medium rounded-md text-xs px-4 py-1.5"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>

        {task.length > 0 && (
          <div className="flex justify-center">
            <button
              onClick={handleDeleteAll}
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-400 font-medium rounded-md text-sm px-6 py-2"
            >
              Delete All
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
