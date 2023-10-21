import { Link } from "react-router-dom";

const Links = ({ title, to, classname, handleClick }) => {
  return (
    <li className={`mb-2 p-2 ${classname}`}>
      <Link to={to} onClick={handleClick}>
        {title}
      </Link>
    </li>
  );
};

export default Links;
