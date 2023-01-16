import React, { useState } from "react";
import styles from "./cardCover.module.css";
import fiesta from "../../../../assets/fiesta.webp";
import { useDispatch } from "react-redux";
import { deleteCover } from "@/redux/states/covers/covers";

const CardCover = (cover: any) => {
  const dispatch = useDispatch();
  const { name, description, limit, date, hour, price, uuid } = cover.cover;
  const [status, setStatus] = useState(false);

  const submitDeleteHandler = async (e: any) => {
    e.preventDefault();
    console.log("ENTRO ES EL ES UUID", uuid);
    try {
      dispatch(deleteCover(uuid) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.container_cover}>
      <div className={styles.image_cover}>
        <img src={fiesta} alt="Image" />
      </div>
      <div className={styles.info_cover}>
        <div className={styles.data_cover}>
          <h4 className={styles.name_cover}>{name}</h4>
          <div className={styles.icon_cover}>
            <button
              className={
                cover.status
                  ? styles.card_btn_status_active
                  : styles.card_btn_status_inactive
              }
              onClick={() => setStatus(!status)}
            >
              {cover.status ? "activo" : "inactivo"}
            </button>
            <button className={styles.btn_icon_card_cover}>
              <i className="bx bxs-pencil"></i>
            </button>
            <button
              className={styles.btn_icon_card_cover}
              onClick={submitDeleteHandler}
            >
              <i className="bx bx-x-circle"></i>
            </button>
          </div>
        </div>

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
