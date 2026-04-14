import { useState } from 'react';

function PaginaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const obtenerDatos = async () => {
    setCargando(true);
    setError(null);
    
    try {
      // Retraso artificial de 3 segundos para ver el estado de carga
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!respuesta.ok) {
        throw new Error('No se pudo obtener la información de la API');
      }
      
      const datos = await respuesta.json();
      setUsuarios(datos);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Lista de Usuarios (Fase 2)</h2>
      
      <button 
        onClick={obtenerDatos} 
        style={{ padding: '10px 20px', cursor: 'pointer' }}
        disabled={cargando}
      >
        {cargando ? 'Cargando...' : 'Cargar Usuarios'}
      </button>

      {error && (
        <div style={{ color: 'red', marginTop: '20px' }}>
          Error: {error}
        </div>
      )}

      {usuarios.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
          {usuarios.map((usuario) => (
            <li key={usuario.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc' }}>
              <strong>{usuario.name}</strong> — {usuario.email}
            </li>
          ))}
        </ul>
      )}
      
      {!cargando && usuarios.length === 0 && !error && (
        <p>Pulsa el botón para cargar los datos.</p>
      )}
    </div>
  );
}

export default PaginaUsuarios;