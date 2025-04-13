const AddTaskButton = ({  type = "button" , children = "Add Task"}) => {
 return(
    <>
     <button
            type={type}
            className="text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-200"
          >
            {children}
          </button>
    </>
 )


}
export default AddTaskButton;