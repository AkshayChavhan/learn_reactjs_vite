import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./component/TodoForm";
import { TodoContextProvider } from "./contexts/index";
import TodoItem from "./component/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoItem) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        todo: todoItem.todo,
        isCompleted: todoItem.isCompleted,
      },
    ]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  async function SaveLocalData() {
    debugger
    const saveLocalData = await localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }

  async function getLocalData() {
    let saveLocalData = await JSON.parse(localStorage.getItem("todos"));
    if (Array.isArray(saveLocalData) && saveLocalData.length > 0) {
      setTodos(saveLocalData);
    }
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    getLocalData();
  }, []);

  useEffect(() => {
    SaveLocalData();
  }, [ todos ]);

  return (
    <TodoContextProvider
      value={{ toggleComplete, addTodo, updateTodo, deleteTodo, todos }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
