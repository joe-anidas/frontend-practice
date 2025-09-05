import React from "react";
import users from "./data.json"; // ✅ Import JSON
import "./App.css";

function Card({ name, age, bio }) {
  return (
    <article className="card">
      <h3 className="title">{name}</h3>
      <p className="meta">{age} years old</p>
      <p className="desc">{bio}</p>
    </article>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>Local JSON in Card Component</h1>
      <div className="grid">
        {users.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}
