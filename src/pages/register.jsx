import FormRegister from "../components/Fragments/Forms/FormRegister";
import Buttons from "../components/Elements/Buttons/buttons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleRegister = async (event) => {
    event.preventDefault();
    const newData = new FormData(event.target);
    const { email, nama_depan, nama_belakang, nomor_hp, password } =
      Object.fromEntries(newData);
    try {
      const ress = await axios.post(`${API_KEY}/profilPekerja`, {
        email,
        nama_depan,
        nama_belakang,
        nomor_hp,
        password,
      });
      console.log(ress);
      if (ress.status === 201) {
        navigate("/login");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during registrastion");
    }
  };

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
          <FormRegister onRegister={handleRegister} />
          <Buttons />
          <div className="text-center text-sm pt-2">
            <p>
              Sudah Punya Akun?{" "}
              <Link to="/login" className="text-orange-500 underline">
                Masuk
              </Link>
            </p>
          </div>
          {/* <Buttons /> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
