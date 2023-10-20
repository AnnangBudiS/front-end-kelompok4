import { Fragment, useEffect, useState } from "react";
import NavMenu from "../components/Navbar/NavMenu";
import Sidebar from "../components/Sidebar/Sidebar";
import axios from "axios";

const JobPages = () => {
  const [jobData, setJobData] = useState([]);

  const getAllData = async () => {
    try {
      const res = await axios.get(
        "https://650ffe1a3ce5d181df5cd37b.mockapi.io/job",
      );
      const getData = await res.data;

      console.log(getData);
      setJobData(getData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Fragment>
      <header className="fixed w-full shadow-lg bg-base-100 z-[2]">
        <NavMenu />
      </header>
      <div className="flex gap-20 w-full">
        <aside className="bg-orange-500 h-screen pt-20 p-5 sticky top-0">
          <Sidebar />
        </aside>
        <main className="pt-20 w-full ">
          <div className="p-5 bg-base-100 sticky top-0 z-[1] w-full">
            <h2 className="text-4xl mb-5 text-orange-500 font-bold">
              Temukan Lowongan Kerja Seusai Impianmu
            </h2>
            <p className="pl-5 font-semibold mb-2">
              cari posisi dan Perusahaan impianmu
            </p>
            <div className="flex items-center space-x-5">
              <input
                type="text"
                placeholder="Jabatan, Kata Kunci, Perusahaan"
                className="border border-orange-500 w-96 input rounded-full"
              />
              <button className="btn  bg-orange-500 text-white rounded-full px-10">
                Cari
              </button>
            </div>
          </div>

          <div className="my-20 grid grid-cols-4 gap-5 mx-10">
            {jobData ? (
              jobData.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border-2 border-orange-500 bg-base-100 rounded-xl shadow-xl"
                >
                  <div className="avatar mb-5">
                    <div className="w-16 rounded-full shadow-xl">
                      <img src={item.image} alt="perusahaan.jpg" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold">{item.title}</h2>
                    <p className="font-semibold mb-5">{item.company}</p>
                    <ul className="pl-5 text-orange-500 font-semibold mb-5 list-image-[url(list-icon.png)]">
                      <li>{item.location}</li>
                      <li>{item.position}</li>
                      <li>Rp. {item.salary}</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-5">
                    <button className="border border-orange-500 p-2 px-5 rounded-full font-semibold">
                      Detail
                    </button>
                    <button className="bg-orange-500 p-2 px-5 rounded-full text-slate-50 font-semibold">
                      Aply
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>Loading..</div>
            )}
          </div>
        </main>
      </div>
      <footer></footer>
    </Fragment>
  );
};

export default JobPages;
