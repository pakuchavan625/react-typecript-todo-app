import { useState, ChangeEvent, FormEvent } from "react";
import { useTodoContext } from "../store/TodoContext";

useTodoContext;
const AddTodo = () => {
  const [todoTask, setTodo] = useState<string>("");
  const { handleTodo } = useTodoContext();

  const handleTodos = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    handleTodo(todoTask);
    setTodo("");
  };

  return (
    <>
      <form className="flex justify-center mt-4" onSubmit={handleSubmit}>
        <div className="flex items-center border rounded w-80 py-2 px-2">
          <input
            type="text"
            value={todoTask}
            className="w-full focus:outline-none"
            placeholder="Enter your Task"
            onChange={handleTodos}
          />
        </div>
        <button
          className={`ml-4 bg-green-400 w-40 p-2 rounded text-white ${
            !todoTask ? "bg-opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={!todoTask}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodo;
