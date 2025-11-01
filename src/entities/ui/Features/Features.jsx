import Section from "@/widgets/Section/Section";
import Slider from "@/widgets/Slider";
import useSlider from "@/widgets/Slider/components/useSlider";
import "./Features.module.scss";
import SliderNavigation from "@/widgets/Slider/components/SliderNavigation";

const Features = () => {
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
      <SliderNavigation swiperInstance={swiperInstance} />
      <Slider
        slides={slides}
        params={sliderParams}
        navigation={false}
        onSwiperInit={onSwiperInit}
      />
    </Section>
  );
};

export default Features;
