import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [logs, setLogs] = useState('');

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000');
    ws.addEventListener('message', (event) => {
      setLogs(event.data);
    });

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="App">
      <pre>{logs}</pre>
    </div>
  );
}

export default App;
