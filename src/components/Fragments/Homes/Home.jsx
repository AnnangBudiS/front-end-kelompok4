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
    <>
      <div className="my-10 mx-32">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Pagination, Navigation]}
          style={{
            "--swiper-navigation-color": "#FFBA08",
          }}
          className="mySwiper p-20"
        >
          {jobSlider.map((items) => (
            <SwiperSlide key={items.id}>
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
    </>
  );
};

export default Home;
