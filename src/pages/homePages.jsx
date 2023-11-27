import HeaderHome1 from "../components/Layouts/HomeLayots/HeaderHome1";
import HeaderHome2 from "../components/Layouts/HomeLayots/HeaderHome2";
import FooterHome from "../components/Elements/Footer/FooterHome";
import OurCompany from "../components/Layouts/HomeLayots/OurCompany";
import { useState } from "react";
import Home from "../components/Fragments/Homes/Home";
import PasangLoker from "../components/Layouts/HomeLayots/PasangLoker";
import Info from "../components/Fragments/Homes/Info";
import Blog from "../components/Layouts/HomeLayots/Blog";
import { Link } from "react-router-dom";


const HomePages = () => {
  const [isActive, setIsActive] = useState(false);
  const [infoLokers, setInfoLokers] = useState(false);
  const [blog, setBlog] = useState(false);

  const handleHome = () => {
    setIsActive(false);
    setInfoLokers(false);
    setBlog(false);
  };

  const handleclick = () => {
    setIsActive(true);
    setInfoLokers(false);
    setBlog(false);
  };

  const handleLokers = () => {
    setInfoLokers(true);
    setBlog(false);
  };

  const handleBlog = () => {
    setBlog(true);
  };

  const Componens = () => {
    return (
      <>
        {isActive ? <HeaderHome2 /> : <HeaderHome1 />}
        {isActive ? <PasangLoker /> : <Home />}
        <OurCompany />
      </>
    );
  };

  const AnotherComponens = () => {
    return <>{infoLokers ? <Info /> : Componens()}</>;
  };

  return (
    <>
      <div className="navbar bg-base-100 text-orange-500 drop-shadow-lg z-[1]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <a className="btn btn-ghost normal-case text-3xl font-bold ml-20">
            Forlokers
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <button onClick={handleHome}>Home</button>
            </li>
            <li>
              <button onClick={handleLokers}>Info Loker</button>
            </li>
            <li>
              <button onClick={handleclick}>Pasang Loker</button>
            </li>
            <li>
              <button onClick={handleBlog}>Blog</button>
            </li>
          </ul>
        </div>

        <div className="navbar-end mr-20">
          <Link
            to="/register"
            className="btn btn-outline rounded-full font-bold text-orange-500 border-2 mr-4"
          >
            Daftar
          </Link>
          <Link
            to="/login"
            className="btn bg-orange-500 rounded-full font-bold text-white"
          >
            Masuk
          </Link>
        </div>
      </div>
      {blog ? <Blog /> : AnotherComponens()}
      <FooterHome />
    </>
  );
};

export default HomePages;
