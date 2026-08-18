import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Student Management System</h2>

      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/students">Students</Link>
        <Link to="/add-student">Add Student</Link>
      </div>
    </nav>
  );
}

export default Navbar;