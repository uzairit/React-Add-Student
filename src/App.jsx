import React, { useState } from "react";
import Card from "./Component/Card";
import Form from "./Component/Form";

function App() {
  let [student, setStudentData] = useState({
    email: "",
    name: "",
    age: "",
  });
  let [data, setData] = useState([]);

  function add() {
    if (!student.name || !student.email || !student.age) {
      alert("Please fill all fields");
      return;
    }
    setData([...data, student]);
    setStudentData({ email: "", name: "", age: "" });
  }

  return (
    <div className="container">
      <h1 className="title">Student Form</h1>
      <Form student={student} setStudentData={setStudentData} add={add} />
      <Card studentData={data} />
    </div>
  );
}
export default App