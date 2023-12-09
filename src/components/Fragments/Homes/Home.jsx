import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../Elements/Cards/Card";

const Home = () => {
  const [jobSlider, setJobSlider] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getJobDataApi = async () => {
    try {
      const ress = await axios.get(`${API_KEY}/deskripsiLowongan`);
      const getData = await ress.data.data;

      console.log(getData);
      setJobSlider(getData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getJobDataApi();
  }, []);

  return (
    <section className="px-5 md:px-56">
      <div className="my-10  ">
        <h2 className="text-center text-3xl text-orange-500 font-bold mb-5">
          Info Loker
        </h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={100}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Pagination, Navigation]}
          style={{
            "--swiper-navigation-color": "#FFBA08",
          }}
          className=""
        >
          {jobSlider.map((items) => (
            <SwiperSlide className="mr-32" key={items.id}>
              <Cards
                title={items.judul}
                image={items.foto_perusahaan}
                salary={items.gaji}
                location={items.alamat_penempatan}
                position={items.minimal_pendidikan}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center py-10">
        <a className="btn text-white bg-orange-500 w-80 h-12 rounded-full text-xl flex gap-3">
          See More
          <img src="./Homepage/seemore.png" width="18px" height="18px" />
        </a>
      </div>
    </section>
  );
};

export default Home;
