import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { dreamproduct } from "../../static/router";

const Pagenine = () => {
  const pagenineItem = dreamproduct?.map((el) => (
    <SwiperSlide key={el.id}>
      <div className="pagenine__card">
        <img src={el.img} alt={el.title} />
        <div className="pagenine__card__content">
          <p className="university__pagenine__title">{el.title}</p>
          <span>${el.price}</span>
        </div>
      </div>
    </SwiperSlide>
  ));
  return (
    <div className="pagenine">
      <div className="container">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          //   centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Navigation, Mousewheel, Keyboard]}
          loop={true}
          className="pagenine__cards"
        >
          {pagenineItem}
        </Swiper>
      </div>
    </div>
  );
};

export default Pagenine;
