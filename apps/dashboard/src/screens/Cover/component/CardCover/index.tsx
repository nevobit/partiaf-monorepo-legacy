import React, { useState } from "react";
import styles from "./cardCover.module.css";
import fiesta from "../../../../assets/fiesta.webp";

const CardCover = ({ props }: any) => {
  const { name_business, name_cover, description, cupo, date, hour, cost } =
    props;

  const [status, setStatus] = useState(false);

  return (
    <div className={styles.container_cover}>
      <div className={styles.image_cover}>
        <img src={fiesta} alt="Image" />
      </div>
      <div className={styles.info_cover}>
        <div className={styles.data_cover}>
          <h2>{name_business}</h2>
          <div className={styles.icon_cover}>
            <button className={styles.btn_icon_card_cover}>
              <i className="bx bxs-pencil"></i>
            </button>
            <button className={styles.btn_icon_card_cover}>
              <i className="bx bx-x-circle"></i>
            </button>
            <button
              className={
                status
                  ? styles.card_btn_status_active
                  : styles.card_btn_status_inactive
              }
              onClick={() => setStatus(!status)}
            >
              {status ? "activo" : "inactivo"}
            </button>
          </div>
        </div>
        <h4>{name_cover}</h4>
        <p>{description}</p>
        <div className={styles.data_cover}>
          <span>Cupos: {cupo}</span>
          <span>Fecha: {date}</span>
          <span>Hora: {hour}</span>
        </div>
        <div className={styles.data_cover}>
          <h5>VIP</h5>
          <h4> ${cost}</h4>
        </div>
      </div>
    </div>
  );
};

export default CardCover;
