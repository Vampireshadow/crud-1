import React, { useState } from 'react'

function App() {
  const [task, setTask] = uTeState(null)

  const addTask = () => {
    e.preventDefault()
    if(isEmpty(task)) {
      console.log("Task emty")
      return
    }

    console.log("Ok")
    setTask(null)
  }
  
  return (
    <div className="container mt-5">
      <h1>Tareas </h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="texs-center">Lista de Treas</h4>
          <ul className="list-group">
           <li className="list-group-item">
             <span className="lead">Nombre de la tarea</span>
             <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
             <button className="btn btn-warning btn-sm float-right">Editar</button>
           </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="texs-center">Formulario</h4>
          <form onSubmit={addTask}>
            <input
             type="text"
             className="from-control mb-2"
             placeholder="Ingrese la tarea..."
             onChange={(text) => setTask(text.target.value)}
             value={task}
            />
            <button 
            className="btn btn-dark btn-block"
            type="submit"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
