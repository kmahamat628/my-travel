import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './components/Signup';
import Login from './components/Login';
import AdminPage from "./components/AdminPage";
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/AddUser" element={<AddUser />} />
         <Route path="/editUser/:userId" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
