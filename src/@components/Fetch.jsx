import React, { useEffect, useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Example with local file: "/users.json"
    // Replace with API: "https://jsonplaceholder.typicode.com/users"
    fetch("/users.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json(); // parses JSON response
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <table className="border">
      <thead>
        <tr>
          <th className="border px-2">ID</th>
          <th className="border px-2">Name</th>
          <th className="border px-2">Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td className="border px-2">{u.id}</td>
            <td className="border px-2">{u.name}</td>
            <td className="border px-2">{u.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
