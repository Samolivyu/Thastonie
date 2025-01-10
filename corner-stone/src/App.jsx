// import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard"; 

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <h2>Welcome to Ibibe Gaming Kanban Management System!</h2>

        {/* Hamburger Menu */}
        <div className="hamburger-menu">
          <nav>
            <ul>
              <li><Link to="/dashboard">Home</Link></li>
              <li><Link to="/login">Log in</Link></li>
              <li><Link to="/logout">Log out</Link></li>
              <li><Link to="/admin">Admin Portal</Link></li>
            </ul>
          </nav>
        </div>

        {/* Define Routes */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/logout" element={<div>Logout Page</div>} />
          <Route path="/admin" element={<div>Admin Portal</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
