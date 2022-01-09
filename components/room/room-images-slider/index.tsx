import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
SwiperCore.use([FreeMode, Navigation, Thumbs]);
export const RoomDetailsSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <section className="container">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="/room3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://hotels.elgouna.com/wp-content/uploads/2019/10/Mosaique_Hotel_El_Gouna_Red_Sea_Egypt_twin_bed_room_3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/205684046.jpg?k=edd4b442376ac9cf1784cb06c8de0dc8a6037a871e50f060ba8bbcdc297cb74a&o=" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://miro.medium.com/max/1400/0*xpwwwTFkP0mA4Gt7.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={4}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/room3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://hotels.elgouna.com/wp-content/uploads/2019/10/Mosaique_Hotel_El_Gouna_Red_Sea_Egypt_twin_bed_room_3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/205684046.jpg?k=edd4b442376ac9cf1784cb06c8de0dc8a6037a871e50f060ba8bbcdc297cb74a&o=" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://miro.medium.com/max/1400/0*xpwwwTFkP0mA4Gt7.jpg" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
