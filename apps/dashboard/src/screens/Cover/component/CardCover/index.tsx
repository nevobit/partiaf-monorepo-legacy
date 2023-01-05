import React from "react";
import styles from "./cardCover.module.css";
import fiesta from "../../../../assets/fiesta.webp";

const CardCover = ({ props }: any) => {
  return (
    <div className={styles.container_cover}>
      <div className={styles.image_cover}>
        <img src={fiesta} alt="Image" />
      </div>
      <div className={styles.info_cover}>
        <div className={styles.data_cover}>
          <h2>{props.name_business}</h2>
          <div className={styles.icon_cover}>
            <button>
              <i className="bx bxs-pencil"></i>
            </button>
            <button>
              <i className="bx bx-x-circle"></i>
            </button>
          </div>
        </div>
        <h4>{props.name_cover}</h4>
        <p>{props.description}</p>
        <div className={styles.data_cover}>
          <span>Cupos: {props.cupo}</span>
          <span>Fecha: {props.date}</span>
          <span>Hora: {props.hour}</span>
        </div>
        <div className={styles.data_cover}>
          <h5>VIP</h5>
          <h4> ${props.cost}</h4>
        </div>
      </div>
    </div>
  );
};

export default CardCover;
