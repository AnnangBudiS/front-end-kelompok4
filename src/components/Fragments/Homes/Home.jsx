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
  const API_JOBS = import.meta.env.VITE_MOCK_API_JOB;
  console.log(API_JOBS);

  const getJobDataApi = async () => {
    try {
      const ress = await axios.get(`${API_JOBS}`);
      const getData = await ress.data;

      setJobSlider(getData.splice(1, 5));
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
                title={items.title}
                image={items.image}
                company={items.company}
                salary={items.salary}
                location={items.location}
                position={items.position}
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
