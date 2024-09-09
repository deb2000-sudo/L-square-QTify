import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { ReactComponent as LeftArrow } from "../../assets/prev-icon.svg";
import 'swiper/css';
import styles from "./CarouselLeft.module.css";

const CarouselLeft = () => {
    console.log("it is from Carouselleft")
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(false);

    useEffect(() => {
        if (!swiper) return; // Guard clause to ensure swiper is initialized

        const handleSlideChange = () => {
            setIsBeginning(swiper.isBeginning);
        };

        // Set initial state based on current swiper status
        setIsBeginning(swiper.isBeginning);

        // Listen to the slide change event
        swiper.on('slideChange', handleSlideChange);

        // Cleanup the event listener on component unmount
        return () => {
            swiper.off('slideChange', handleSlideChange);
        };
    }, [swiper]);

    return (
        <div className={`${styles.leftNavigation} customPrevButton`}>
            {/* Show the left arrow only if not on the first slide */}
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    );
};

export default CarouselLeft;
