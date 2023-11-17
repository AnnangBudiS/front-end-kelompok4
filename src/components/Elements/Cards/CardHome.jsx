const Card = ({ image, position, company, manual, salary, location }) => {
  return (
    <div className="flex justify-center mt-20">
      <div className="card w-96 bg-base-100 border-4 pt-4 border-orange-500">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h1 className="card-title font-bold text-2xl">{position}</h1>
          <h2 className="font-bold text-xl pb-4">{company}</h2>

          <ul className="flex flex-col gap-2">
            <li className="flex flex-row gap-2">
              <img
                src="./Homepage/checkmark.png"
                height="25px"
                width="25px"
                alt=""
              />
              <div className="text-lg text-orange-500 font-medium">
                {location}
              </div>
            </li>
            <li className="flex flex-row gap-2">
              <img
                src="./Homepage/checkmark.png"
                height="25px"
                width="25px"
                alt=""
              />
              <div className="text-lg text-orange-500 font-medium">
                {manual}
              </div>
            </li>
            <li className="flex flex-row gap-2">
              <img
                src="./Homepage/checkmark.png"
                height="25px"
                width="25px"
                alt=""
              />
              <div className="text-lg text-orange-500 font-medium">
                Rp.{salary}
              </div>
            </li>
          </ul>

          <div className="card-actions justify-center pt-20">
            <button className="btn btn-outline bg-white w-36 h-10 rounded-full text-orange-500 ">
              Detail
            </button>
            <button className="btn bg-orange-500 w-36 h-10 rounded-full text-white">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
