const DeleteButton = ({ onClick, children = "Delete" }) => {
return(
                  <button
                  onClick={onClick}
                  className="text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-400 font-medium rounded-md text-xs px-4 py-1.5"
                >
                  {children}
                </button>
)
}

export default DeleteButton