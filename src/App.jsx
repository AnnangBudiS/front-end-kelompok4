import React from "react";
import LoginPage from "./pages/FormLoginregister/login";
import RegisterPage from "./pages/FormLoginregister/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={"hellow world!"} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
