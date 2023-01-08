import React from "react";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loading_box}>
      <div>
      <div className={styles.loading_circle}></div>
      <h2 className={styles.loading_text}>Cargando...</h2>
      </div>

    </div>
  );
};

export default Loader;
