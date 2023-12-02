import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2>Sory Your not Logined</h2>
      <p>please login first !!!</p>
      <button className="btn bg-orange-500" onClick={() => navigate("/login")}>Login</button>
    </div>
  );
}
