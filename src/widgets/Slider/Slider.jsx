import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SliderCard from "@/shared/ui/SliderCard";

import "swiper/css";
import styles from "./Slider.module.scss";
import SliderNavigation from "./components/SliderNavigation";

const defaultParams = {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: false,
  autoplay: false,
  navigation: false,
  pagination: false,
};

const Slider = (props) => {
  const {
    sliderRef,
    params = defaultParams,
    slides = [],
    navigation = false,
  } = props;

  return (
    <div className={styles.slider}>
      <Swiper modules={[Autoplay]} onSwiper={(swiper) => sliderRef.current = swiper} {...params}>
        {slides.map((slide, index) => (
          <SwiperSlide className={styles.slide} key={slide.id || index}>
            <SliderCard {...slide} />
          </SwiperSlide>
        ))}
        {navigation && <SliderNavigation sliderRef={sliderRef}/>}
      </Swiper>
    </div>
  );
};

export default Slider;
