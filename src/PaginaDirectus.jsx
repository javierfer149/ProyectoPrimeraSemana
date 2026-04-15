import { useState, useEffect } from 'react';

function PaginaDirectus() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL 
    fetch('https://sandbox.directus.io/items/Personajes')
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo conectar con Directus. Revisa los permisos públicos.');
        }
        return response.json();
      })
      .then(datos => {
        setPersonajes(datos.data);
        setCargando(false);
      })
      .catch(err => {
        console.error("Error en la petición:", err);
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return (
    <div style={{ padding: '20px' }}>
      <p>⏳ Conectando con el servidor de Directus...</p>
    </div>
  );

  if (error) return (
    <div style={{ padding: '20px', color: 'red' }}>
      <h3> Error de conexión</h3>
      <p>{error}</p>
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mis Personajes (Desde Directus)</h1>
      
      {personajes.length === 0 ? (
        <p>No se encontraron personajes en la base de datos.</p>
      ) : (
        <ul style={{ padding: 0 }}>
          {personajes.map(p => (
            <li key={p.id} style={{ 
              marginBottom: '30px', 
              listStyle: 'none', 
              borderBottom: '1px solid #eee',
              textAlign: 'left',
              paddingBottom: '20px'
            }}>
              {/* Usamos p.Nombre con mayúscula */}
              <h3 style={{ margin: '0 0 10px 0', color: '#646cff', fontSize: '1.5rem' }}>
                {p.Nombre}
              </h3>
              
              {/* Usamos p.Imagen con mayúscula */}
              {p.Imagen && (
                <div style={{ marginBottom: '15px' }}>
                  <img 
                    src={`https://sandbox.directus.io/assets/${p.Imagen}`} 
                    alt={p.Nombre} 
                    style={{ 
                      width: '100%', 
                      maxWidth: '300px', 
                      borderRadius: '12px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
                    }} 
                  />
                </div>
              )}

              {/* Usamos p.Descripcion con mayúscula */}
              <p style={{ margin: 0, color: '#555', lineHeight: '1.6' }}>
                {p.Descripcion}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PaginaDirectus;