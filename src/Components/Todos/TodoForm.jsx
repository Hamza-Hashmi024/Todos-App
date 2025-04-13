import { useState } from "react";
import { Todos } from "../../Todos";

const TodoForm = ({setTask}) => {
    const [inputValue, setInputValue] = useState("");
  
    
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
  <form onSubmit={handleSubmit}>
            <div>
              <input
                className="border-2 border-indigo-600 rounded-md p-2"
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
  
  </>
  )
}

export default TodoForm