import React from "react";
import styles from "./Header.modules.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Teste = () => {
  return (
    <header className={styles.header}>
      <div className={styles.iconHeader}>
        <FontAwesomeIcon icon={faLock} className={styles.icon} />
        <h1 className={styles.title}>Password Generator</h1>
      </div>
      <p className={styles.version}> (1.0.0)</p>
    </header>
  );
};

export default Teste;
