import React, { useEffect, useState } from "react";

// --- Types --- //
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface CardProps {
  user: User;
  onSelect: (id: number) => void;
}

// --- Reusable Child Component --- //
const UserCard: React.FC<CardProps> = ({ user, onSelect }) => {
  return (
    <div
      className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer"
      onClick={() => onSelect(user.id)}
    >
      <h3 className="font-semibold text-lg">{user.name}</h3>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm">{user.phone}</p>
      <a
        className="text-blue-500 underline text-sm"
        href={`http://${user.website}`}
        target="_blank"
        rel="noreferrer"
      >
        {user.website}
      </a>
    </div>
  );
};

// --- Main Component --- //
const UsersDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data: User[] = await res.json();
        setUsers(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle user card click
  const handleSelectUser = (id: number) => {
    const user = users.find((u) => u.id === id) || null;
    setSelectedUser(user);
  };

  // --- Render --- //
  if (loading) return <p className="p-4">Loading users...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Users Dashboard</h1>

      {/* User List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onSelect={handleSelectUser} />
        ))}
      </div>

      {/* Selected User Details */}
      {selectedUser && (
        <div className="border rounded-lg p-6 bg-gray-50 shadow">
          <h2 className="text-xl font-semibold mb-2">Selected User</h2>
          <p>
            <span className="font-bold">Name:</span> {selectedUser.name}
          </p>
          <p>
            <span className="font-bold">Email:</span> {selectedUser.email}
          </p>
          <p>
            <span className="font-bold">Phone:</span> {selectedUser.phone}
          </p>
          <p>
            <span className="font-bold">Website:</span>{" "}
            <a
              href={`http://${selectedUser.website}`}
              className="text-blue-500 underline"
              target="_blank"
              rel="noreferrer"
            >
              {selectedUser.website}
            </a>
          </p>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => setSelectedUser(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default UsersDashboard;
