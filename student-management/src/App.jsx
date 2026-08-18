import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddStudent from "./pages/AddStudent";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import EditStudent from "./pages/EditStudent";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
              <ProtectedRoute>
              <Dashboard />
              </ProtectedRoute>
              }
            />

         <Route
           path="/add-student"
           element={
              <ProtectedRoute>
               <AddStudent />
               </ProtectedRoute>
             }
            />

         <Route
            path="/students"
            element={
             <ProtectedRoute>
             <Students />
             </ProtectedRoute>
             }
          />

        <Route
           path="/student/:id"
           element={
               <ProtectedRoute>
              <StudentDetails />
              </ProtectedRoute>
             }
         />

        <Route
           path="/edit-student/:id"
           element={
             <ProtectedRoute>
               <EditStudent />
             </ProtectedRoute>
           }
         />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
