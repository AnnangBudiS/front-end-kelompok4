import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const { user } = useAuth();
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataUserProfileById = async () => {
    try {
      const ress = await axios.get(`https://dummyjson.com/users/${id}`);
      const getData = await ress.data;
      console.log(getData);
      setUserProfile(getData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataUserProfileById();
  }, [id]);

  return (
    <section className="mt-24 px-32">
      {loading ? (
        loading
      ) : (
        <>
          {" "}
          <div className="flex w-full justify-around items-center">
            <div className="avatar">
              <div className="w-52 rounded-full shadow-md">
                {user && <img src={userProfile?.image} alt="profile image" />}
              </div>
            </div>
            <div>
              {user && (
                <p className="text-4xl font-bold text-orange-500 mb-2">
                  {userProfile?.username}{" "}
                </p>
              )}
              <p>{userProfile?.gender}</p>
            </div>
            <div>
              <Link
                to={`/edit-profile/${user.id}`}
                className="btn px-10 bg-orange-500 text-slate-50"
              >
                Edit
              </Link>
            </div>
          </div>
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-orange-500">Tentang Saya</h2>
            <p className="text-gray-500">{user.detail_tentang_saya}</p>
          </div>
          <div>
            <h2 className="text-3xl text-orange-500 font-bold mt-10">
              Biodata
            </h2>
            <div className="grid grid-cols-2 mt-2">
              <div className="space-y-2 font-bold">
                <p>Nama Lengkap</p>
                <p>Nama Panggilan</p>
                <p>Tempat, Tanggal Lahir</p>
                <p>Nomor WhatsApp</p>
                <p>Domisili</p>
              </div>
              <div className="space-y-2">
                <p>{userProfile?.firstName + " " + userProfile?.lastName}</p>
                <p>{userProfile?.username}</p>
                <p>{userProfile?.birthDate}</p>
                <p>{userProfile?.phone}</p>
                <p>{userProfile?.address.city}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
