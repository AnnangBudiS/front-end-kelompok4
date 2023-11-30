import { useAuth } from "../../../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <section className="mt-24 px-32">
      <div className="flex w-full justify-around items-center">
        <div className="avatar">
          <div className="w-52 rounded-full shadow-md">
            {user && <img src={user.foto_pekerja} alt="profile image" />}
          </div>
        </div>
        <div>
          {user && (
            <p className="text-4xl font-bold text-orange-500 mb-2">
              {user.nama_depan + " " + user.nama_belakang}{" "}
            </p>
          )}
          {user && <p>{user.jns_kel} </p>}
        </div>
        <div>
          <button className="btn px-10 bg-orange-500 text-slate-50">
            Edit
          </button>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold text-orange-500">Tentang Saya</h2>
        <p className="text-gray-500">{user.detail_tentang_saya}</p>
      </div>

      <div>
        <h2 className="text-3xl text-orange-500 font-bold mt-10">Biodata</h2>
        <div className="grid grid-cols-2 mt-2">
          <div className="space-y-2 font-bold">
            <p>Nama Lengkap</p>
            <p>Nama Panggilan</p>
            <p>Tempat, Tanggal Lahir</p>
            <p>Nomor WhatsApp</p>
            <p>Domisili</p>
          </div>
          <div className="space-y-2">
            {user && <p>{user.nama_depan + " " + user.nama_belakang}</p>}
            {user && <p>{user.nama_depan}</p>}
            <p>
              {user.tempat_lahir}, {user.tanggal_lahir}
            </p>
            {user && <p>{user.gender}</p>}
            <p>{user.nomor_hp}</p>
            <p>{user.domisili}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
