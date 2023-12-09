import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./pages/homePages";
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./routers/PrivateRoute";
import DashboardContent from "./components/Fragments/Dashboard/content/Dashboard";
import CariLoker from "./components/Fragments/Dashboard/content/CariLoker";
import IkutiKomunitas from "./components/Fragments/Dashboard/content/IkutiKomunitas";
import HubungiCS from "./components/Fragments/Dashboard/content/HubungiCs";

import Profile from "./components/Fragments/Dashboard/content/Profile";
import Details from "./components/Fragments/Dashboard/content/Details";
import ProtectedRoute from "./routers/ProtectedRoute";
import Setting from "./components/Fragments/Dashboard/content/SettingAcount";
import ProfileEdit from "./components/Fragments/Dashboard/content/ProfileEdit";
import JobApplyProvider from "./context/ApplyJobContext";
import HeaderHome1 from "./components/Layouts/HomeLayots/HeaderHome1";
import HeaderHome2 from "./components/Layouts/HomeLayots/HeaderHome2";
import Blog from "./components/Layouts/HomeLayots/Blog";
import InfoLoker from "./components/Fragments/Homes/Info";

function App() {
  return (
    <AuthProvider>
      <JobApplyProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePages />}>
              <Route index element={<HeaderHome1 />} />
              <Route path="/employer-page" element={<HeaderHome2 />} />
              <Route path="/info-lokers" element={<InfoLoker />} />
              <Route path="/blog-page" element={<Blog />} />
            </Route>

            <Route path="/" element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashboardContent />} />
              <Route path="/cari-loker" element={<CariLoker />} />
              <Route path="/ikuti-komunitas" element={<IkutiKomunitas />} />
              <Route path="/contact-us" element={<HubungiCS />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/edit-profile/:id" element={<ProfileEdit />} />
            </Route>

            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Router>
      </JobApplyProvider>
    </AuthProvider>
  );
}

export default App;
