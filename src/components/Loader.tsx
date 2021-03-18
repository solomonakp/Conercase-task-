import React from 'react';
import styles from './styles/Loader.module.scss';

interface LoaderProps {
  fixed?: boolean;
  width?: string;
  height?: string;
  type?: 1 | 2;
}

const Loader: React.FC<LoaderProps> = ({ type = 1, fixed = false }) => {
  return (
    <div
      className={styles.loaderContainer}
      style={{
        position: fixed ? 'fixed' : 'relative',
        left: fixed ? 0 : 'initial',
        right: fixed ? 0 : 'initial',
        top: fixed ? 0 : 'initial',
        bottom: fixed ? 0 : 'initial',
      }}
    >
      {type === 1 ? (
        <div className={styles.ldsRoller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className={styles.ldsEllipsis}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Loader;
