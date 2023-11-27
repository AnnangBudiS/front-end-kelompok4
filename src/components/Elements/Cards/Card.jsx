import { Link } from "react-router-dom";
import ModalApply from "../Modal/Modal";
import { useState } from "react";

const Cards = ({
  key,
  image,
  title,
  company,
  location,
  position,
  salary,
  ...props
}) => {
  return (
    <div
      key={key}
      className="p-4 border-2 border-orange-500 bg-base-100 rounded-xl shadow-xl"
    >
      <CardImg image={image} />
      <CardBody
        title={title}
        company={company}
        location={location}
        position={position}
        salary={salary}
      />
      <CardAction {...props} />
    </div>
  );
};

const CardImg = ({ image }) => {
  return (
    <div className="avatar mb-5">
      <div className="w-16 rounded-full shadow-xl">
        <img src={image} alt="perusahaan.jpg" />
      </div>
    </div>
  );
};

const CardBody = ({ title, company, location, position, salary }) => {
  return (
    <div>
      <h2 className="font-bold">{title}</h2>
      <p className="font-semibold mb-5">{company}</p>
      <ul className="pl-5 text-orange-500 font-semibold mb-5 list-image-[url(list-icon.png)]">
        <li>{location}</li>
        <li>{position}</li>
        <li>Rp. {salary}</li>
      </ul>
    </div>
  );
};

const CardAction = ({ ...props }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  return (
    <div className="flex items-center gap-5">
      <Link
        {...props}
        className="border border-orange-500 p-2 px-5 rounded-full font-semibold"
      >
        Detail
      </Link>
      <button onClick={openModal} className="bg-orange-500 p-2 px-5 rounded-full text-slate-50 font-semibold">
        Aply
      </button>
      <ModalApply open={modalIsOpen} close={closeModal} />
    </div>
  );
};
export default Cards;
