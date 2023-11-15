// import { Children, useState } from "react";
// import Links from "../../Links/Links";

const Sidebar = ({ children }) => {
  return (
    <ul className="w-56 flex flex-col">
      <li className="menu-title text-2xl text-slate-50">Main Menu</li>
      <ul className="text-slate-50 font-semibold pl-6">{children}</ul>
    </ul>
  );
};

export default Sidebar;
