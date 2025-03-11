import React from "react";
import { useParams, Link } from "react-router-dom";

const StudentDetails = ({ students }) => {
  const { id } = useParams();
  const student = students.find((s) => s.id === Number(id));

  if (!student) return <h2>Student Not Found</h2>;

  return (
    <div>
      <h2>{student.name}'s Details</h2>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
      <p>Email: {student.email}</p>
      <p>Phone: {student.phone}</p>
      <p>Address: {student.address}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default StudentDetails;
