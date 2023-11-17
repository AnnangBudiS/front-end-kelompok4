import { useAuth } from "../../../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  console.log(user);

  return (
    <section className="mt-24">
      <div className="flex w-full justify-around px-20 items-center">
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

      <div className="mt-6">
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
    </section>
  );
}
