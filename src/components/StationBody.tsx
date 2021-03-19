import React from 'react';
import StationTile from './StationTile';
import styles from './styles/StationBody.module.scss';
import SimpleBar from 'simplebar-react';
import { StationProps } from '../stationsObject';
import 'simplebar/dist/simplebar.min.css';

interface StationBodyProps {
  stations: Array<StationProps>;
}

const StationBody: React.FC<StationBodyProps> = ({ stations }) => {
  return (
    <SimpleBar
      className={styles.stationBody}
      style={{ maxHeight: '362.33px' }}
      forceVisible='y'
      autoHide={true}
    >
      {stations.map((station, i) => {
        return <StationTile {...station} key={i} index={i} />;
      })}
    </SimpleBar>
  );
};

export default StationBody;
