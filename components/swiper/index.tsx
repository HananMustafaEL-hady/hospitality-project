import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
SwiperCore.use([FreeMode, Navigation, Thumbs]);
interface Props {
  images: any[];
  handleDeleteImage: Function;
}
export const ImagesSwiper: React.FC<Props> = ({
  images,
  handleDeleteImage,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <section className="container">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={URL.createObjectURL(item)} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={4}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="divImage">
                <i
                  className="far fa-ban deleteImage"
                  onClick={() => handleDeleteImage(index)}
                ></i>
                <img src={URL.createObjectURL(item)} />
              </div>{" "}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
