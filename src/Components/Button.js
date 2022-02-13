import React from 'react';
import styles from './Button.modules.css';

const Button = ({ ...props }) => {
  return (
    <>
      <button {...props} className={styles.button}>
        Generate
      </button>
    </>
  );
};

export default Button;
