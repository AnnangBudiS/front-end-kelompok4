import { useEffect, useState } from "react";
import Card from "../../Elements/Cards/CardHome";
import axios from "axios";
import Cards from "../../Elements/Cards/Card";

const InfoLoker = () => {
  const [state, setState] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getData = async () => {
    try {
      const res = await axios.get(`${API_KEY}/deskripsiLowongan`);
      const datas = await res.data.data;

      setState(datas);
      console.log(datas);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="bg-white w-full ">
        <div className="pl-20 pt-8 pb-1 top-0 z-[1] w-3/5 bg-transparent">
          <div>
            <p className="pl-5 font-semibold mb-2">
              cari posisi dan Perusahaan impianmu
            </p>
          </div>
          <div className="flex items-center space-x-5 mr-24">
            <input
              type="text"
              placeholder="Jabatan, Kata Kunci, Perusahaan"
              className="border border-orange-500 w-full input rounded-full"
            />
            <button className="btn bg-orange-500 text-white rounded-full px-10">
              Cari
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 container w-full mx-auto mt-10">
          {state.map((items, index) => (
            <Cards
              key={index}
              image={items?.foto_perusahaan}
              position={items.judul}
              salary={items.gaji}
              location={items.alamat_penempatan}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoLoker;
