import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importamos nuestros componentes
import Boton from './Boton';
import FormularioUsuario from './FormularioUsuario'; // <-- Nuevo componente
import Formulario from './Formulario';
import ListaTareas from './ListaTareas';

function App() {
  const [count, setCount] = useState(0)
  const [tareas, setTareas] = useState([])

  const agregarTarea = (nuevaTarea) => {
    // Comprobamos si la tarea ya existe (ignorando mayúsculas y minúsculas)
    const tareaExiste = tareas.some(tarea => tarea.toLowerCase() === nuevaTarea.toLowerCase());
    
    if (tareaExiste) {
      // Si existe, mostramos el mensaje de confirmación
      const confirmar = window.confirm('Esta tarea ya existe. ¿Estás seguro de que quieres añadirla de nuevo?');
      if (!confirmar) {
        return; // Si el usuario cancela, detenemos la función aquí
      }
    }

    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (indiceABorrar) => {
    const nuevasTareas = tareas.filter((_, indice) => indice !== indiceABorrar);
    setTareas(nuevasTareas);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Proyecto Semana 2</h1>
      
      {/* Sección del usuario (Nombre y Correo) */}
      <FormularioUsuario />

      <div className="card">
        <h2>1. Mi Contador</h2>
        <Boton alHacerClic={() => setCount((count) => count + 1)} />
        <p style={{ marginTop: '10px' }}>El contador está en: {count}</p>
      </div>

      <div className="card">
        <h2>2. Mi Lista de Tareas</h2>
        <Formulario alAgregar={agregarTarea} />
        <ListaTareas tareas={tareas} alEliminar={eliminarTarea} />
      </div>
    </>
  )
}

export default App
