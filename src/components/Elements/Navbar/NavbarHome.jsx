import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function NavbarHome() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBarsStaggered />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="/info-lokers">
              <li>
                <a>Info Loker</a>
              </li>
            </Link>
            <Link to="/employer-page">
              <li>
                <a>Pasang Loker</a>
              </li>
            </Link>
            <Link to="/blog-page">
              <li>
                <a>Blog</a>
              </li>
            </Link>
          </ul>
        </div>
        <a className="btn btn-ghost text-orange-500 font-bold text-xl">
          ForLoker
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/">
            <li>
              <a>Home</a>
            </li>
          </Link>
          <Link to="/info-lokers">
            <li>
              <a>Info Loker</a>
            </li>
          </Link>
          <Link to="/employer-page">
            <li>
              <a>Pasang Loker</a>
            </li>
          </Link>
          <Link to="/blog-page">
            <li>
              <a>Blog</a>
            </li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <a className="btn btn-ghost rounded-full">Login</a>
        <a className="btn bg-orange-500 rounded-full">Register</a>
      </div>
    </div>
  );
}
