import { useSearchParams } from "react-router-dom";
import { useTodoContext } from "../store/TodoContext";

const Todos = () => {
  const { todos, handleToggle, handleDelete } = useTodoContext();

  let filterData = todos;

  const [searchParams] = useSearchParams();
  let todoDatas = searchParams.get("todo");

  if (todoDatas === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }

  if (todoDatas === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {filterData.map((item) => (
        <div
          key={item.id}
          className={`flex items-center justify-between p-4 border border-gray-300 rounded shadow-md my-2 ${
            item.completed ? "bg-gray-200" : ""
          }`}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-6 w-6 text-blue-500"
              checked={item.completed}
              onChange={() => handleToggle(item.id)}
            />
            <label className={`ml-4 ${item.completed ? "line-through" : ""}`}>
              {item.task}
            </label>
          </div>
          {item.completed && (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Todos;
