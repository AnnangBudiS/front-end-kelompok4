import { Fragment } from "react";
import Navbar from "../components/Fragments/Dashboard/Navbar";
import Menu from "../components/Fragments/Dashboard/Menu";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <Fragment>
      <header className="fixed w-full shadow-lg bg-base-100 z-[2]">
        <Navbar />
      </header>
      <main className="flex">
        <aside className="bg-orange-500 h-screen pt-20 p-5 sticky top-0">
          <Menu />
        </aside>
        <section className="w-full">
          <Outlet />
        </section>
      </main>
    </Fragment>
  );
}
