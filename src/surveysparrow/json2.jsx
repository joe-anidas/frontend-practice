import React from "react";
import styled from "styled-components";

// Define styled components
const Container = styled.div`
  margin: 30px auto;
  width: 80%;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #f4f4f4;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const Row = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

const data = [
  { id: 1, name: "Alice", age: 25, city: "New York" },
  { id: 2, name: "Bob", age: 30, city: "Chicago" },
  { id: 3, name: "Charlie", age: 28, city: "San Francisco" }
];

function App() {
  return (
    <Container>
      <Title>User Data</Title>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>City</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <Row key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.age}</Td>
              <Td>{user.city}</Td>
            </Row>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
