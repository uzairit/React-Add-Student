import React from "react";
import styles from './Form.module.css'

function form({ student, setStudentData, add }) {
  return (
    <>
    <div className={styles.form}>
      <input
        type="text"
        placeholder="Enter your name"
        value={student.name}
        onChange={(e) => setStudentData({ ...student, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={student.email}
        onChange={(e) => setStudentData({ ...student, email: e.target.value })}
      />
      <input
        type="number"
        placeholder="Enter your age"
        value={student.age}
        onChange={(e) => setStudentData({ ...student, age: e.target.value })}
      />
      <button onClick={add}>Add</button>
    </div>
    </>
  );
}
export default form