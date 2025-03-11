import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !age.trim() || !grade.trim()) return;
    addStudent({ name, age: Number(age), grade });
    setName("");
    setAge("");
    setGrade("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Student</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder="Grade" value={grade} onChange={(e) => setGrade(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
