import { useState } from "react";
import { Link } from "react-router-dom";

const HomePages = () => {
  const [isActive, setIsActive] = useState(false);
  const [infoLokers, setInfoLokers] = useState(false);

  const handleHome = () => {
    setIsActive(false);
    setInfoLokers(false);
  };

  const handleclick = () => {
    setIsActive(true);
    setInfoLokers(false);
  };

  const handleLokers = () => {
    setInfoLokers(true);
  };

  //   const Componens = () => {
  //     return (
  //       <>
  //         {isActive ? <HeaderHome2 /> : <HeaderHome1 />}
  //         {isActive ? <PasangLoker /> : <Home />}
  //         <OurCompany />
  //       </>
  //     );
  //   };

  return (
    <>
      <div className="navbar bg-base-100 text-orange-500 drop-shadow-lg">
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
              <Link to="/" onClick={handleHome}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleLokers}>
                Info Loker
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleclick}>
                Pasang Loker
              </Link>
            </li>
            <li>
              <a>Blog</a>
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
      {/* {infoLokers ? <Info /> : Componens()}
      <FooterHome /> */}
    </>
  );
};

export default HomePages;
