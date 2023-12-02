import { useAuth } from "../../../../context/AuthContext";
import axios from "axios";
import Dropdown from "../../../Elements/Dropdown";
import InputSettings from "../InputDashboard /InputsSetting";

export default function Setting() {
  const { user } = useAuth();

  const handleUpdatePassword = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { password } = Object.fromEntries(formData);

    axios
      .put(`https://dummyjson.com/users/${user}`, {
        password,
      })
      .then(async (ress) => {
        if (ress.status === 200) return "change password successfully";
      });
  };

  return (
    <div className="pt-32 p-20">
      <h2 className="text-orange-500 text-3xl font-bold mb-5">Setting</h2>
      <p className="text-orange-500 font-bold">User Information</p>
      <div className="flex justify-between my-5 font-bold">
        <section>
          <p>Email</p>
          <p>Phone Number</p>
          <p>Date of Birth</p>
          <p>Acoount region</p>
        </section>
        <section>
          <p>{user?.email}</p>
          <p>1234 123 123 1233</p>
          <p>xx-xxxxxx-xxxx</p>
          <p>indonesia</p>
        </section>
      </div>
      <hr className="border-2 border-orange-500" />
      <p className="text-orange-500 font-bold mt-5">Date & Time</p>
      <div>
        <section className="flex justify-between my-5 font-bold items-center">
          <p>Set timezone automatically using your location</p>
          <input type="checkbox" className="toggle toggle-warning" />
        </section>
        <section className="flex justify-between my-5 font-bold items-center">
          <p>
            <p>Set timezone automatically using your location</p>
          </p>
          <p>
            <Dropdown />
          </p>
        </section>
      </div>
      <hr className="border-2 border-orange-500" />
      <div>
        <p className="text-orange-500 font-bold mt-5">Pengaturan Bahasa</p>
        <section className="flex justify-between my-5 font-bold">
          <p>Bahasa Utama</p>
          <p>Bahasa Indonesia</p>
        </section>
      </div>
      <hr className="border-2 border-orange-500" />
      <div>
        <p className="text-orange-500 font-bold mt-5">Ubah Password</p>
        <form onSubmit={handleUpdatePassword}>
          <InputSettings
            title="Password Baru"
            type="password"
            name="password"
            placeholder="Masukan Password Baru"
          />
          <hr className="border-2 border-orange-500" />
          <button className="btn mt-5 bg-orange-500">Simpan</button>
        </form>
      </div>
    </div>
  );
}
