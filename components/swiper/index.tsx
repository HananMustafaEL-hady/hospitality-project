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
  isbusy?: boolean;
}
export const ImagesSwiper: React.FC<Props> = ({ images, isbusy }) => {
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
              <div className="container-overlay">
                <img src={item.original} />
                {isbusy ? (
                  <div className="container-overlay__img">
                    <div className="container-overlay__text">
                      الغرفة معطلة الآن
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
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
                <img src={item.original} />
              </div>{" "}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
