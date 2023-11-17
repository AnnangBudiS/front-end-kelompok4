import { useEffect, useState } from "react";
import Card from "../../Elements/Cards/CardHome";
import axios from "axios";

const InfoLoker = () => {
  const [state, setState] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://650ffe1a3ce5d181df5cd37b.mockapi.io/job",
      );
      const datas = await res.data;

      setState(datas);
      console.log(datas);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  // const response = await fetch(`${}`)
  // const loker = await response.json()

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

        <div className="grid grid-cols-3 gap-3">
          {/* {loker.map(data => {
              return (
                <div key={} className='shadow-xl'>
                  <Card title={} images={} id={}/>
                </div>
              )
            })
            } */}
          {state.map((items, index) => (
            <Card
              key={index}
              image={items.image}
              position={items.position}
              salary={items.salary}
              location={items.location}
            />
          ))}
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoLoker;
