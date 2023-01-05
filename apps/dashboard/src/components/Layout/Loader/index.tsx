import React from "react";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loading__box}>
      <div className={styles.loading__circle}></div>
      <h2 className={styles.loading__text}>Cargando...</h2>
    </div>
  );
};

export default Loader;
