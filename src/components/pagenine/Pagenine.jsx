import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { universityproduct } from "../../static/router";

const Pagenine = () => {
  const pagenineItem = universityproduct?.map((el) => (
    <SwiperSlide key={el.id}>
      <div className="pagenine__card">
        <img src={el.img} alt={el.title} />
        <div className="pagenine__card__content">
          <p>{el.title}</p>
          <span>${el.price}</span>
        </div>
      </div>
    </SwiperSlide>
  ));
  return (
    <div className="pagenine">
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
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
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
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
          id="pegenine__cards__two"
          className="pagenine__cards "
        >
          {pagenineItem}
        </Swiper>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
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
          id="pegenine__cards__three"
          className="pagenine__cards "
        >
          {pagenineItem}
        </Swiper>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
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
          id="pegenine__cards__four"
          className="pagenine__cards "
        >
          {pagenineItem}
        </Swiper>
      </div>
    </div>
  );
};

export default Pagenine;
