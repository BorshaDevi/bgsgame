'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const Bannar=()=>{
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
      <SwiperSlide><img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750316401/Frame_4_fxvmno.jpg' alt=''/></SwiperSlide>
        <SwiperSlide><img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1752042308/Group_207_xtjh2r.jpg' alt=''/></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Bannar;






// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';


{/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750316401/Frame_4_fxvmno.jpg' alt=''/></SwiperSlide>
        <SwiperSlide><img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750316401/Frame_4_fxvmno.jpg' alt=''/></SwiperSlide>
        <SwiperSlide><img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750316401/Frame_4_fxvmno.jpg' alt=''/></SwiperSlide>
      </Swiper> */}
