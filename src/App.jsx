import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importamos las herramientas de React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Importamos nuestras nuevas páginas
import PaginaContador from './PaginaContador';
import PaginaTareas from './PaginaTareas';

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
      
      {/* Menú de navegación */}
      <nav style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <Link to="/" style={{ marginRight: '15px', fontWeight: 'bold' }}>Contador</Link>
        <Link to="/tareas" style={{ fontWeight: 'bold' }}>Lista de Tareas</Link>
      </nav>

      {/* Aquí le decimos a React qué página mostrar según la URL */}
      <Routes>
        <Route path="/" element={<PaginaContador />} />
        <Route path="/tareas" element={<PaginaTareas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
