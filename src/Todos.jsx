import { useEffect, useState } from "react";
import { GrTasks } from "react-icons/gr";
import  TodoForm  from "./Components/Todos/TodoForm";

export const Todos = () => {

  const [task ,  setTask] = useState([]);
  const [date ,  setDate] = useState("");




    const handleDelete = (value) =>{
        const deletedTask = task.filter(item => item !== value);
        setTask(deletedTask);
    }




const handleDeleteAll = () =>{
    setTask([]);
}



  // Update date and time every second
useEffect(()=>{

    const interval =  setInterval(()=>{
        const now = new Date();
        const formatedDate  = now.toLocaleDateString();
        const formatedTime = now.toLocaleTimeString();
        setDate(`${formatedDate} - ${formatedTime}`);
    })
    return () => clearInterval(interval); // Cleanup interval on unmount
}  , []);


  return (
    <>
      <section className="bg-[#008080] p-6 rounded-b-md"  >
        <header>
             <h1 className="text-center mb-2 text-[#DDDBCB]"> <b> Todos App</b>  </h1>
             <h2 className="text-center mb-2 text-[#DDDBCB]" >  Date : {date} </h2>
        </header>
      </section>
      <section>
      <TodoForm setTask={setTask} /> 
      </section>
       
      <section>
        <ul>
            {task.map((item , index) =>{
                return(
                    <li key={index} >
                   <GrTasks />  {item}
                        <button  onClick={()=> handleDelete(item)}  >  Delete  </button>
                        
                        <button> Edit</button>
                         </li>

                            )
            })}
        </ul>
        <button className="" onClick={handleDeleteAll} >Delete All</button>

      </section>
    </>
  );
};
