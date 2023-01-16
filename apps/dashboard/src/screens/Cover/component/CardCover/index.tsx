import React, { useState } from "react";
import styles from "./cardCover.module.css";
import fiesta from "../../../../assets/fiesta.webp";
import { Cover } from "@partiaf/types";

const CardCover = (cover: any) => {
  console.log("DATA", cover);
  const { name, description, limit, date, hour, price } = cover.cover;
  console.log("name", name);
  const [status, setStatus] = useState(false);

  return (
    <div className={styles.container_cover}>
      <div className={styles.image_cover}>
        <img src={fiesta} alt="Image" />
      </div>
      <div className={styles.info_cover}>
        <div className={styles.data_cover}>
          <div className={styles.icon_cover}>
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
            <button className={styles.btn_icon_card_cover}>
              <i className="bx bxs-pencil"></i>
            </button>
            <button className={styles.btn_icon_card_cover}>
              <i className="bx bx-x-circle"></i>
            </button>
          </div>
        </div>
     
        <h4 className={styles.name_cover}>{cover.name}</h4>
        <p>{description}</p>
        <div className={styles.data_cover}>
          <span>Cupos: {limit}</span>
          <span>Fecha: {date}</span>
          <span>Hora: {hour}</span>
        </div>
        <div className={styles.data_cover}>
          <h5>VIP</h5>
          <h4> ${price}</h4>
        </div>
      </div>
    </div>
  );
};

export default CardCover;
