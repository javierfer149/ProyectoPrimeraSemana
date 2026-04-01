import { useState, useEffect } from 'react';

function PaginaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!respuesta.ok) throw new Error('No se pudo obtener la información');
        const datos = await respuesta.json();
        setUsuarios(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };
    obtenerDatos();
  }, []);

  if (cargando) return <h2>Cargando usuarios de la API...</h2>;
  if (error) return <h2 style={{ color: 'red' }}>Error: {error}</h2>;

  return (
    <div>
      <h2>Lista de Usuarios (Fase 2)</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.name}</strong> — {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaginaUsuarios;