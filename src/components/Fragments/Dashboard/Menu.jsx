import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <section className="w-52">
      <ul>
        <li className="menu">
          <h2 className="menu-title text-xl text-slate-50 font-bold">MENU</h2>
          <ul>
            <li>
              <Link to="/dashboard" className="text-xl">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/cari-loker" className="text-xl">
                Cari Loker
              </Link>
            </li>
            <li>
              <Link to="/ikuti-komunitas" className="text-xl">
                Ikuti Komunitas
              </Link>
            </li>
            <li>
              <Link to="contact-us" className="text-xl">
                Hubungi Cs
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
