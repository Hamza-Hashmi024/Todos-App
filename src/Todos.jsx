import { useEffect, useState } from "react";
import TodoForm from "./Components/Todos/TodoForm";
import TodoList from "./Components/Todos/TodoList";

export const Todos = () => {
  const [task, setTask] = useState([]);
  const [date, setDate] = useState("");

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
      <section className="bg-[#008080] p-6 rounded-md shadow-md">
        <header className="text-center text-[#DDDBCB]">
          <h1 className="text-2xl font-bold mb-2">Todos App</h1>
          <h2 className="text-sm">Date: {date}</h2>
        </header>
      </section>

      <section className=" rounded-md ">
        <TodoForm setTask={setTask} />
      </section>

      <section className="bg-[#008080]  rounded-md shadow-md space-y-4">
        <TodoList task={task} setTask={setTask} />
      </section>
    </div>
  );
};
