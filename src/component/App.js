import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./App.module.css";
import Slide from "./Slide";

let cx = classNames.bind(styles);

function MyComponent({ slides, settings }) {
  const [currentSlide, setSlide] = useState(0);
  const [noTransition, setTransition] = useState(false);
  const [isAnimationEnd, setAnimation] = useState(true);
  const [transform, setTransform] = useState("none");
  const wrapperEl = useRef(null);

  let prevarrow = cx({ prev: true, arrow: true });
  let nextarrow = cx({ next: true, arrow: true });
  let indicators;
  if (settings.indicators === true) {
    indicators = cx({ sliderIndicators: true, hidden: false });
  } else {
    indicators = cx({ sliderIndicators: true, hidden: true });
  }
  let wrapper = cx({ sliderWrapper: true, notransition: noTransition });

  useEffect(() => {
    console.log(currentSlide);
    if (currentSlide === slides.length-1 ) {
      setTransition(false);
      setTransform(`translateX(-${slides.length}00%)`);
      wrapperEl.current.addEventListener("transitionend", () => {
        if(currentSlide === slides.length-1){
        setSlide(0);
        setTransition(true);
        setTransform(`translateX(0%)`);}
         // setAnimation(true);
      });
    } else if (settings.infinite === true && currentSlide < 0) {
      const nextSlide = slides.length - 1;
      setSlide(nextSlide);
      setTransition(true);
      setTransform(`translateX(-${slides.length}00%)`);
      setTimeout(() => {
        setTransition(false);
        setTransform(`translateX(-${nextSlide}00%)`);
      }, 10);
      wrapperEl.current.addEventListener("transitionend", () => {
        setAnimation(true);
      });
    } else {
      setTransform(`translateX(-${currentSlide}00%)`);
    }
  }, [currentSlide]);

  return (
    <section className={styles.slider}>
      <div
        className={prevarrow}
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
        className={nextarrow}
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
      <div className={wrapper} style={{ transform }} ref={wrapperEl}>
        {/* {<Slide slide={slides[slides.length - 1]} />} */}
        {slides.map((slide, idx) => (
          <Slide key={idx} slide={slide} />
        ))}
        {<Slide slide={slides[0]} />}
      </div>
      <ul className={indicators}>
        {slides.map((slide, idx) => {
          if (currentSlide === idx) {
            return <li key={idx} className={styles.active}></li>;
          }
          return <li key={idx}></li>;
        })}
      </ul>
    </section>
  );
}
export default MyComponent;
