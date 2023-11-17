// import React from "react";
import LoginPage from "./pages/login";
// import RegisterPage from "./pages/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/homePages"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
