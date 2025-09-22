import React from "react";
import { FaRegUser } from "react-icons/fa";
import styles from "./Card.module.css";
function Card({ studentData }) {
  return (
    <>
      <h2 className={styles.subtitle}>
        <FaRegUser /> Total Students <span>{studentData.length}</span>
      </h2>
      <div className={styles.cardList}>
        {studentData.map((student, i) => (
          <div className={styles.card} key={i}>
            <h2 className={styles.cardTitle}>{student.name}</h2>
            <p className={styles.cardEmail}>{student.email}</p>
            <p className={styles.cardAge}>Age: {student.age}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Card