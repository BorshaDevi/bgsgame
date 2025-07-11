'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Bannar=()=>{
  return (
    <>
      <Swiper
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
        <SwiperSlide ><img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1752208186/WhatsApp_Image_2025-07-10_at_15.25.57_7f8a7d25_hgey1l.jpg' alt=''/></SwiperSlide>
        <SwiperSlide  ><img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1752042308/Group_207_xtjh2r.jpg' alt=''/></SwiperSlide>
        {/* <SwiperSlide ><img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750316401/Frame_4_fxvmno.jpg' alt=''/></SwiperSlide>
        <SwiperSlide  ><img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1752042308/Group_207_xtjh2r.jpg' alt=''/></SwiperSlide> */}
      </Swiper>
      
    </>
  );
}
export default Bannar;






