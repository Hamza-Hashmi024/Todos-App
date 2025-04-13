import { useEffect, useState } from "react";
import { GrTasks } from "react-icons/gr";
import TodoForm from "./Components/Todos/TodoForm";
import DelleteAllButton from "./Button/DeleteAllButton";
import EditButton from "./Button/EditButton";
import  DeleteButton  from "./Button/DeleteButton";

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
                 <DeleteButton
                  onClick={() => handleDelete(item)}
                  children="Delete"/>
                <EditButton />
               
              </div>
            </li>
          ))}
        </ul>

        {task.length > 0 && (
          <div className="flex justify-center">
            <DelleteAllButton onClick={handleDeleteAll} children="Delete All" /> 
          </div>
        )}
      </section>
    </div>
  );
};
