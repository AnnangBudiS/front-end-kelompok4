import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { user } = useAuth();
  if (!user) return <Outlet />;
  return <Navigate to="/" />;
}
