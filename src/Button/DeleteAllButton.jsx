const DelleteAllButton = ({ onClick, children = "Delete All" }) => {
   return(
    <>
    <button
              onClick={onClick}
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-400 font-medium rounded-md text-sm px-6 py-2"
            >
              {children}
            </button> 
    
    </>
   )


}
export default DelleteAllButton;