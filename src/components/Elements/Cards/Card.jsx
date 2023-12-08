import { Link } from "react-router-dom";

const Cards = ({
  key,
  image,
  title,
  company,
  location,
  required,
  salary,
  addDashboard,
  ...props
}) => {
  return (
    <div
      key={key}
      className="p-4 border-2 border-orange-500 bg-base-100 rounded-xl shadow-xl"
    >
      <div className="avatar mb-5">
        <div className="w-16 rounded-full shadow-xl">
          <img src={image} alt="perusahaan.jpg" />
        </div>
      </div>
      <div>
        <h2 className="font-bold">{title}</h2>
        <p className="font-semibold mb-5">{company}</p>
        <ul className="pl-5 text-orange-500 font-semibold mb-5 list-image-[url(list-icon.png)]">
          <li>{location}</li>
          <li>{required}</li>
          <li>Rp. {salary}</li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <Link
          {...props}
          className="border border-orange-500 p-2 px-5 rounded-full font-semibold"
        >
          Detail
        </Link>
        <button
          onClick={addDashboard}
          className="bg-orange-500 p-2 px-5 rounded-full text-slate-50 font-semibold"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Cards;
