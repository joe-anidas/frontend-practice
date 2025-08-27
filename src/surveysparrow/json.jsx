import React from "react";
import data from "./data.json"; // Import local JSON

function App() {
  const styles = {
    container: {
      margin: "30px auto",
      width: "80%",
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    },
    heading: {
      marginBottom: "20px"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      margin: "0 auto"
    },
    th: {
      border: "1px solid #ddd",
      padding: "10px",
      backgroundColor: "#f4f4f4"
    },
    td: {
      border: "1px solid #ddd",
      padding: "10px"
    },
    rowEven: {
      backgroundColor: "#f9f9f9"
    },
    rowHover: {
      backgroundColor: "#f1f1f1"
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Data</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Age</th>
            <th style={styles.th}>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr
              key={user.id}
              style={index % 2 === 0 ? styles.rowEven : {}}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.rowHover.backgroundColor)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = index % 2 === 0 ? styles.rowEven.backgroundColor : "white")
              }
            >
              <td style={styles.td}>{user.id}</td>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.age}</td>
              <td style={styles.td}>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
