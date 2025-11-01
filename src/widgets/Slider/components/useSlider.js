import { useState, useRef } from "react";

const useSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  //   const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef(null);

  //   const updateIndex = useCallback(() => {
  //     if (swiperInstance) {
  //       setActiveIndex(swiperInstance.swiper.realIndex);
  //     }
  //   }, [swiperInstance]);

  //   const onSwiperInit = useCallback(
  //     (swiper) => {
  //       swiperRef.current = swiper;
  //       setSwiperInstance(swiper);

  //       if (swiper && swiper.swiper) {
  //         swiper.swiper.on("slideChange", updateIndex);
  //         setActiveIndex(swiper.swiper.realIndex);
  //       }
  //     },
  //     [updateIndex]
  //   );
  const onSwiperInit = setSwiperInstance;
  // swiperRef.current = swiper;

  //   const goToSlide = (index) => {
  //     if (swiperInstance && swiperInstance.swiper) {
  //       swiperInstance.swiper.slideToLoop(index);
  //     }
  //   };

  return {
    swiperInstance,
    // activeIndex,
    onSwiperInit,
    // goToSlide,
    swiperRef,
  };
};

export default useSlider;
