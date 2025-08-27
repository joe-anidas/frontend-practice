import React, { useState, useEffect } from "react";

export default function TravelBooking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    from: "",
    to: "",
    date: "",
    passengers: 1,
  });
  const [error, setError] = useState("");
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("booking");
    if (saved) setBooking(JSON.parse(saved));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name) return "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Invalid email";
    if (form.from === form.to) return "From and To cannot be same";
    if (form.passengers <= 0) return "Passengers must be greater than 0";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError("");
    setBooking(form);
    localStorage.setItem("booking", JSON.stringify(form));
  };

  return (
    <div>
      <h2>🧳 Travel Booking</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="from" placeholder="From" value={form.from} onChange={handleChange} />
        <input name="to" placeholder="To" value={form.to} onChange={handleChange} />
        <input type="date" name="date" value={form.date} onChange={handleChange} />
        <input
          type="number"
          name="passengers"
          value={form.passengers}
          onChange={handleChange}
        />
        <button type="submit">Book</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {booking && (
        <div style={{ border: "1px solid black", marginTop: "10px", padding: "8px" }}>
          <h3>Booking Summary</h3>
          <p>Name: {booking.name}</p>
          <p>Email: {booking.email}</p>
          <p>From: {booking.from}</p>
          <p>To: {booking.to}</p>
          <p>Date: {booking.date}</p>
          <p>Passengers: {booking.passengers}</p>
        </div>
      )}
    </div>
  );
}
