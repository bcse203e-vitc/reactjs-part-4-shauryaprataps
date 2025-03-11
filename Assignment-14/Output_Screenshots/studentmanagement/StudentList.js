import React from "react";
import { Link } from "react-router-dom";

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - Age: {student.age} - Grade: {student.grade} 
            <Link to={`/student/${student.id}`}> View Details</Link>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
