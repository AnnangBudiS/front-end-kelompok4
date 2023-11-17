import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [activeItem, setActiveItem] = useState("dashboard");

  let classActive = "bg-white py-3 pl-2 rounded-lg text-orange-500 font-bold";

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <section className="w-52">
      <ul>
        <li className="menu-title text-xl text-slate-50 font-bold">Menu</li>
        <ul className="pl-5 space-y-5">
          <li className={activeItem === "dashboard" ? classActive : ""}>
            <Link to="/dashboard" onClick={() => handleItemClick("dashboard")}>
              Dashboard
            </Link>
          </li>
          <li className={activeItem === "cari-loker" ? classActive : ""}>
            <Link
              to="/cari-loker"
              onClick={() => handleItemClick("cari-loker")}
            >
              Cari Loker
            </Link>
          </li>
          <li className={activeItem === "ikuti-komunitas" ? classActive : ""}>
            <Link
              to="/ikuti-komunitas"
              onClick={() => handleItemClick("ikuti-komunitas")}
            >
              Ikuti Komunitas
            </Link>
          </li>
          <li className={activeItem === "contact-us" ? classActive : ""}>
            <Link
              to="/contact-us"
              onClick={() => handleItemClick("contact-us")}
            >
              Hubungi CS
            </Link>
          </li>
        </ul>
      </ul>
    </section>
  );
}
