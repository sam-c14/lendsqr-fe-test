import './scss/App.scss';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React from 'react';;

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route
          path="/"
          element={<Users />}
        />
        <Route
          path="user/:id"
          element={<UserDetails />}
        />
      </Routes>
    </Router>
    {/* <Login /> */}
    </div>
  );
}
export default App;
