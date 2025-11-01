import Section from "@/widgets/Section/Section";
import Slider from "@/widgets/Slider";
import "./Features.module.scss";
import SliderNavigation from "@/widgets/Slider/components/SliderNavigation";
import { useRef } from "react";

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

  const sliderRef = useRef(null)

  return (
    <Section>
      <SliderNavigation sliderRef={sliderRef}/>
      <Slider
      sliderRef={sliderRef}
        slides={slides}
        params={sliderParams}
      />
    </Section>
  );
};

export default Features;
