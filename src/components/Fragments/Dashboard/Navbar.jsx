import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function Navbar() {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    console.log("hello");
    logout();
  };

  return (
    <nav className="navbar px-20 bg-base-100 shadow-md">
      <div className="flex-1">
        <a className="text-2xl font-bold text-orange-500">ForLokers</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user && <img src={user.image} alt="profile picture user" />}
            </div>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </div>
        <div className="ml-5">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}
