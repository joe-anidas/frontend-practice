import React, { useState } from "react";

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("add");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculate = async () => {
    try {
      setError("");
      setResult(null);
      const res = await fetch(`/api/calc?op=${op}&a=${a}&b=${b}`);
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>🧮 Calculator</h2>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <select value={op} onChange={(e) => setOp(e.target.value)}>
        <option value="add">Add</option>
        <option value="sub">Subtract</option>
        <option value="mul">Multiply</option>
        <option value="div">Divide</option>
        <option value="fact">Factorial (use A)</option>
        <option value="prime">Prime Check (use A)</option>
      </select>
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      <button onClick={calculate}>Calculate</button>

      {result !== null && <p>Result: {result}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
