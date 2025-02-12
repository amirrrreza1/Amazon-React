import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./SlideBar.css";

import { FreeMode } from "swiper/modules";

export default function SlidableNavbar({ SlideBarData }) {
  return (
    <>
      <div className="w-full h-[40px] bg-secondColor text-white">
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 3.7,
            },
            400: {
              slidesPerView: 5,
            },
            600: {
              slidesPerView: 7.5,
            },
            800: {
              slidesPerView: 10,
            },
            1000: {
              slidesPerView: 12,
            },
            1300: {
              slidesPerView: 20,
            },
          }}
          spaceBetween={0}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide className="!w-fit hidden lg:flex text-[14px] h-full mx-2 bg-transparent SlideBarBorder cursor-pointer gap-2">
            <img src="./Images/SVG/Menu.svg" alt="MenuIcon" className="!w-[20px] !h-[25px]"/>
            All
          </SwiperSlide>
          {SlideBarData?.map((item) => {
            return (
              <SwiperSlide
                className="!w-fit text-[14px] h-full mx-2 bg-transparent SlideBarBorder cursor-pointer"
                key={item.id}
              >
                {item.text}
              </SwiperSlide>
            );
          })}
          <SwiperSlide className="bg-transparent"></SwiperSlide>;
        </Swiper>
      </div>
    </>
  );
}
