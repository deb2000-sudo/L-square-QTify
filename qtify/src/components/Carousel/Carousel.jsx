import React from 'react';
// import { register } from 'swiper/element/bundle';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from './Carousel.module.css';
import Mcard from '../Card/Mcard';
import CarouselLeft from '../Caraouselbtns/CarouselLeft';
import CarouselRight from '../Caraouselbtns/CarouselRight';
// register();

const Carousel = ({ carouselData }) => {
  // console.log(carouselData,typeof(carouselData));
  return (
    <div className={styles.main}>
      <div className={styles.carouselContainer}>
        <Swiper
          slidesPerView={7}
          spaceBetween={90}
          mousewheel={true}
          navigation={{
            nextEl: ".customNextButton",
            prevEl:".customPrevButton"
          }}
        >
          {carouselData['topalbums'].map((item,index) => (
            <SwiperSlide key={index}>
              <Mcard cardData={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <CarouselLeft/>
        <CarouselRight/>
      </div>
    </div>
  );
};

export default Carousel;
