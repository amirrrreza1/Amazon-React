// Slider Component
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./Slider.css";

import { Navigation } from "swiper/modules";

const Slider = ({ sliderData }) => {
  return (
    <div className="slider-container relative">
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySlider"
      >
        {sliderData?.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.src}
              alt={`Slide ${item.id}`}
              className="GradiantSlider"
            />
          </SwiperSlide>
        )) || <p className="placeholder">Loading slides...</p>}

      </Swiper>
    </div>
  );
};

export default Slider;
