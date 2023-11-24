import FormRegister from "../components/Fragments/Forms/FormRegister";
import Buttons from "../components/Elements/Buttons/buttons";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className=" h-screen flex flex-row">
      <img
        src="./public/images/form/register.png"
        width="679px"
        alt="img"
        className="grayscale"
      />
      <div className="flex flex-col gap-y-6 justify-center items-center w-[1440px]">
        <div className="border bg-white w-[400px] p-6 rounded-[15px] drop-shadow-2xl">
          <h1 className="text-2xl font-bold mb-2 text-center">Daftar</h1>
          <FormRegister />
          <div className="text-center text-sm pt-2">
            <p>
              Sudah Punya Akun?{" "}
              <Link to="/login" className="text-orange-500 underline">
                Masuk
              </Link>
            </p>
          </div>
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
