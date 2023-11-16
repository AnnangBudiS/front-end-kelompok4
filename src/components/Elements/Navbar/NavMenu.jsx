import { IoMdNotifications } from "react-icons/io";
const NavMenu = () => {
  return (
    <div className="navbar container mx-auto">
      <div className="flex-1">
        <a className="text-orange-500 font-bold text-2xl">Kerja Paksa</a>
      </div>
      <div className="flex-none space-x-4">
        <ProfileMenu />
        <NavNotification />
      </div>
    </div>
  );
};

const ProfileMenu = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

const NavNotification = () => {
  return (
    <div className="navbar-end">
      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <IoMdNotifications className="text-2xl" />
          {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
        </div>
      </button>
    </div>
  );
};

export default NavMenu;
