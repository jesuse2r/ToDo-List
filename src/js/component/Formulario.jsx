import React from "react";

const Formulario = (props) => {
    const { tarea, handleChange, handleSubmit } = props





    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"



                placeholder="Write" onChange={handleChange}
                value={tarea} />

            <input
                type="submit"
                className="btn m-3"
                value="Add"
                onClick={handleSubmit}
            />



        </form>


    );
};

export default Formulario;