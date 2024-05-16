import React, { useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { heroItemproduct } from "../../static/router";
import swiperimg1 from "../../assets/images/course3.png";
import swiperimg2 from "../../assets/images/course2.png";
import swiperimg3 from "../../assets/images/course1.png";
import swiperimg4 from "../../assets/images/course4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  const heroItem = heroItemproduct?.map((el) => (
    <div key={el.id} className="hero__wrapper__card">
      <img src={el.img} alt={el.title} />
      <div className="hero__card__titles">
        <h3>{el.title}</h3>
        <p>{el.text}</p>
      </div>
      <FaArrowRight />
    </div>
  ));

  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__wrapper__titles">
            <h1 className="hero__wrapper__title">
              Online batch admission of 2023 is going on!
            </h1>
            <p>
              6-10 live classes per week depending on class, along with lecture
              sheets and regular exam facility
            </p>
          </div>
          <div className="hero__cards__link__wrapper">
            <div className="hero__wrapper__cards">{heroItem}</div>
            <span>Know more about online batch</span>
          </div>
          <div className="hero__wrapper__titles">
            <h1 className="hero__wrapper__title">New Year, New Skills</h1>
            <p>
              Ten Minute School courses and bundles will be available for more
              savings in the new yea
            </p>
          </div>
          <div className="hero__swiper">
            <Swiper
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              centeredSlides={true}
              className="swipper__wrapper"
            >
              <SwiperSlide>
                <img src={swiperimg1} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg3} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg2} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg4} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg3} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg1} alt="alt" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              loop={true}
              spaceBetween={30}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              centeredSlides={true}
              id="swipper__wrapper__two"
              className="swipper__wrapper  "
            >
              <SwiperSlide>
                <img src={swiperimg1} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg3} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg2} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg4} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg3} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg1} alt="alt" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              loop={true}
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              centeredSlides={true}
              id="swipper__wrapper__three"
              className="swipper__wrapper "
            >
              <SwiperSlide>
                <img src={swiperimg1} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg3} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg2} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg4} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg3} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg1} alt="alt" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              loop={true}
              spaceBetween={30}
              slidesPerView={4}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              centeredSlides={true}
              id="swipper__wrapper__four"
              className="swipper__wrapper  "
            >
              <SwiperSlide>
                <img src={swiperimg1} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg3} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg2} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg4} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg3} alt="alt" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swiperimg1} alt="alt" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
