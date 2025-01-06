import { useRef } from 'react';
import Mcard from '../Card/Mcard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideNextButton, SlidePrevButton } from '../Caraouselbtns/Sliderbutton'; // Your custom buttons
import 'swiper/css'; // Swiper's CSS
import styles from './Carousel.module.css';

const Carousel = ({ CarouselData,IsAlbum }) => {
  //console.log(CarouselData)
  const swiperRef = useRef(null); //reference of swiper instance
  return (
    <div
    className={styles.carouselContainer}
    >
      <Swiper
        slidesPerView={8}
        loop={false}
        spaceBetween={50}
        style={{ padding: '30px 50px', margin: '5px'}} // Space for the custom buttons
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {CarouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <Mcard cardData={item} IsAlbum={IsAlbum}/>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <SlidePrevButton swiperRef={swiperRef} />
      <SlideNextButton swiperRef={swiperRef} />
    </div>
  );
};

export default Carousel;
