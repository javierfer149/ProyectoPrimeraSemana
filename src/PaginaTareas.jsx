import { useState } from 'react';
import FormularioUsuario from './FormularioUsuario';
import Formulario from './Formulario';
import ListaTareas from './ListaTareas';

function PaginaTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (nuevaTarea) => {
    const tareaExiste = tareas.some(tarea => tarea.toLowerCase() === nuevaTarea.toLowerCase());
    
    if (tareaExiste) {
      const confirmar = window.confirm('Esta tarea ya existe en tu lista. ¿Estás seguro de que quieres añadirla de nuevo?');
      if (!confirmar) return; 
    }
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (indiceABorrar) => {
    const nuevasTareas = tareas.filter((_, indice) => indice !== indiceABorrar);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <FormularioUsuario />
      <div className="card">
        <h2>Mi Lista de Tareas</h2>
        <Formulario alAgregar={agregarTarea} />
        <ListaTareas tareas={tareas} alEliminar={eliminarTarea} />
      </div>
    </div>
  );
}

export default PaginaTareas;