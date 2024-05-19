import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner from './Banner';
import imageone from '../assets/austin-distel-rxpThOwuVgE-unsplash.webp'
import imagetwo from '../assets/benjamin-child-GWe0dlVD9e0-unsplash.webp'
import imagethree from '../assets/lycs-architecture-U2BI3GMnSSE-unsplash.webp'
import imageo from '../assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg'

export default function App() {
  return (
    <div className=' px-6 py-10  relative z-0'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Banner image={imageo} text='"Empowering dreams, one job at a time."'></Banner>
        </SwiperSlide>
        <SwiperSlide>
        <Banner image={imageone} text='"Unleashing potential, securing futures."'></Banner>
        </SwiperSlide>
        <SwiperSlide>
        <Banner image={imagetwo} text='"Crafting careers, shaping destinies."'></Banner>
        </SwiperSlide>
        <SwiperSlide>
        <Banner image={imagethree} text='"Empowering individuals, enriching communities."'></Banner>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
