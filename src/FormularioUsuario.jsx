import { useState } from 'react';

function FormularioUsuario() {
  // Inicializamos el estado leyendo de localStorage por si el usuario ya guardó sus datos antes
  const [nombre, setNombre] = useState(() => localStorage.getItem('nombre') || '');
  const [correo, setCorreo] = useState(() => localStorage.getItem('correo') || '');

  const manejarEnvio = (e) => {
    e.preventDefault();
    // Guardamos los datos en el almacenamiento local del navegador
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('correo', correo);
    alert('¡Tus datos se han guardado correctamente!');
  };

  return (
    <form onSubmit={manejarEnvio} style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Mis Datos</h3>
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          placeholder="Tu nombre"
          style={{ padding: '8px', marginRight: '10px', width: '200px' }}
        />
        <input 
          type="email" 
          value={correo} 
          onChange={(e) => setCorreo(e.target.value)} 
          placeholder="Tu correo electrónico"
          style={{ padding: '8px', marginRight: '10px', width: '200px' }}
        />
      </div>
      <button type="submit" style={{ padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Guardar Perfil
      </button>
    </form>
  );
}

export default FormularioUsuario;