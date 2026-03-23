import { Link } from 'react-router-dom';

function PaginaInicio() {
  return (
    <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
      <h2>¡Bienvenido a mi Proyecto</h2>
      <p style={{ fontSize: '1.2em', margin: '20px 0' }}>
        Esta es la página principal de mi aplicación desarrollada con React.
      </p>
      <p style={{ marginBottom: '30px', color: '#666' }}>
        Selecciona la herramienta que deseas utilizar:
      </p>

      {/* Contenedor para los botones */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Link 
          to="/contador" 
          style={{ padding: '12px 24px', backgroundColor: '#646cff', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1em' }}
        >
          🔢 Ir al Contador
        </Link>
        
        <Link 
          to="/tareas" 
          style={{ padding: '12px 24px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1em' }}
        >
          📝 Ir a Lista de Tareas
        </Link>
      </div>
    </div>
  );
}

export default PaginaInicio;