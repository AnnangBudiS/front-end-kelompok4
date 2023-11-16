import { Outlet } from "react-router-dom";
import HomePages from "./LayoutsHomes";
import FooterHome from "../../Elements/Footer/FooterHome";
import Card from "../../Elements/Cards/CardHome";

const LayoutsPages = () => {
  return (
    <>
      <header>
        <HomePages />
      </header>
      <main>
        <Outlet />
        <Card />
      </main>
      <footer>
        <FooterHome />
      </footer>
    </>
  );
};

export default LayoutsPages;
