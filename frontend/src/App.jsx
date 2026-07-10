import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [veri, setVeri] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/api/mesaj')
      .then(res => res.json())
      .then(data => setVeri(data.mesaj));
  }, []);

  return (
    <div>
      <h1>React + Express Projesi</h1>
      <p>Sunucudan gelen veri: {veri}</p>
    </div>
  );
}

export default App;
