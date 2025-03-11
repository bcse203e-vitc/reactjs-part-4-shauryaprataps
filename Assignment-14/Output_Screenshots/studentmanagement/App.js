import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StudentList from "./StudentList";  
import StudentForm from "./StudentForm"; 
import StudentDetails from "./StudentDetails";  
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Shaurya", age: 20, grade: "A", email: "shaurya@gmail.com", phone: "1234567890"" },
    { id: 2, name: "Rohit", age: 22, grade: "B", email: "rohit@gmail.com", phone: "9876543210"},
  ]);

  const addStudent = (student) => {
    setStudents([...students, { id: students.length + 1, ...student }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <Router>
      <div className="container">
        <h1>Student Management System</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Student</Link>
        </nav>
        <Routes>
          <Route path="/" element={<StudentList students={students} deleteStudent={deleteStudent} />} />
          <Route path="/add" element={<StudentForm addStudent={addStudent} />} />
          <Route path="/student/:id" element={<StudentDetails students={students} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
