import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/IOT Systems.jpg"
import profilePic2 from "../../img/aws.png"
import profilePic3 from "../../img/hacker1.png"
import profilePic4 from "../../img/hacker2.png"
import profilePic5 from "../../img/kubernetes.png"
import profilePic6 from "../../img/machine.png"
import profilePic7 from "../../img/network.png"


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Testimonial.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
    <div className="t-heading">
    <h1>Recent<span>&nbsp; Achivements</span></h1>

    </div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={profilePic1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={profilePic2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={profilePic3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={profilePic4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={profilePic5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={profilePic6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={profilePic7} alt="" /></SwiperSlide>

      </Swiper>
    </>
  );
}
