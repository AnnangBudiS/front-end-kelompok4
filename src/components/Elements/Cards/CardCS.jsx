import PropTypes from 'prop-types';
    
const CardCS = ({ nama, cs }) => {
    CardCS.propTypes = {
        nama: PropTypes.string.isRequired,
        cs: PropTypes.string.isRequired
      };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl border border-orange-500 ml-2">
        <figure>
          <img
            src="\public\Homepage\bca.png"
            alt="Shoes"
            className="rounded-full w-48 h-48"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-center text-xl text-orange-500 font-bold pb-2">{nama}</h2>
          <p className='flex justify-center pb-4'>{cs}</p>
          <div className="card-actions justify-center">
            <button className="btn bg-orange-500 rounded-full">Hubungi CS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCS;
