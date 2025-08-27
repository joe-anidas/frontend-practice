import React, { useState, useEffect } from "react";

export default function UrlShortenerApp() {
  const [longUrl, setLongUrl] = useState("");
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/links");
      const data = await res.json();
      setLinks(data);
    } catch (err) {
      console.error("Error fetching links", err);
    }
  };

  const handleShorten = async () => {
    if (!longUrl.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl }),
      });
      const data = await res.json();
      setLinks([data, ...links]);
      setLongUrl("");
    } catch (err) {
      console.error("Error shortening URL", err);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/links/${id}`, {
        method: "DELETE",
      });
      setLinks(links.filter((l) => l.id !== id));
    } catch (err) {
      console.error("Error deleting link", err);
    }
  };

  const handleCopy = (shortUrl) => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  return (
    <div className="app-container">
      <h1 className="title">🔗 URL Shortener</h1>

      {/* Input Section */}
      <div className="input-section">
        <input
          type="url"
          placeholder="Enter a long URL..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="url-input"
        />
        <button onClick={handleShorten} disabled={loading} className="btn">
          {loading ? "Shortening..." : "Shorten"}
        </button>
      </div>

      {/* List of Links */}
      <div className="links-list">
        {links.map((link) => (
          <div key={link.id} className="link-card">
            <div className="link-info">
              <p className="long-url">{link.longUrl}</p>
              <a
                href={link.shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="short-url"
              >
                {link.shortUrl}
              </a>
            </div>
            <div className="link-actions">
              <button
                className="icon-btn"
                onClick={() => handleCopy(link.shortUrl)}
              >
                <Copy className="icon" />
              </button>
              <button
                className="icon-btn delete"
                onClick={() => handleDelete(link.id)}
              >
                <Trash2 className="icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
