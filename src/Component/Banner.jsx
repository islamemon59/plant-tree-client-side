import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="py-6">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper min-h-[600px] rounded-xl"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://cdn.create.vista.com/api/media/medium/193173092/stock-photo-plant-tree-passion-fruit-strong-seedlings-planting-young-tree-old?token=)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="mt-30 md:space-y-5 space-y-2">
            <div className="title" data-swiper-parallax="-300">
              <span className="md:text-6xl font-bold">Grow Green, Breathe Clean</span>
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              <span className="md:text-3xl">Planting trees today for a healthier, fresher tomorrow.</span>
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p className="md:text-[18px] leading-7">
                Planting trees helps purify the air, absorb carbon dioxide, and
                reduce the effects of climate change. Trees also improve soil
                quality and conserve water.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-30 md:space-y-5 space-y-2">
            <div className="title" data-swiper-parallax="-300">
              <span className="md:text-6xl font-bold">Roots of Life</span>
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              <span className="md:text-3xl">Trees support wildlife, clean the air, and enrich our planet.</span>
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p className="md:text-[18px] leading-7">
                Trees provide shelter and food for many animals, birds, and insects. By planting trees, we support biodiversity and help protect ecosystems.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-30 md:space-y-5 space-y-2">
            <div className="title" data-swiper-parallax="-300">
              <span className="md:text-6xl font-bold">Plant a Tree, Shape the Future</span>
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              <span className="md:text-3xl">A small act of planting can lead to big environmental change.</span>
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p className="md:text-[18px] leading-7">
                Trees offer shade, reduce noise pollution, and create green spaces that improve mental health and community well-being. They also enhance the beauty of any area.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
