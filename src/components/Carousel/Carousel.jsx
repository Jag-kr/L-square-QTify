import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

function Carousel({ data, children, renderItem, cardsPerView = 1 }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={cardsPerView}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 16 },
          480: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
          1280: { slidesPerView: 5, spaceBetween: 24 },
          1536: { slidesPerView: 6, spaceBetween: 24 },
        }}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        navigation={{
          nextEl: `.${styles.navNext}`,
          prevEl: `.${styles.navPrev}`,
        }}
        className={styles.swiper}
      >
        {data &&
          data.map((item, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              {renderItem ? renderItem(item) : children}
            </SwiperSlide>
          ))}
      </Swiper>

      <button
        className={`${styles.navButton} ${styles.navPrev} ${
          isBeginning ? styles.disabled : ""
        }`}
        onClick={() => swiperRef.current?.swiper.slidePrev()}
        disabled={isBeginning}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
            fill="currentColor"
          />
        </svg>
      </button>

      <button
        className={`${styles.navButton} ${styles.navNext} ${
          isEnd ? styles.disabled : ""
        }`}
        onClick={() => swiperRef.current?.swiper.slideNext()}
        disabled={isEnd}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}

export default Carousel;
