import { useState } from "react";
import { GrTasks } from "react-icons/gr";

export const Todos = () => {
  const [inputValue, setInputValue] = useState("");
  const [task ,  setTask] = useState([]);
  const [date ,  setDate] = useState("");



  const handleInputChange = (value) => {
    setInputValue(value);
  };




  const handleSubmit = (e) => {
   e.preventDefault();
  if(!inputValue) return; // Prevent empty tasks
  setTask((prevTask ) => [...prevTask , inputValue]);
   setInputValue("");
}



setInterval(()=>{
    const now = new Date();
    const formatedDate  = now.toLocaleDateString();
    const formatedTime = now.toLocaleTimeString();
    setDate(`${formatedDate} - ${formatedTime}`);
})

  return (
    <>
      <section className="">
        <header>
             <h1> Todos App</h1>
             <h2>  Date {date} - Time  </h2>
        </header>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter your task"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Add Task</button>
          </div>
        </form>
      </section>

      <section>
        <ul>
            {task.map((item , index) =>{
                return(
                    <li key={index} >
                   <GrTasks />  {item}
                        <button>  Delete  </button>;
                        <button> Edit</button>
                         </li>
                )
            })}
        </ul>

      </section>
    </>
  );
};
