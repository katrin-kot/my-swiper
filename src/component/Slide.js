import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./App.module.css";

function Slide({ slide }) {
  return (
    <div className={styles.slide}>
      <img src={slide.src} alt="" />
      <div className={styles.slideCaption}>
        <h3>{slide.caption}</h3>
        <p>{slide.text}</p>
      </div>
    </div>
  );
}

export default Slide;
