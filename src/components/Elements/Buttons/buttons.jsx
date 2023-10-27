import { FaGoogle, FaFacebook } from "react-icons/fa";

const Buttons = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center mt-2">
        <p className="w-[90px] h-0 border border-orange-500 mx-1"></p>
        <p className="text-[12px] text-orange-500 mx-2">Atau dengan</p>
        <p className="w-[90px] h-0 border border-orange-500 mx-1"></p>
      </div>
      <div className="flex flex-row justify-center items-center text-sm p-5">
        <button
          className="flex flex-row justify-center items-center h-9 mx-3 w-[125px] font-semibold text-[12px] rounded-[30px] text-orange-500 border border-orange-500 "
          type="button"
        >
          {" "}
          <div className="px-2 text-[15px]">
            <FaGoogle />
          </div>
          Google
        </button>
        <button
          className="flex flex-row justify-center items-center h-9 mx-3 w-[125px] font-semibold text-[12px] rounded-[30px] text-orange-500 border border-orange-500 "
          type="button"
        >
          <div className="px-2 text-[16px]">
            <FaFacebook />
          </div>
          Facebook
        </button>
      </div>
    </>
  );
};

export default Buttons;
