import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css'
import "swiper/swiper-bundle.min.css";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper";

export default function Tools() {
    return (

        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Autoplay]}
            className="toolsSwiper"
            autoplay={{
                delay: 2200,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
                <img src={require("../img/tools/html-icon.png")} alt="html" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/css.png")} alt="CSS" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/js.png")} alt="JS" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/jquery.png")} alt="Jquery" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/react-icon.png")} alt="react" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/node.png")} alt="node" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/mysql.png")} alt="mysql" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/angular-icon.png")} alt="angular" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/github-w.png")} alt="github" />
            </SwiperSlide>
        </Swiper>

    );
}
