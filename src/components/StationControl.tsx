import React from 'react';
import IconButton from './IconButton';
import styles from './styles/StationControl.module.scss';
import minus from '../assets/minus.png';
import plus from '../assets/plus.png';
import avi from '../assets/Clip.png';

interface StationControlProps {
  isOpen: boolean;
  index: number;
}

const StationControl: React.FC<StationControlProps> = ({ isOpen, index }) => {
  return (
    <div
      className={styles.stationControl}
      data-testid='station-control'
      style={{ maxHeight: isOpen ? '160px' : '0px' }}
      id={`collapse${index}`}
    >
      <IconButton
        src={minus}
        alt=''
        width='30px'
        height='30px'
        label='remove button'
      />
      <div className={styles.avatar}>
        <img src={avi} alt='station avi' />
      </div>
      <IconButton
        src={plus}
        alt=''
        width='30px'
        height='30px'
        label='add button'
      />
    </div>
  );
};

export default StationControl;
