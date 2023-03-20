import React, { useState } from "react";


import Formulario from "./Formulario.jsx";
import Tarea from "./Tarea.jsx";
import Footer from "./Footer.jsx"



const App = () => {
  const [tarea, setTarea] = useState('')
  const [listadoTareas, setListadoTareas] = useState([])

  function handleSubmit(e) {
    e.preventDefault()


    if (tarea === '') {
      alert('You did not write.')
      return

    }
    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      completado: false
    }
    const temp = [nuevaTarea, ...listadoTareas]
    setListadoTareas(temp)
    setTarea('')
    console.log(listadoTareas)
  }





  function handleChange(e) {
    setTarea(e.target.value)
    console.log(tarea)

  }
  function OnActualizarTarea(objEditarTarea) {
    const { id, tarea } = objEditarTarea
    const temp = [...listadoTareas]
    const elemento = temp.find(item => item.id === id)
    elemento.tarea = tarea
    setListadoTareas(temp)
  }
  function onBorrarTarea(id) {
    const temp = listadoTareas.filter(item => item.id !== id)
    setListadoTareas(temp)
  }


  return (
    <>
      <h1>To-Do App</h1>
      <div className="contenedorPrincipal">

        <div className="contenedorFormulario">
          <Formulario
            tarea={tarea}
            handleSubmit={handleSubmit}

            handleChange={handleChange} />
        </div>
        <div className="contenedorTareas">

          <h2>Things To-Do</h2>
          <div className="contenedorInfoTareas ">
            {
              listadoTareas.map(tarea => (
                <Tarea
                  key={tarea.id}
                  id={tarea.id}
                  tarea={tarea}
                  OnActualizarTarea={OnActualizarTarea}
                  onBorrarTarea={onBorrarTarea} />
              ))
            }

          </div>









        </div>





        <Footer
          tareas={listadoTareas} />
      </div>

    </>



  );
};

export default App;

