import { useAuth } from "../../../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <section className="mt-24 px-32">
      <div className="flex w-full justify-around items-center">
        <div className="avatar">
          <div className="w-52 rounded-full shadow-md">
            {user && <img src={user.image} alt="profile image" />}
          </div>
        </div>
        <div>
          {user && (
            <p className="text-4xl font-bold text-orange-500 mb-2">
              {user.firstName + " " + user.lastName}{" "}
            </p>
          )}
          {user && <p>{user.gender} </p>}
        </div>
        <div>
          <button className="btn px-10 bg-orange-500 text-slate-50">
            Edit
          </button>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold text-orange-500">Tentang Saya</h2>
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          aspernatur qui deleniti neque voluptate placeat! Ullam impedit aliquid
          suscipit consequuntur dolorum. Quam, reiciendis fuga. Quasi dolores
          nihil veniam minima facilis reiciendis et quod natus, quis sed rerum,
          accusantium blanditiis! Dolore, adipisci. Nihil deserunt dicta quasi
          excepturi omnis rerum debitis esse.
        </p>
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
            {user && <p>{user.firstName + " " + user.lastName}</p>}
            {user && <p>{user.firstName}</p>}
            <p>01 januari 1990</p>
            {user && <p>{user.gender}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
