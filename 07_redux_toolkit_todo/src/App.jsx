import { useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import './App.css'
  
function App() {
  return (
    <>
    <h1>Learn about redux toolkit</h1>
    <AddTodo />
    <Todos />
  </>
  );
}

export default App;
