// import React from "react";
// import LoginPage from "./pages/login";
// import RegisterPage from "./pages/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./pages/homePages";
import JobPages from "./pages/job-pages";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} /> 
        <Route path="/job" element={<JobPages />} /> 
      </Routes>  
    </Router>;
    </>
  )
}

export default App;