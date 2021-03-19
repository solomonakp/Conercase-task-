import React from 'react';
import IconButton from './IconButton';
import styles from './styles/StationNav.module.scss';
import back from '../assets/back-arrow.png';
import power from '../assets/switch.png';

export const StationNav = () => {
  return (
    <div className={styles.stationNav}>
      <nav>
        <ul>
          <li>
            <IconButton
              src={back}
              testId='nav-btn'
              alt='back-icon-btn'
              label='back button'
            />
          </li>
          <li>Stations</li>
          <li>
            <IconButton
              src={power}
              testId='nav-btn'
              alt='power-icon-btn'
              label='power button'
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};
