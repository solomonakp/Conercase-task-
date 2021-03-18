import React from 'react';
import StationTile from './StationTile';
import styles from './styles/StationBody.module.scss';
import SimpleBar from 'simplebar-react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/index';
import { StationProps } from '../stationsObject';
import 'simplebar/dist/simplebar.min.css';

const StationBody = () => {
  const {
    radio: { stations },
  } = useSelector((state: RootState) => state);
  return (
    <SimpleBar
      className={styles.stationBody}
      style={{ maxHeight: '362.33px' }}
      forceVisible='y'
      autoHide={true}
    >
      {stations.map((station: StationProps, i: number) => {
        return <StationTile {...station} key={i} index={i} />;
      })}
    </SimpleBar>
  );
};

export default StationBody;
