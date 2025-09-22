import React from "react";
import { FaRegUser } from "react-icons/fa";
export default function Card({ studentData }) {
  return (
    <>
      <h2 className="subtitle">
        <FaRegUser /> Total Students <span>{studentData.length}</span>
      </h2>

      <div className="card-list">
        {studentData.map((student, i) => (
          <div className="card" key={i}>
            <h2 className="card-title">{student.name}</h2>
            <p className="card-email">{student.email}</p>
            <p className="card-age">Age: {student.age}</p>
          </div>
        ))}
      </div>
    </>
  );
}
