import FormLogin from "../components/Fragments/Forms/FormLogin";
import Buttons from "../components/Elements/Buttons/buttons";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className=" h-screen flex flex-row">
      <img
        src="./public/img/login.png"
        width="679px"
        alt="img"
        className="grayscale"
      />
      <div className="flex flex-col gap-y-6 justify-center items-center w-[1440px]">
        <div className="border bg-white w-[400px] p-6 rounded-[15px] drop-shadow-2xl">
          <h1 className="text-2xl font-bold mb-4 text-center">Masuk</h1>
          <FormLogin />
          <div className="text-center text-sm pt-2">
            <p>
              Belum Punya Akun?{" "}
              <Link to="/register" className="text-orange-500 underline">
                Daftar
              </Link>
            </p>
            <p className="p-3">
              <a href="#" className="text-orange-500">
                Lupa Password?
              </a>
            </p>
          </div>
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
