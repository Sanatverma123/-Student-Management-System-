import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  // Load students from LocalStorage
  useEffect(() => {
    const savedStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    setStudents(savedStudents);
  }, []);

  // Delete student
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );
  };

  // Search students
  const filteredStudents = students.filter((student) => {
    const searchText = search.toLowerCase();

    return (
      student.name.toLowerCase().includes(searchText) ||
      student.email.toLowerCase().includes(searchText) ||
      student.rollNo.toLowerCase().includes(searchText) ||
      student.course.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="students-page">

      <div className="students-header">
        <h1>Students List</h1>

        <Link to="/add-student" className="add-btn">
          + Add Student
        </Link>
      </div>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by name, email, roll number or course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Student Count */}
      <p className="student-count">
        Total Students: {filteredStudents.length}
      </p>

      {/* Students List */}
      {filteredStudents.length === 0 ? (
        <div className="no-students">
          <h2>No Students Found</h2>
          <p>
            {students.length === 0
              ? "No students have been added yet."
              : "Try a different search."}
          </p>

          {students.length === 0 && (
            <Link to="/add-student" className="add-btn">
              Add First Student
            </Link>
          )}
        </div>
      ) : (
        <div className="students-table-container">
          <table className="students-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Roll No.</th>
                <th>Course</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.rollNo}</td>
                  <td>{student.course}</td>

                 <td className="actions">
                <Link
                   to={`/student/${student.id}`}
                     className="view-btn"
                       >
                      View
                 </Link>

                 <Link
                     to={`/edit-student/${student.id}`}
                        className="edit-btn"
                        >
                         Edit
                 </Link>

                 <button
                   onClick={() => handleDelete(student.id)}
                     className="delete-btn"
                      >
                   Delete
                 </button>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Students;