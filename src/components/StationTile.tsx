import React from 'react';
import StationControl from './StationControl';
import styles from './styles/StationTile.module.scss';
import { StationProps } from '../stationsObject';
import { RootState } from '../redux/reducers/index';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStation } from '../redux/reducers/radio/radioActions';

export interface StationTileProps extends StationProps {
  index: number;
}

const StationTile: React.FC<StationTileProps> = ({
  station,
  frequency,
  index,
}) => {
  const { currentStationIndex } = useSelector(
    (state: RootState) => state.radio
  );
  const isOpen = currentStationIndex === index ? true : false;

  const dispatch = useDispatch();

  return (
    <div className={styles.stationTile}>
      <StationControl isOpen={isOpen} />
      <button
        className={styles.button}
        onClick={() => {
          dispatch(toggleStation(index));
        }}
      >
        <span>{station}</span>
        <span>{frequency}</span>
      </button>
    </div>
  );
};

export default StationTile;
