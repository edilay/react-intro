//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { AppUI } from "./appUI";
import { TodoProvider } from "../TodoContext";

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Sacar el perro', completed: false},
//   {text: 'Comprar huevos', completed: true},
//   {text: 'sacar la ropa', completed: true}
// ];


function App() {

  return (
         <TodoProvider>
            <AppUI />
         </TodoProvider>

  );
}

export default App;

