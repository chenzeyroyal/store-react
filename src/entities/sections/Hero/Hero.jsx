import Section from "@/widgets/Section/Section";
import Slider from "@/widgets/Slider";
import { useRef } from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  const slides = [
    {
      title: "Технологии как искусство",
      subtitle: "Новинки для вас и вашего дома",
      image: "src/shared/assets/images/slide-1.jpg",
      buttonLabel: "Подробнее",
    },
    {
      title: "Технологии как искусство",
      subtitle: "Новинки для вас и вашего дома",
      image: "src/shared/assets/images/slide-2.jpg",
      buttonLabel: "Подробнее",
    },
    {
      title: "Технологии как искусство",
      subtitle: "Новинки для вас и вашего дома",
      image: "src/shared/assets/images/slide-1.jpg",
      buttonLabel: "Подробнее",
    },
    {
      title: "Технологии как искусство",
      subtitle: "Новинки для вас и вашего дома",
      image: "src/shared/assets/images/slide-2.jpg",
      buttonLabel: "Подробнее",
    },
    {
      title: "Технологии как искусство",
      subtitle: "Новинки для вас и вашего дома",
      image: "src/shared/assets/images/slide-1.jpg",
      buttonLabel: "Подробнее",
    },
  ];

  const sliderParams = {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  };

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <Section className={styles.hero}>
      <Slider
        params={sliderParams}
        slides={slides}
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
        paginationRef={paginationRef}
        hasNavigationInner
      />
    </Section>
  );
};

export default Hero;
