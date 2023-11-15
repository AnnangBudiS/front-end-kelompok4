import React from "react";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutsPages from "./components/Layouts/LayoutsPages/LayoutPage";
import HeaderHome1 from "./components/Layouts/HomeLayots/HeaderHome1";
import HeaderHome2 from "./components/Layouts/HomeLayots/HeaderHome2";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LayoutsPages />}>
          <Route index element={<HeaderHome1 />} />
          <Route path="/perusahaan" element={<HeaderHome2 />} />
        </Route>
        {/* Private Route */}
        {/* <Route path="/job-pages" element={<JobPages />}></Route> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
