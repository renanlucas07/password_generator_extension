import React from "react";
import styles from "./Header.modules.css";

const Teste = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Password Generator</h1>
      <p className={styles.version}> ver (1.0.0)</p>
    </header>
  );
};

export default Teste;
