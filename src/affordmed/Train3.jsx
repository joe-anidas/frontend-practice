import React, { useEffect, useState } from "react";

export default function TrainSchedule() {
  const [trains, setTrains] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTrains() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("/api/trains"); // replace with real API
        if (!res.ok) throw new Error("Failed to fetch trains");
        const data = await res.json();
        setTrains(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTrains();
  }, []);

  const filtered = trains.filter((t) => {
    return (
      t.trainName.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === "" || t.status === statusFilter)
    );
  });

  return (
    <div>
      <h2>🚆 Train Schedule</h2>
      <input
        placeholder="Search train..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="">All</option>
        <option value="On Time">On Time</option>
        <option value="Delayed">Delayed</option>
      </select>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Train</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((t) => (
            <tr key={t.id}>
              <td>{t.trainName}</td>
              <td>{t.departure}</td>
              <td>{t.arrival}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
