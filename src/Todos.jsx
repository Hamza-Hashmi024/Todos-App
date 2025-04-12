import { useState } from "react";

export const Todos = () => {
  const [inputValue, setInputValue] = useState("");
  const [task ,  setTask] = useState([]);


  const handleInputChange = (value) => {
    setInputValue(value);
  };




  const handleSubmit = (e) => {
   e.preventDefault();
  if(!inputValue) return; // Prevent empty tasks
  setTask((prevTask ) => [...prevTask , inputValue]);

   setInputValue("");
   
}

  return (
    <>
      <section className="">
        <header>Todos App</header>
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
                        {item}
                    </li>
                )
            })}
        </ul>

      </section>
    </>
  );
};
