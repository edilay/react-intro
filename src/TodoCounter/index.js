import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter ( ){
    //trae las variables tal y cómo se llaman en el contexto.
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <h2 className='TodoCounter'>Tareas Completadas {completedTodos} de {totalTodos}</h2>        
    );
}
//export default TodoCounter;
export {TodoCounter};