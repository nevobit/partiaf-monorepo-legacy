import React from "react";
import styles from "./cardBooking.module.css";

const CardBooking = ({ name, number }: any) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__left}>
        <div className={styles.number}>{number}</div>
        <h3>{name}</h3>
      </div>
      <div className="date"></div>
    </div>
  );
};

export default CardBooking;
