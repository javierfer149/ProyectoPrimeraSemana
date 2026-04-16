import { useState, useEffect } from 'react';

function PaginaDirectus() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('https://sandbox.directus.io/items/Productos')
      .then(res => res.json())
      .then(datos => {
        setProductos(datos.data);
        setCargando(false);
      });
  }, []);

  // Función para redirigir a la tienda oficial
  const irATiendaOficial = () => {
    window.open('https://casamuseoratonperez.store/collections/productos-que-no-pueden-faltar-de-raton-perez?page=2', '_blank');
  };

  if (cargando) return <p>Cargando tienda...</p>;

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Tienda Casa Museo Ratón Pérez</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '20px' 
      }}>
        {productos.map(p => (
          <div key={p.id} style={{ 
            backgroundColor: 'white', 
            borderRadius: '15px', 
            padding: '20px', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
          }}>
            {p.Imagen && (
              <img 
                src={`https://sandbox.directus.io/assets/${p.Imagen}`} 
                style={{ width: '100%', height: '200px', objectFit: 'contain' }} 
              />
            )}

            <h3 style={{ fontSize: '1.1rem', margin: '15px 0' }}>{p.Nombre}</h3>

            <div style={{ marginBottom: '10px' }}>
              {p.Precio_Oferta ? (
                <>
                  <span style={{ textDecoration: 'line-through', color: 'red', marginRight: '10px' }}>{p.Precio}€</span>
                  <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'green' }}>{p.Precio_Oferta}€</span>
                </>
              ) : (
                <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{p.Precio}€</span>
              )}
            </div>

            {/* MOSTRAR VARIANTES SI EXISTEN */}
            {p.Variantes && Array.isArray(p.Variantes) && (
              <div style={{ margin: '10px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5px' }}>
                {p.Variantes.map((v, index) => (
                  <span key={index} style={{ 
                    fontSize: '0.7rem', 
                    backgroundColor: '#eee', 
                    padding: '3px 8px', 
                    borderRadius: '10px',
                    border: '1px solid #ccc'
                  }}>
                    {v.replace('_', ' ')}
                  </span>
                ))}
              </div>
            )}

            <p style={{ fontSize: '0.85rem', color: '#666', flexGrow: 1 }}>{p.Descripcion}</p>

            <button 
              onClick={irATiendaOficial}
              style={{ 
                backgroundColor: '#646cff', 
                color: 'white', 
                border: 'none', 
                padding: '12px', 
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginTop: '15px'
              }}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaginaDirectus;