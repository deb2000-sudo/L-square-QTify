import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { ReactComponent as RightArrow } from "../../assets/next-icon.svg";
import 'swiper/css';
import styles from "./CarouselRight.module.css";

const CarouselRight = () => {
    console.log("it is from CarouselRight")
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        if (!swiper) return; // Guard clause to ensure swiper is initialized

        const handleSlideChange = () => {
            setIsEnd(swiper.isEnd);
        };
        // Set initial state based on current swiper status
        setIsEnd(swiper.isEnd);

        // Listen to the slide change event
        swiper.on('slideChange', handleSlideChange);

        // Cleanup the event listener on component unmount
        return () => {
            swiper.off('slideChange', handleSlideChange);
        };
    }, [swiper]);

    return (
        <div className={`${styles.rightNavigation} customNextButton`}>
            {/* Show the left arrow only if not on the first slide */}
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    );
};

export default CarouselRight;
