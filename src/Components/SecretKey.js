import React from 'react';
import styles from './SecretKey.modules.css';

const SecretKey = ({ onChangeSecretKey, secretKey }) => {
  return (
    <div className={styles.form}>
      <label for="form">Insert secret key:</label>
      <input
        id="form"
        type="text"
        value={secretKey}
        onChange={(e) => onChangeSecretKey(e.target.value)}
        className={styles.input1}
        placeholder="Secret Key"
      />
    </div>
  );
};

export default SecretKey;
