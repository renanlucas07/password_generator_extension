import React from "react";
import Button from "./Button";
import styles from "./ShowPassword.modules.css";

const ShowPassword = ({ value, onClick }) => {
  return (
    <div className={styles.passWrapper}>
      <Button onClick={onClick}>Generate</Button>
      <input type="text" disabled value={value} className={styles.input} />
    </div>
  );
};

export default ShowPassword;
