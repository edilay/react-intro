import React from 'react';
import './TodoList.css'

function TodoList (props){
    return(
        <section>
            <ul>
              {props.children}
           </ul>
        </section>    
    );
}
//export default TodoList;
export { TodoList };