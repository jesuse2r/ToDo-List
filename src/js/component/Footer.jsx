import React from "react";

const Footer = (props) => {


  return (

    <div className="mt-3">
      {props.tareas.length} {props.tareas.length !== 1 ? "tareas" : "tarea"}


    </div>

  );
};

export default Footer;