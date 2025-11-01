import Section from "@/widgets/Section/Section";
import Slider from "@/widgets/Slider";
import "./Hero.module.scss";
import useSlider from "@/widgets/Slider/components/useSlider";

const Hero = () => {
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

  const slides = [
    {
      id: crypto.randomUUID(),
      title: "Технологии как искусство",
      subtitle: "Новинки для вас и вашего дома",
      image: "src/shared/assets/images/slide-1.jpg",
      buttonLabel: "Подробнее",
    },
    {
      id: crypto.randomUUID(),
      title: "Технологии как искусство",
      subtitle: "Новинки для вас и вашего дома",
      image: "src/shared/assets/images/slide-2.jpg",
      buttonLabel: "Подробнее",
    },
    {
      id: crypto.randomUUID(),
      title: "Технологии как искусство",
      subtitle: "Новинки для вас и вашего дома",
      image: "src/shared/assets/images/slide-1.jpg",
      buttonLabel: "Подробнее",
    },
  ];

  const { swiperInstance, onSwiperInit } = useSlider();

  return (
    <Section>
      <Slider
        slides={slides}
        params={sliderParams}
        swiperInstance={swiperInstance}
        onSwiperInit={onSwiperInit}
      />
    </Section>
  );
};

export default Hero;
