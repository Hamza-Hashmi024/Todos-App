import { GrTasks } from "react-icons/gr";
import EditButton from "../../Button/EditButton";
import DeleteButton from "../../Button/DeleteButton";
import DelleteAllButton from "../../Button/DeleteAllButton";

const TodoList = ({ task, setTask }) => {
  const handleDelete = (value) => {
    const deletedTask = task.filter((item) => item !== value);
    setTask(deletedTask);
  };

  const handleDeleteAll = () => {
    setTask([]);
  };

  return (
    <div>
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
                children="Delete"
              />
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
    </div>
  );
};

export default TodoList;
