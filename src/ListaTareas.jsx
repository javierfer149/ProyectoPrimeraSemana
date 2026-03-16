function ListaTareas({ tareas, alEliminar }) {
  // Si la lista está vacía, mostramos un mensaje 
  if (tareas.length === 0) {
    return <p style={{ color: '#666', fontStyle: 'italic' }}>No hay tareas pendientes.</p>;
  }

  // Si hay tareas, recorremos la lista para mostrarlas
  return (
    <ul style={{ listStyleType: 'none', padding: 0, width: '300px', margin: '0 auto' }}>
      {tareas.map((tarea, indice) => (
        <li 
          key={indice} 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '10px', 
            borderBottom: '1px solid #eee',
            alignItems: 'center'
          }}
        >
          <span>{tarea}</span>
          <button 
            onClick={() => alEliminar(indice)}
            style={{ 
              backgroundColor: '#dc3545', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              padding: '5px 10px',
              cursor: 'pointer' 
            }}
          >
            Borrar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;