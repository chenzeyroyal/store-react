import { createContext } from "react";
import { useRef } from "react";

export const SliderContext = createContext(null);

export const SliderProvider = (props) => {
  const { children } = props;

  const swiperRef = useRef(null);

  return (
    <SliderContext.Provider value={swiperRef}>
      {children}
    </SliderContext.Provider>
  );
};
