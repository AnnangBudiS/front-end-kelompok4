import { useAuth } from "../context/AuthContext";
import Unauthorized from "../pages/Unauthorize";
import Dashboard from "../pages/dashboard-page";

export default function PrivateRoute() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated()) return <Dashboard />;
  return <Unauthorized />;
}
