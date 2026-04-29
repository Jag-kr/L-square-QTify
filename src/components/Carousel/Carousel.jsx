import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Card from "../Card/Card";
import styles from "./Carousel.module.css";

import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";

function Carousel({ data = [], type }) {
  return (
    <div className={styles.carouselWrapper}>
      <button className={`${styles.prev} ${"prev-btn-" + type}`}>
        <img src={LeftArrow} alt="prev" />
      </button>

      <button className={`${styles.next} ${"next-btn-" + type}`}>
        <img src={RightArrow} alt="next" />
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".prev-btn-" + type,
          nextEl: ".next-btn-" + type,
        }}
        spaceBetween={40}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 7 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              image={item.image}
              follows={item.follows}
              title={item.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
