import Button from "@/shared/ui/Button/Button";
import styles from "./SliderNavigation.module.scss";
import classNames from "classnames";

const SliderNavigation = (props) => {
  const {
    placement,
    position,
    swiperInstance,
    showPagination = true,
    showButtons = true,
  } = props;

  const onButtonPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const onButtonNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <div
      className={classNames(
        styles.navigation,
        styles[placement],
        styles[position]
      )}
    >
      {showButtons && (
        <div className={styles.buttons}>
          <Button
            className={styles.button}
            icon="chevron-left"
            label="Предыдущий слайд"
            mode="circle"
            onClick={onButtonPrev}
            isAccent
            isLabelHidden
          />

          <Button
            className={styles.button}
            icon="chevron-right"
            label="Следующий слайд"
            mode="circle"
            onClick={onButtonNext}
            isAccent
            isLabelHidden
          />
        </div>
      )}
    </div>
  );
};

export default SliderNavigation;
