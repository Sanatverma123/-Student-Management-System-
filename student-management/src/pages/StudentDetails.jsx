import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    const savedStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    const foundStudent = savedStudents.find(
      (student) => student.id.toString() === id
    );

    setStudent(foundStudent);
  }, [id]);

  // Student not found
  if (!student) {
    return (
      <div className="details-page">
        <h1>Student Not Found</h1>

        <p>
          The student you are looking for does not exist.
        </p>

        <Link to="/students" className="back-btn">
          ← Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div className="details-page">

      <div className="details-header">
        <h1>Student Details</h1>

        <Link to="/students" className="back-btn">
          ← Back to Students
        </Link>
      </div>

      <div className="student-details-card">

        <div className="student-avatar">
          👨‍🎓
        </div>

        <h2>{student.name}</h2>

        <div className="details-info">

          <div className="detail-item">
            <span>Student Name</span>
            <strong>{student.name}</strong>
          </div>

          <div className="detail-item">
            <span>Email</span>
            <strong>{student.email}</strong>
          </div>

          <div className="detail-item">
            <span>Phone</span>
            <strong>{student.phone}</strong>
          </div>

          <div className="detail-item">
            <span>Roll Number</span>
            <strong>{student.rollNo}</strong>
          </div>

          <div className="detail-item">
            <span>Course</span>
            <strong>{student.course}</strong>
          </div>

          <div className="detail-item">
            <span>Student ID</span>
            <strong>{student.id}</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDetails;