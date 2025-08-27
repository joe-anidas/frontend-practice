import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCalculate = async (operation) => {
    setLoading(true);
    try {
      // Replace with the actual calculator API endpoint
      const response = await fetch('https://api.example.com/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'API-Key': 'your-api-key-here' // If authentication is required
        },
        body: JSON.stringify({
          operation,
          input: input.split(',').map(num => parseInt(num.trim()))
        })
      });

      if (!response.ok) {
        throw new Error(`Calculation failed: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="calculator">
      <h1>HTTP Calculator</h1>
      <div className="input-section">
        <label>
          Enter numbers (comma-separated):
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., 5, 3, 2"
          />
        </label>
      </div>
      
      <div className="buttons">
        <button onClick={() => handleCalculate('sum')} disabled={loading}>
          {loading ? 'Calculating...' : 'Sum'}
        </button>
        <button onClick={() => handleCalculate('factorial')} disabled={loading}>
          {loading ? 'Calculating...' : 'Factorial'}
        </button>
        <button onClick={() => handleCalculate('prime')} disabled={loading}>
          {loading ? 'Calculating...' : 'Check Prime'}
        </button>
      </div>
      
      {result && (
        <div className="result">
          <h2>Result: {result}</h2>
        </div>
      )}
    </div>
  );
}

export default Calculator;