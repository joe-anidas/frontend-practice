import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with the actual API endpoint you're given
        const response = await fetch('https://api.example.com/trains');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="App">
      <h1>Train Schedule</h1>
      <div className="train-list">
        {data.map(train => (
          <div key={train.id} className="train-card">
            <h2>{train.name}</h2>
            <p>Departure: {train.departureTime}</p>
            <p>Arrival: {train.arrivalTime}</p>
            <p>Price: ${train.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;