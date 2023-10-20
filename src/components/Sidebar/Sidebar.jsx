const Sidebar = () => {
  return (
    <ul className="menu menu-md w-56">
      <li className="menu-title text-2xl text-slate-50">Main Menu</li>
      <ul className="text-slate-50 font-semibold">
        <li>
          <a>Dashboard</a>
        </li>
        <li>
          <a>Cari Loker</a>
        </li>
        <li>
          <a>Pertanyaan</a>
        </li>
        <li>
          <a>Ikut Komunitas</a>
        </li>
        <li>
          <a>Hubungi CS</a>
        </li>
      </ul>
    </ul>
  );
};

export default Sidebar;
