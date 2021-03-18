import React from 'react';
import IconButton from './IconButton';
import styles from './styles/StationControl.module.scss';
import minus from '../assets/minus.png';
import plus from '../assets/plus.png';
import avi from '../assets/Clip.png';

interface StationControlProps {
  isOpen: boolean;
}

const StationControl: React.FC<StationControlProps> = ({ isOpen }) => {
  return (
    <div
      className={styles.stationControl}
      style={{ maxHeight: isOpen ? '160px' : '0px' }}
    >
      <IconButton src={minus} alt='' width='30px' height='30px' />
      <div className={styles.avatar}>
        <img src={avi} alt='' />
      </div>
      <IconButton src={plus} alt='' width='30px' height='30px' />
    </div>
  );
};

export default StationControl;
