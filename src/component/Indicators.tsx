import React, { FC } from "react";
import cx from "classnames/bind";
import styles from "./Slider.module.css";

interface IndicatorsProps {
  setSlide: (idx: number) => void;
  count: number;
  currentSlide: number;
}

const Indicators: FC<IndicatorsProps> = ({ setSlide, count, currentSlide }) => {
  return (
    <ul className={styles.sliderIndicators}>
      {Array.from({ length: count }).map((_, idx) => (
        <li
          key={idx}
          className={cx({ [styles.active]: currentSlide === idx })}
          onClick={() => setSlide(idx)}
        />
      ))}
    </ul>
  );
};

export default Indicators;
