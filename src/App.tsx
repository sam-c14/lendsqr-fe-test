import "./scss/App.scss";
import Login from "./pages/Login";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="users/user/:id" element={<UserDetails />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
