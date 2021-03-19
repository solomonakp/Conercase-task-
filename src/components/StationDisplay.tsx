import React from 'react';
import Loader from './Loader';
import styles from './styles/StationDisplay.module.scss';
interface Props {
  name: string | null;
  isLoading: boolean;
}

const StationDisplay = ({ name, isLoading }: Props) => {
  return (
    <div className={styles.stationDisplay} data-testid='station-display'>
      {isLoading ? (
        <Loader type={2} />
      ) : name ? (
        <div className='name-container'>
          <div className={styles.current}>CURRENTLY PLAYING</div>
          <div className={styles.stationName} data-testid='station-name'>
            {name}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default StationDisplay;
