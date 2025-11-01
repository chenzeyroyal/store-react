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
    params = defaultParams,
    slides = [],
    navigation = true,
    swiperInstance,
    onSwiperInit,
  } = props;

  return (
    <div className={styles.slider}>
      <Swiper modules={[Autoplay]} onSwiper={onSwiperInit} {...params}>
        {slides.map((slide, index) => (
          <SwiperSlide className={styles.slide} key={slide.id || index}>
            <SliderCard {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      {navigation && (
        <SliderNavigation
          swiperInstance={swiperInstance}
          placement="inside"
          position="bottom"
        />
      )}
    </div>
  );
};

export default Slider;
