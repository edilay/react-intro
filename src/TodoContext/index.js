import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// Al crear el contexto tambi�n podemos pasarle un valor inicial entre los par�ntesis
const TodoContext = React.createContext();

function TodoProvider(props) {
  // Nos traemos todo el estado y las funciones de nuestra aplicaci�n que queremos globales
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
//crea nuevo todo
  const addTodo = (text) => {    
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibir� a toda nuestra aplicaci�n, por eso necesitamos la prop children
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      addTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

// Exportamos nuestro proveedor y nuestro contexto, en el context tambi�n esta el consumer, para acceder a nuestro contexto
export { TodoContext, TodoProvider };