import React from 'react';
import { useSelector } from 'react-redux';
import StationBody from './StationBody';
import StationDisplay from './StationDisplay';
import { StationNav } from './StationNav';
import styles from './styles/stationBox.module.scss';
import { RootState } from '../redux/reducers/index';

const StationBox = () => {
  const {
    radio: { currentStation },
  } = useSelector((state: RootState) => state);
  return (
    <div className={styles.stationBox}>
      <StationNav />
      <StationBody />
      <StationDisplay name={currentStation} />
    </div>
  );
};

export default StationBox;
