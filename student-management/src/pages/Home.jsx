import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">🎓 Smart Student Management</span>

          <h1>
            Student Management
            <span> System</span>
          </h1>

          <p>
            Manage students easily, quickly and efficiently.
            Add, search, update and manage all student records
            from one place.
          </p>

          <div className="hero-buttons">
            <Link to="/students" className="primary-btn">
              View Students
            </Link>

            <Link to="/add-student" className="secondary-btn">
              + Add Student
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-icon">🎓</div>
          <h2>Student Portal</h2>
          <p>Manage your student records with ease.</p>

          <div className="mini-stats">
            <div>
              <strong>📚</strong>
              <span>Courses</span>
            </div>

            <div>
              <strong>👨‍🎓</strong>
              <span>Students</span>
            </div>

            <div>
              <strong>🔍</strong>
              <span>Search</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-heading">
          <span>FEATURES</span>
          <h2>Everything You Need</h2>
          <p>
            Simple tools to manage your student information efficiently.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon blue">👨‍🎓</div>
            <h3>Students</h3>
            <p>
              View and manage all registered students
              in one convenient place.
            </p>
            <Link to="/students">View Students →</Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon green">➕</div>
            <h3>Add Student</h3>
            <p>
              Quickly add new students with their
              personal and academic information.
            </p>
            <Link to="/add-student">Add Student →</Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon purple">🔍</div>
            <h3>Search</h3>
            <p>
              Find students quickly using name,
              email, roll number or course.
            </p>
            <Link to="/students">Search Students →</Link>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div>
          <h2>Ready to manage your students?</h2>
          <p>
            Start adding and managing student records today.
          </p>
        </div>

        <Link to="/add-student" className="cta-btn">
          Get Started →
        </Link>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <h3>🎓 Student Management System</h3>
        <p>© 2026 Student Management System. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home;
