import { useAuth } from "../../../../context/AuthContext";
import { TbPencilCog } from "react-icons/tb";
import InputSettings from "../InputDashboard /InputsSetting";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProfileEdit = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState([]);

  const getDataUserProfileById = async () => {
    try {
      const ress = await axios.get(`https://dummyjson.com/users/${id}`);
      const getData = await ress.data;
      console.log(getData);
      setUserProfile(getData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.targe);
    const { fullName, username, birthDate, email, gender, phone } =
      Object.fromEntries(formData);
    axios
      .put(`https://dummyjson.com/users/${id}`, {
        fullName,
        username,
        birthDate,
        email,
        gender,
        phone,
      })

      .then(async (ress) => {
        if (ress.status === 500) return alert("something went wrong");
        return alert("edit profile success");
      });
  };

  useEffect(() => {
    getDataUserProfileById();
  }, [id]);

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
        <form onSubmit={handleSubmitEdit} className="mt-5">
          <InputSettings
            label="Nama Lengkap"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={userProfile.firstName + " " + userProfile.lastName}
            name="fullName"
          />
          <InputSettings
            label="User Name"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={userProfile.username}
            name="username"
          />
          <InputSettings
            label="Tempat, Tanggal Lahir"
            type="date"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder=""
            name="birthDate"
          />
          <InputSettings
            label="Alamat Email"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={userProfile.email}
            name="email"
          />
          <InputSettings
            label="Jenis Kelamin"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={userProfile.gender}
            name="gender"
          />
          <InputSettings
            label="Nomor Telepon"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder={userProfile.phone}
            name="phone"
          />
          <InputSettings
            label="Domisili"
            className="border-b border-orange-500 max-w-sm focus:outline-none"
            placeholder=""
            name=""
          />

          <InputSettings
            label="Deskripsi"
            className="border-b border-orange-500  focus:outline-none"
            textArea={true}
          />

          <button className="btn bg-orange-500">Simpan</button>
        </form>
      </div>
    </>
  );
};

export default ProfileEdit;
