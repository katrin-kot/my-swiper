import React, { useState, useRef, useEffect, FC } from "react";
import cx from "classnames/bind";
import styles from "./Slider.module.css";
import Slide from "./Slide";
import Indicators from "./Indicators";

interface Settings {
  infinite: boolean;
  indicators: boolean;
}
interface SliderProps {
  settings: Settings;
  children: React.ReactNode[];
}

const Slider: FC<SliderProps> = ({ children, settings }) => {
  const [currentSlide, setSlide] = useState(0);
  const [noTransition, setTransition] = useState(false);
  const [isAnimationEnd, setAnimation] = useState(true);
  const [transform, setTransform] = useState("none");
  const wrapperEl = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart: React.TouchEventHandler = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove: React.TouchEventHandler = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd: React.TouchEventHandler = () => {
    if (touchStart - touchEnd > 70) {
      setTransition(false);
      setAnimation(false);
      setSlide(currentSlide + 1);
      setAnimation(true);
    }

    if (touchStart - touchEnd < -70) {
      setAnimation(false);
      setSlide(currentSlide - 1);

      setAnimation(true);
    }
  };

  const prevArrowClasses = cx(styles.prev, styles.arrow);
  const nextArrowClasses = cx(styles.next, styles.arrow);

  const wrapperClasses = cx(styles.sliderWrapper, {
    [styles.notransition]: noTransition,
  });

  useEffect(() => {
    if (currentSlide === children?.length) {
      setTransition(true);
      setTransform(`translateX(-${children.length + 1}00%)`);

      setSlide(0);

      setTransform("translateX(0%)");
      wrapperEl?.current?.addEventListener("transitionend", () => {
        setTransition(false);
        setAnimation(true);
      });
    } else if (settings.infinite === true && currentSlide < 0) {
      const nextSlide = children.length - 1;
      setSlide(nextSlide);
      setTransition(true);
      setTransform(`translateX(-${children.length}00%)`);
      setTimeout(() => {
        setTransition(false);
        setTransform(`translateX(-${nextSlide}00%)`);
      }, 10);
      wrapperEl?.current?.addEventListener("transitionend", () => {
        setAnimation(true);
      });
    } else {
      setTransform(`translateX(-${currentSlide}00%)`);
    }
  }, [currentSlide]);

  return (
    <section className={styles.slider}>
      <div
        className={prevArrowClasses}
        onClick={() => {
          if (!isAnimationEnd) {
            return;
          }
          setAnimation(false);
          setSlide(currentSlide - 1);
          setAnimation(true);
        }}
      >
        <i>&lt;</i>
      </div>
      <div
        className={nextArrowClasses}
        onClick={() => {
          if (!isAnimationEnd) {
            return;
          }
          setTransition(false);
          setAnimation(false);
          setSlide(currentSlide + 1);
          setAnimation(true);
        }}
      >
        <i>&gt;</i>
      </div>
      <div
        className={wrapperClasses}
        style={{ transform }}
        ref={wrapperEl}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children.map((child, idx) => (
          <Slide key={idx}>{child}</Slide>
        ))}
        <Slide>{children[0]}</Slide>
      </div>
      {settings.indicators && (
        <Indicators
          count={children.length}
          setSlide={setSlide}
          currentSlide={currentSlide}
        />
      )}
    </section>
  );
};
export default Slider;
