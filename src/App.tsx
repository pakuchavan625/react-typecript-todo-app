import "./App.css";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div>
        <h1 className="text-center font-extrabold mb-4 mt-5 ">
          React + Typecrsipt
        </h1>
        <Navbar />
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
