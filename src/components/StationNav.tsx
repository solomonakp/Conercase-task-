import React from 'react';
import IconButton from './IconButton';
import styles from './styles/StationNav.module.scss';
import back from '../assets/back-arrow.png';
import power from '../assets/switch.png';
interface Props {}

export const StationNav = (props: Props) => {
  return (
    <div className={styles.stationNav}>
      <nav>
        <ul>
          <li>
            <IconButton src={back} alt='' />
          </li>
          <li>Stations</li>
          <li>
            <IconButton src={power} alt='' />
          </li>
        </ul>
      </nav>
    </div>
  );
};
