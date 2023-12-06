import { useAuth } from "../../../../context/AuthContext";
import axios from "axios";
import Dropdown from "../../../Elements/Dropdown";
import InputSettings from "../InputDashboard/InputsSetting";
import { useState } from "react";

export default function SettingAcount() {
  const { updateUserProfile, user } = useAuth();

  console.log(user);
  const [newPassword, setNewPassword] = useState({});

  return (
    <div className="pt-32 px-52">
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
          <p>{user?.nomor_hp}</p>
          <p>
            {user?.tempat_lahir},{user?.tanggal_lahir}
          </p>
          <p>{user?.domisili}</p>
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
        <form>
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
