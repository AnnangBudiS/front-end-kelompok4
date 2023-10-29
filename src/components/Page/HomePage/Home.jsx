import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <>
      <div className="px-20">
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
          className="mySwiper"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
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
