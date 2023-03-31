import React from "react";

const Footer = (props) => {
  const tareas= props.tareas.filter(tarea=>tarea.done==false)
  console.log(tareas)


  return (

    <div className="mt-3">
      {tareas.length} {tareas.length !== 1 ? "tareas" : "tarea"}


    </div>

  );
};

export default Footer;