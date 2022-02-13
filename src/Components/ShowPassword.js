import React from 'react';
import Button from './Button';
import styles from './ShowPassword.modules.css';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShowPassword = ({ value, onClick }) => {
  const [passwordShown, setPasswordShown] = React.useState(false);
  let closedEye = <FontAwesomeIcon icon={faEyeSlash} className={styles.eye} />;
  let openEye = <FontAwesomeIcon icon={faEye} className={styles.eye} />;

  const passwordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={styles.passWrapper}>
      <Button onClick={onClick}>Generate</Button>
      <div className={styles.passwordContainer}>
        <input
          type={passwordShown ? 'text' : 'password'}
          disabled
          value={value}
          className={styles.input}
        />
        <i onClick={passwordVisiblity} title="Show Password">
          {passwordShown ? closedEye : openEye}
        </i>
      </div>
    </div>
  );
};

export default ShowPassword;
