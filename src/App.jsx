import React from "react";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./pages/homePages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />

        {/* Private Route */}
        {/* <Route path="/job-pages" element={<JobPages />}></Route> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
