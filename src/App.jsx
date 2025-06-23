import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Pedro");

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Teacher Name: {name}</h2>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li 
          onClick={() => setName("Data")} 
          style={{ cursor: 'pointer', marginBottom: '0.5rem' }}
        >
          Data
        </li>
        <li 
          onClick={() => setName("Reyes")} 
          style={{ cursor: 'pointer', marginBottom: '0.5rem' }}
        >
          Reyes
        </li>
        <li 
          onClick={() => setName("Celia")} 
          style={{ cursor: 'pointer' }}
        >
          Celia
        </li>
      </ul>
    </div>
  );
}

export default App;
