import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    rollNo: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    const newStudent = {
      ...student,
      id: Date.now(),
    };

    localStorage.setItem(
      "students",
      JSON.stringify([...oldStudents, newStudent])
    );

    alert("Student added successfully!");

    navigate("/students");
  };

  return (
    <div className="form-page">
      <h1>Add New Student</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Student Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          value={student.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="rollNo"
          placeholder="Enter Roll Number"
          value={student.rollNo}
          onChange={handleChange}
          required
        />

        <select
          name="course"
          value={student.course}
          onChange={handleChange}
          required
        >
          <option value="">Select Course</option>
          <option value="B.Tech">B.Tech</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
          <option value="BBA">BBA</option>
          <option value="MBA">MBA</option>
        </select>

        <button type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;