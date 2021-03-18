import React from 'react';
import StationBody from './StationBody';
import StationDisplay from './StationDisplay';
import { StationNav } from './StationNav';
import styles from './styles/stationBox.module.scss';

const StationBox = () => {
  return (
    <div className={styles.stationBox}>
      <StationNav />
      <StationBody />
      <StationDisplay />
    </div>
  );
};

export default StationBox;
