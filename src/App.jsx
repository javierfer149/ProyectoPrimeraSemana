import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importamos las herramientas de React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Importamos nuestras tres páginas ahora
import PaginaInicio from './PaginaInicio';
import PaginaContador from './PaginaContador';
import PaginaTareas from './PaginaTareas';
import PaginaUsuarios from './PaginaUsuarios';

function App() {
  return (
    <BrowserRouter>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Proyecto Fase 1</h1>
      
      {/* Menú de navegación actualizado */}
      <nav style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <Link to="/" style={{ marginRight: '15px', fontWeight: 'bold' }}>Inicio</Link>
        <Link to="/contador" style={{ marginRight: '15px', fontWeight: 'bold' }}>Contador</Link>
        <Link to="/tareas" style={{ marginRight: '15px', fontWeight: 'bold' }}>Lista de Tareas</Link>
        {/* NUEVO ENLACE SEMANA 1 FASE 2 */}
        <Link to="/usuarios" style={{ marginLeft: '15px', fontWeight: 'bold', color: 'blue' }}>Usuarios API</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/contador" element={<PaginaContador />} />
        <Route path="/tareas" element={<PaginaTareas />} />
        {/* NUEVA RUTA */}
        <Route path="/usuarios" element={<PaginaUsuarios />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;