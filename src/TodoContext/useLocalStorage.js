import React from "react";

//hook personalizado
function useLocalStorage(itemName, initialVAlue){
    const [error, setError] = React.useState(false);//carga de la aplicación 
    const [loading, setLoading] = React.useState(true);//carga de la aplicación
  
     //manejo de estados componentes
     const [item, setItem] = React.useState(initialVAlue);//Lista de tareas
        
        React.useEffect(() => {
          //espera un segunto para hacer el llamado al local storage
          setTimeout(() => {
            try{
            //manejo de almacenamiento local
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            
            if(!localStorageItem) {
              localStorage.setItem(itemName, JSON.stringify(initialVAlue));
              parsedItem = initialVAlue;
            }else{//si existen todos.
              parsedItem = JSON.parse(localStorageItem);
            }
  
            setItem(parsedItem);
            setLoading(false);
            }catch(error){
               setError(error);
            }
      }, 1000);
  
    }
    
    );
  
  
    
    //función que se retorna en el hook
    const saveItem =  (newItem) => {
      try
      {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      }catch(error){
        setError(error);
      }
    };
    return{item, saveItem, loading, error};//retorna objeto
  
  }

  export {useLocalStorage};
  