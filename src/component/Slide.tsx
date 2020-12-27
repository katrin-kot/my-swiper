import React, { FC } from 'react';
import styles from './Slider.module.css';

const Slide: FC = ({ children })=> {
  return <div className={styles.slide}>{children}</div>;
}

export default Slide;
