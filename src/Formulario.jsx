import { useState } from 'react';

function Formulario({ alAgregar }) {
  // Estado local para guardar lo que el usuario escribe en el input
  const [texto, setTexto] = useState('');

  // Función que se ejecuta al darle al botón de enviar el formulario
  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que la página se recargue, que es el comportamiento por defecto de HTML
    
    if (texto.trim() === '') return; // Evita que añadamos tareas vacías
    
    alAgregar(texto); // Le pasamos el texto al componente padre (App.jsx)
    setTexto(''); // Limpiamos el input después de añadir la tarea
  };
//Conecta el campo de texto visual con el estado interno de React
  return (
    <form onSubmit={manejarEnvio} style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Añadir nueva tarea</h3>
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Ej: Estudiar React..."
        style={{ padding: '8px', marginRight: '10px', width: '200px' }}
      />
      <button type="submit" style={{ padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Guardar
      </button>
    </form>
  );
}

export default Formulario;