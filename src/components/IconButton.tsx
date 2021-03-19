import React from 'react';
import styles from './styles/iconButton.module.scss';

interface IconButtonProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  testId?: string;
  label: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  src,
  alt,
  width = '20px',
  height = '20px',
  testId,
  label,
}) => {
  return (
    <button
      className={styles.iconButton}
      style={{ width: width, height: height }}
      data-testid={testId}
      onClick={() => {
        console.log('btn was clicked');
      }}
      aria-label={label}
    >
      <img src={src} alt={alt} />
    </button>
  );
};

export default IconButton;
