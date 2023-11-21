"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { useEffect, useState } from "react";

export default function BookSwiper() {
  const [image, setImage] = useState();
  useEffect(() => {
    setImage(
      "data:image/jpeg;base64,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"
    );
  }, []);
  return (
    <>
      <div className="w-7/12 m-auto">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide className="p-1">
            <img className="block w-full" src={image} alt="no image loaded" />
          </SwiperSlide>
          <SwiperSlide className="p-1">
            <img className="block w-full" src={image} alt="no image loaded" />
          </SwiperSlide>
          <SwiperSlide className="p-1">
            <img className="block w-full" src={image} alt="no image loaded" />
          </SwiperSlide>
          <SwiperSlide className="p-1">
            <img className="block w-full" src={image} alt="no image loaded" />
          </SwiperSlide>
          <SwiperSlide className="p-1">
            <img className="block w-full" src={image} alt="no image loaded" />
          </SwiperSlide>
          <SwiperSlide className="p-1">
            <img className="block w-full" src={image} alt="no image loaded" />
          </SwiperSlide>
          <SwiperSlide className="p-1">
            <img className="block w-full" src={image} alt="no image loaded" />
          </SwiperSlide>
          <SwiperSlide className="p-1">
            <img className="block w-full" src={image} alt="no image loaded" />
          </SwiperSlide>
          <SwiperSlide className="p-1">
            <img className="block w-full" src={image} alt="no image loaded" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
