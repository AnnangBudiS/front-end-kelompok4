import InputSettings from "../InputDashboard/InputsSetting";
import { useAuth } from "../../../../context/AuthContext";
import { useEffect, useState } from "react";

const ProfileEdit = () => {
  const { updateUserProfile, user } = useAuth();

  const [formData, setFormData] = useState({
    nama_depan: user?.nama_depan || "",
    nama_belakang: user?.nama_belakang || "",
    tempat_lahir: user?.tempat_lahir || "",
    tanggal_lahir: user?.tanggal_lahir || "",
    email: user?.email || "",
    jns_kel: user?.jns_kel || "",
    nomor_hp: user?.nomor_hp || "",
    domisili: user?.domisili || "",
    detail_tentang_saya: user?.detail_tentang_saya || "",
    panggilan: user?.panggilan || "",
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

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div className="flex flex-col w-full px-52 py-24">
        <h2 className="text-4xl font-bold text-orange-500 mb-10">
          Edit Account{" "}
        </h2>

        <form onSubmit={handleUpdataUser} className="mt-5">
          <div className="flex flex-col">
            <div className="avatar">
              <div className="w-32 rounded-full shadow-md">
                <img src={user?.image} alt="" />
              </div>
            </div>
            <input
              type="file"
              className="file-input file-input-ghost w-full max-w-xs"
              name="image"
            />
          </div>

          <InputSettings
            label="Nama Depan"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={user?.nama_depan}
            name="nama_depan"
            // value={profileData?.nama_depan}
            onChange={handleChange}
          />
          <InputSettings
            label="Nama Belakang"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={user?.nama_belakang}
            name="nama_belakang"
            // value={profileData?.nama_belakang}
            onChange={handleChange}
          />
          <div className="flex items-center gap-4">
            <InputSettings
              label="Tempat Lahir"
              className="border-b border-orange-500 max-w-sm focus:outline-none"
              placeholder={user?.tempat_lahir}
              name="tempat_lahir"
              // value={profileData?.tempat_lahir}
              onChange={handleChange}
            />
            <InputSettings
              label="Tanggal Lahir"
              type="date"
              className="border-b border-orange-500 max-w-sm focus:outline-none"
              name="tanggal_lahir"
            />
          </div>

          <InputSettings
            label="Alamat Email"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={user?.email}
            name="email"
            // value={profileData?.email}
            onChange={handleChange}
          />

          <InputSettings
            label="Jenis Kelamin"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={user?.jns_kel}
            name="jns_kel"
            // value={profileData?.jns_kel}
            onChange={handleChange}
          />
          <InputSettings
            label="Nomor Telepon"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={user?.nomor_hp}
            name="nomor_hp"
            // value={profileData?.nomor_hp}
            onChange={handleChange}
          />
          <InputSettings
            label="Domisili"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={user?.domisili}
            name="domisili"
            // value={profileData?.domisili}
            onChange={handleChange}
          />

          <InputSettings
            label="Deskripsi"
            className="border-b border-orange-500  focus:outline-none"
            textArea={true}
            name="detail_tentang_saya"
          />

          <button className="btn bg-orange-500">Simpan</button>
        </form>
      </div>
    </>
  );
};

export default ProfileEdit;
