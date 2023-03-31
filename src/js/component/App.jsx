import React, { useState, useEffect } from "react";

import Formulario from "./Formulario.jsx";
import Tarea from "./Tarea.jsx";
import Footer from "./Footer.jsx";

const urlBase = "https://assets.breatheco.de/apis/fake/todos/user/";
const apiUsername = "fransualinajes";

const initialValue = {
  label: "",
  done: false,
};
const App = () => {
  const [tarea, setTarea] = useState(initialValue);

  const [listadoTareas, setListadoTareas] = useState([]);
  console.log(listadoTareas);

  const fetchTodoApi = async () => {
    try {
      const response = await fetch(`${urlBase}${apiUsername}`);
      const data = await response.json();

      setListadoTareas(data);
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (tarea.label === "") {
      alert("You did not write.");
      return;
    }
   
    const temp = [tarea, ...listadoTareas];


   

    updateTodos(temp)
    
    setTarea(initialValue);
  }

  function handleChange(e) {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
  }

  const updateTodos = async (temp) => {
    console.log(temp)
    try {
      const response = await fetch(`${urlBase}${apiUsername}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(temp),
      });
      if (response.ok === true) {
        fetchTodoApi();
      }
    } catch (error) {
      console.log(error);
    } 
  };

  function OnActualizarTarea(objEditarTarea) {
    const { id, tarea } = objEditarTarea;
    const temp = [...listadoTareas];

    const elemento = temp.find((item) => item.id === id);
    elemento.tarea = tarea;
    setListadoTareas(temp);
  }
  function onBorrarTarea(id) {
    
    const temp = listadoTareas.filter((item,index) => index !== id);
    
    if(temp.length==0){
      updateTodos([{label:"sample task", done: true}])
      
    }
    else {
      updateTodos(temp);
    }
    
    

  }

  useEffect(() => {
    fetchTodoApi();
  }, []);
  return (
    <>
      <h1>To-Do App</h1>
      <div className="contenedorPrincipal">
        <div className="contenedorFormulario">
          <Formulario
            tarea={tarea}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>
        <div className="contenedorTareas">
          <h2>Things To-Do</h2>
          <div className="contenedorInfoTareas ">
            {listadoTareas.filter(tarea=>tarea.done==false).map((tarea, index) => (
              <Tarea
                key={index}
                id={index}
                tarea={tarea}
                OnActualizarTarea={OnActualizarTarea}
                onBorrarTarea={onBorrarTarea}
              />
            ))}
          </div>
        </div>

        <Footer tareas={listadoTareas} />
      </div>
    </>
  );
};

export default App;
