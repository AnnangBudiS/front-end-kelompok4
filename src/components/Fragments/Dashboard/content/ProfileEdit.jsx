import { TbPencilCog } from "react-icons/tb";
import InputSettings from "../InputDashboard/InputsSetting";
import { useAuth } from "../../../../context/AuthContext";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProfileEdit = () => {
  const { id } = useParams();
  const { updateUserProfile, user } = useAuth();
  // console.log(user);
  const [formData, setFormData] = useState({
    nama_depan: user?.nama_depan || "",
    nama_belakang: user?.nama_belakang || "",
    tanggal_lahir: user?.tanggal_lahir || "",
    email: user?.email || "",
    jns_kel: user?.jns_kel || "",
    nomor_hp: user?.nomor_hp || "",
    domisili: user?.domisili || "",
    deskripsi: user?.deskripsi || "",
  });

  const handleUpdataUser = async (e) => {
    e.preventDefault();

    await updateUserProfile(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="flex flex-col w-full px-52 py-24">
        <h2 className="text-4xl font-bold text-orange-500 mb-10">
          Edit Account{" "}
        </h2>
        <div className="avatar indicator">
          <div className="w-32 rounded-full shadow-md">
            <img src={user?.image} alt="" />
            <span className="badge badge-sm indicator-item ">
              <TbPencilCog />
            </span>
          </div>
        </div>
        <form onSubmit={handleUpdataUser} className="mt-5">
          <InputSettings
            label="Nama Depan"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={user?.nama_depan}
            name="nama_depan"
            value={formData?.nama_depan}
            onChange={handleChange}
          />
          <InputSettings
            label="Nama Belakang"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={user?.nama_belakang}
            name="nama_belakang"
            value={formData.nama_belakang}
            onChange={handleChange}
          />
          <InputSettings
            label="Tempat, Tanggal Lahir"
            type="date"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            name="tanggal_lahir"
          />
          <InputSettings
            label="Alamat Email"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={user?.email}
            name="email"
            value={formData?.email}
            onChange={handleChange}
          />
          <InputSettings
            label="Jenis Kelamin"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={user?.jns_kel}
            name="jns_kelamin"
            value={formData.jns_kel}
            onChange={handleChange}
          />
          <InputSettings
            label="Nomor Telepon"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={user?.nomor_hp}
            name="nomor_hp"
            value={formData.nomor_hp}
            onChange={handleChange}
          />
          <InputSettings
            label="Domisili"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={user?.domisili}
            name="domisili"
            value={formData.domisili}
            onChange={handleChange}
          />

          <InputSettings
            label="Deskripsi"
            className="border-b border-orange-500  focus:outline-none"
            textArea={true}
            name="deskripsi"
          />

          <button className="btn bg-orange-500">Simpan</button>
        </form>
      </div>
    </>
  );
};

export default ProfileEdit;
