import React from 'react';
import styles from './styles/StationDisplay.module.scss';
interface Props {
  name: string | null;
}

const StationDisplay = ({ name }: Props) => {
  return (
    <div className={styles.stationDisplay}>
      <div className={styles.current}>CURRENTLY PLAYING</div>
      <div className={styles.stationName}>{name}</div>
    </div>
  );
};

export default StationDisplay;
