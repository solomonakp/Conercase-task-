import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles/StationDisplay.module.scss';
import { RootState } from '../redux/reducers/index';
interface Props {}

const StationDisplay = (props: Props) => {
  const {
    radio: { currentStation },
  } = useSelector((state: RootState) => state);
  return (
    <div className={styles.stationDisplay}>
      <div className={styles.current}>CURRENTLY PLAYING</div>
      <div className={styles.stationName}>{currentStation}</div>
    </div>
  );
};

export default StationDisplay;
