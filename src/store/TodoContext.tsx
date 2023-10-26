import { ReactNode, createContext, useContext, useState } from "react";

export type Todos = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

interface ITodoContextType {
  todos: Todos[];
  handleTodo: (task: string) => void;
  handleToggle: (id: string) => void;
  handleDelete: (id: string) => void;
}

const CreateTodoContext = createContext<ITodoContextType | null>(null);

export function TodoContexProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todos[]>(() => {
    try {
      const newLoacl = localStorage.getItem("todos") || "[]";
      return JSON.parse(newLoacl);
    } catch (e) {
      throw new Error("something went wrong");
    }
  });

  const handleTodo = (task: string) => {
    setTodos((prevState) => {
      const newTodos: Todos[] = [
        ...prevState,
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
      ];

      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const handleToggle = (id: string) => {
    setTodos((prevState) => {
      const newTodos = prevState.map((todo) => {
        if (todo.id === id) {
          // Toggle the completed status of the matching todo
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const handleDelete = (id: string) => {
    setTodos((prevState) => {
      const newTodos = prevState.filter((item) => item.id != id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <CreateTodoContext.Provider
      value={{ todos, handleTodo, handleToggle, handleDelete }}
    >
      {children}
    </CreateTodoContext.Provider>
  );
}

export function useTodoContext() {
  const todosConsumer = useContext(CreateTodoContext);
  if (!todosConsumer) {
    throw new Error("use todo used outside the provider");
  }
  return todosConsumer;
}
