import { useState } from 'react';

function PaginaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(false); // Empezamos en false porque no cargamos nada al inicio 
  const [error, setError] = useState(null);

  // Esta es la función que se activará con el botón 
  const obtenerDatos = async () => {
    setCargando(true); // Empezamos a cargar al pulsar
    setError(null);    // Limpiamos errores anteriores
    
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!respuesta.ok) throw new Error('No se pudo obtener la información');
      
      const datos = await respuesta.json();
      setUsuarios(datos); // Guardamos los datos en el estado
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false); // Terminamos de cargar 
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Lista de Usuarios (Fase 2)</h2>
      
      {/* Botón para activar la petición  */}
      <button 
        onClick={obtenerDatos} 
        style={{ padding: '10px 20px', cursor: 'pointer', marginBottom: '20px' }}
        disabled={cargando} // Desactivamos el botón mientras carga para evitar peticiones infinitas
      >
        {cargando ? 'Cargando...' : 'Cargar Usuarios'}
      </button>

      {error && <h2 style={{ color: 'red' }}>Error: {error}</h2>}

      {usuarios.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {usuarios.map((usuario) => (
            <li key={usuario.id} style={{ marginBottom: '10px' }}>
              <strong>{usuario.name}</strong> — {usuario.email}
            </li>
          ))}
        </ul>
      )}
      
      {!cargando && usuarios.length === 0 && !error && (
        <p>Pulsa el botón para ver la lista de usuarios.</p>
      )}
    </div>
  );
}

export default PaginaUsuarios;