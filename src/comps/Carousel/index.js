import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import './styles.css';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel = () => {
  return (
    <div className="sponsors">
      <h3 className="sponsors-p">Our Sponsors</h3>
      <Swiper
        spaceBetween={30}

        slidesPerView={"auto"}
        breakpoints={{
          // when window width is >= 640px
          0: {
            width: 0,
            slidesPerView:2,
          },
          640: {
            width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        className="swiper-container"
      >
        <SwiperSlide>
          <img
            src="https://cdn.discordapp.com/attachments/852945305280577588/852949606190809130/Zennials-TM_1.PNG"
            alt="Zennials"
            width="200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.discordapp.com/attachments/852945305280577588/852949477312561162/egghead.png"
            alt="egghead"
            width="200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.discordapp.com/attachments/852945305280577588/852949573341020160/streamyard.png"
            alt="streamyard"
            width="200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src=" https://cdn.discordapp.com/attachments/852945305280577588/852949466948435978/dude.png"
            alt="dudeme"
            width="200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.discordapp.com/attachments/852945305280577588/852949430931423241/258017.png"
            alt="yayavar"
            width="100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.discordapp.com/attachments/852945305280577588/852949447054458931/BadeLog.in_-_Logo_Black_1.png"
            width="200"
            alt="bade log"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.discordapp.com/attachments/852945305280577588/852949457507319838/cb_grey.png"
            alt="coding blocks"
            width="200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.discordapp.com/attachments/852945305280577588/852949493313699860/GMC_logo.png"
            alt="give my certi"
            width="200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.discordapp.com/attachments/852945305280577588/852949584836952084/taskade-logo.png"
            alt="taskade"
            width="200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.discordapp.com/attachments/852945305280577588/852949598195417088/yay-logo.f0786dfe.png"
            alt="yay beta"
            width="200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.discordapp.com/attachments/852945305280577588/852949502402232350/juststickers.jpeg"
            alt="yay beta"
            width="200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.discordapp.com/attachments/695495864390778890/859426687271829524/blue_full.png"
            alt="prepbytes"
            width="200"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Carousel;
