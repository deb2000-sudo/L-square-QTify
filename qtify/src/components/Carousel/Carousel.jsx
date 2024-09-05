import React from 'react';
import { register } from 'swiper/element/bundle';
import styles from './Carousel.module.css';
import Mcard from '../Card/Mcard';
register();

const Carousel = ({ carouselData }) => {
  // console.log(carouselData,typeof(carouselData));
  return (
    <div className={styles.main}>
      <div className={styles.carouselContainer}>
        <swiper-container
          slides-per-view="7"
          space-between="90"
          mousewheel-invert="true"
          navigation="true"
          navigation-next-el=".customNextButton"
          navigation-prev-el=".customPrevButton"
        >
          {carouselData['topalbums'].map((item) => (
            <swiper-slide>
              <Mcard cardData={item} />
            </swiper-slide>
          ))}
        </swiper-container>
        <div className={`${styles.navBtn} customPrevButton`}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 16C32 7.1875 24.8125 0 16 0C7.125 0 0 7.1875 0 16C0 24.875 7.125 32 16 32C24.8125 32 32 24.875 32 16ZM16.9375 8.4375C17.5 7.875 18.4375 7.875 19 8.4375C19.625 9.0625 19.625 10 19 10.5625L13.5625 16L19 21.4375C19.625 22.0625 19.625 23 19 23.5625C18.4375 24.1875 17.5 24.1875 16.9375 23.5625L10.4375 17.0625C9.8125 16.5 9.8125 15.5625 10.4375 15L16.9375 8.4375Z"
              fill="#34C94B"
            />
          </svg>
        </div>
        <div className={`${styles.navBtn} customNextButton`}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16C0 24.875 7.125 32 16 32C24.8125 32 32 24.875 32 16C32 7.1875 24.8125 0 16 0C7.125 0 0 7.1875 0 16ZM15.0625 23.5625C14.4375 24.1875 13.5 24.1875 12.9375 23.5625C12.3125 23 12.3125 22.0625 12.9375 21.5L18.375 16.0625L12.9375 10.625C12.3125 10 12.3125 9.0625 12.9375 8.5C13.5 7.875 14.4375 7.875 15.0625 8.5L21.5625 14.9375C22.125 15.5625 22.125 16.5 21.5625 17.0625L15.0625 23.5625Z"
              fill="#34C94B"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
