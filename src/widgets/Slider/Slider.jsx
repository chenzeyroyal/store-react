import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SliderCard from "@/shared/ui/SliderCard";
import SliderNavigation from "./components/SliderNavigation";

import "swiper/css";
import styles from "./Slider.module.scss";

const defaultParams = {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: false,
};

const Slider = (props) => {
  const {
    params = defaultParams,
    slides = [],
    navigationPrevRef,
    navigationNextRef,
    paginationRef,
    hasNavigationInner = false,
  } = props;

  const onBeforeInit = (swiper) => {
    swiper.params.navigation.prevEl = navigationPrevRef.current;
    swiper.params.navigation.nextEl = navigationNextRef.current;
    swiper.params.pagination.el = paginationRef.current;
  };

  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          el: paginationRef?.current,
          clickable: true,
        }}
        onBeforeInit={onBeforeInit}
        {...params}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <SliderCard {...slide} />
          </SwiperSlide>
        ))}
        {hasNavigationInner && (
          <SliderNavigation
            placement="inside"
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
            paginationRef={paginationRef}
            hasButtons={false}
          />
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
