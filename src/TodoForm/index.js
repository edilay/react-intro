import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm () {
    //nuevi estado para el todo
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo, 
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue (event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }


    return(
        <form onSubmit={onSubmit}>
         <label>Ingresar nuevo Todo</label>
         <textarea 
             value={newTodoValue}
             onChange={onChange}
             placeholder="Nuevo Todo..."
         />
         <div className="TodoForm-buttonContainer">
            <button
              type = "button"
              className="TodoForm-button TodoForm-button--cancel"
              onClick={onCancel}
            >
                Cancelar
            </button>
            <button
               type="submit"    
               className="TodoForm-button TodoForm-button--add"
            >
                Añadir
            </button>
         </div>
        </form>
    );

}

export {TodoForm};