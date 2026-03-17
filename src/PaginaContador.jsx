import { useState } from 'react';
import Boton from './Boton';

function PaginaContador() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Mi Contador</h2>
      <Boton alHacerClic={() => setCount((count) => count + 1)} />
      <p style={{ marginTop: '10px' }}>El contador está en: {count}</p>
    </div>
  );
}

export default PaginaContador;