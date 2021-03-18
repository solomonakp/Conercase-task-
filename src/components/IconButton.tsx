import React from 'react';
import styles from './styles/iconButton.module.scss';

interface IconButtonProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  src,
  alt,
  width = '20px',
  height = '20px',
}) => {
  return (
    <button
      className={styles.iconButton}
      style={{ width: width, height: height }}
    >
      <img src={src} alt={alt} />
    </button>
  );
};

export default IconButton;
