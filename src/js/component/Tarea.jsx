import React, { useState } from "react";
import App from "./App.jsx"


const Tarea = (props) => {
    const { tarea, OnActualizarTarea, onBorrarTarea } = props
    const [editando, setEditando] = useState(false)
    const [estaCompletada, setEstaCompletada] = useState(false)

    function ModoEdicionActivado() {
        const [valor, setValor] = useState(tarea.tarea)
        function handleChange(e) {
            const text = e.taget.value
            setValor(text)
        }
        function handleClick(e) {
            e.preventDefault()

            OnActualizarTarea(
                {
                    id: tarea.id,
                    tarea: valor,
                    completado: false
                }

            )
            setEditando(false)
        }

        return (
            <>
                <input
                    type='text'
                    onChange={handleChange}
                    value={valor} />
                <button
                    className="btn" onClick={handleClick}>Save</button>
                <button
                    className="btn btnBorrar" onClick={() => onBorrarTarea(tarea.id)}>Delete</button>
            </>
        );
    };
    function ModoEdicionDesactivado() {
        return (
            <>
                <span
                    className={estaCompletada ? "todoTarea spanSubrayado" : "todoTarea"}
                    onClick={() => setEstaCompletada(!estaCompletada)}>
                    {tarea.tarea}
                </span>

                <button
                    className="btn btnEditar"
                    onClick={() => setEditando(true)}>
                    Refresh
                </button>
                <button
                    className="btn btnBorrar" onClick={() => onBorrarTarea(tarea.id)}>Delete</button>
            </>

        );
    };





    return (





        <> <div className="contenedorTarea" id={tarea.id}>
            {
                editando
                    ? <ModoEdicionActivado />
                    : <ModoEdicionDesactivado />

            }





        </div>


        </>



    );
};

export default Tarea;