import { useState, useEffect } from 'react';

function PaginaDirectus() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // URL de tu Directus en Docker
  const urlAPI = 'http://localhost:9000/items/Productos';

  useEffect(() => {
    fetch(urlAPI)
      .then(res => {
        if (!res.ok) throw new Error("Error al conectar con Directus local.");
        return res.json();
      })
      .then(datos => {
        setProductos(datos.data || []);
        setCargando(false);
      })
      .catch(err => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <div style={{textAlign:'center', padding:'50px'}}>Cargando tienda...</div>;
  if (error) return <div style={{textAlign:'center', color:'red', padding:'50px'}}>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Tienda Casa Museo Ratón Pérez</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {productos.map((p, index) => (
          <TarjetaProducto key={p.id || index} p={p} />
        ))}
      </div>
    </div>
  );
}

function TarjetaProducto({ p }) {
  // LÓGICA DE ESTADOS PARA 3D DINÁMICO
  // Iniciamos el modelo 3D con el que viene por defecto de la base de datos
  const [modelo3DActual, setModelo3DActual] = useState(p.Modelo3D);
  const [imagenActual, setImagenActual] = useState(p.Imagen);
  const [ver3D, setVer3D] = useState(false);
  
  const urlBase = "http://localhost:9000/assets/";

  //IDs de modelos .GLB actualizados
  const modelosManualmente = {
    adelaida: "e3b90662-2ea4-4371-9f2b-de60c38ca772",
    perez: "e98f2f70-1923-45e6-a0db-7353905eaf54",
    hada: "4a8e68d6-4c34-4726-be9a-0a64ebae8161",
    buby: "bf95baef-62eb-430a-b8df-4b3930070aa5",
    bubyraton: "e2e04c33-8096-4b65-b01a-397b5281b1b5"
  };

  const esProductoPersonajes = p.Nombre && p.Nombre.includes("Llavero");

  return (
    <div style={{ 
      backgroundColor: 'white', 
      borderRadius: '15px', 
      padding: '20px', 
      textAlign: 'center',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      {/* Visualización 3D o Imagen */}
      <div style={{ height: '250px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
        {ver3D && modelo3DActual ? (
          <model-viewer
            src={`${urlBase}${modelo3DActual}`}
            alt="Modelo 3D"
            auto-rotate
            camera-controls
            style={{ width: '100%', height: '100%' }}
          ></model-viewer>
        ) : (
          <img 
            src={`${urlBase}${imagenActual}`} 
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
            alt={p.Nombre}
          />
        )}
      </div>

      <h3 style={{ fontSize: '1.1rem', margin: '10px 0', minHeight: '3em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {p.Nombre}
      </h3>

      {/* Botones de Personajes: activan el 3D directamente */}
      {esProductoPersonajes && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center', marginBottom: '15px' }}>
          {Object.keys(modelosManualmente).map((nombre) => (
            <button 
              key={nombre}
              onClick={() => {
                setModelo3DActual(modelosManualmente[nombre]); // Cambia el modelo .glb
                setVer3D(true); // Activa el visor 3D automáticamente
              }}
              style={{ 
                padding: '5px 10px', 
                borderRadius: '12px', 
                cursor: 'pointer', 
                border: '1px solid #ddd',
                fontSize: '0.75rem',
                // El botón se ilumina si ese modelo es el que está activo
                backgroundColor: modelo3DActual === modelosManualmente[nombre] && ver3D ? '#646cff' : '#f0f0f0',
                color: modelo3DActual === modelosManualmente[nombre] && ver3D ? 'white' : '#333',
                fontWeight: 'bold'
              }}
            >
              {nombre === "bubyraton" ? "Buby Ratón" : nombre.charAt(0).toUpperCase() + nombre.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* Botón para ver en 3D  */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px', marginTop: 'auto' }}>
        {p.Modelo3D && (
          <button 
            onClick={() => {
                // Si volvemos a foto, reseteamos al modelo original por si acaso
                if (ver3D) setModelo3DActual(p.Modelo3D);
                setVer3D(!ver3D);
            }}
            style={{ backgroundColor: ver3D ? '#ff4757' : '#2ed573', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {ver3D ? "❌ Ver Foto" : "📦 Ver en 3D"}
          </button>
        )}
      </div>

      {/* Precio y Oferta */}
      <div style={{ marginTop: '10px' }}>
        {p.Oferta ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1rem', color: '#888', textDecoration: 'line-through' }}>{p.Precio}€</span>
            <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#e74c3c' }}>{p.Oferta}€</span>
          </div>
        ) : (
          <p style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '0' }}>{p.Precio}€</p>
        )}
      </div>
    </div>
  );
}

export default PaginaDirectus;