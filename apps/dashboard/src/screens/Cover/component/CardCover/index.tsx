import React, { useEffect, useState } from "react";
import styles from "./cardCover.module.css";
import fiesta from "../../../../assets/fiesta.webp";
import { useDispatch } from "react-redux";
import {
  deleteCover,
  PartialCover,
  updateCover,
} from "@/redux/states/covers/covers";
import EditCoverModal from "../../update";
import { Cover } from "@partiaf/types";
import { DivisaFormater } from "@/utils/DivisaFormater";
import { Link } from "react-router-dom";
import { PrivateRoutes } from "@/constants-definitions/Routes";

import Swal from "sweetalert2";

import { LoadingBox } from "./Loading";

const CardCover = (Cover: any) => {
  const dispatch = useDispatch();
  const { name, description, limit, date, hour, price, uuid, image } =
    Cover.cover;
  const { cover } = Cover;

  const [status, setStatus] = useState(false);

  const submitDeleteHandler = async (e: any) => {
    e.preventDefault();
    try {
      Swal.fire({
        title: "Quiere eliminar este evento?",
        text: "No se podra revertir esta accion",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar",
        width: "40em",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteCover(uuid) as any);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Evento eliminado",
            showConfirmButton: false,
            timer: 1800,
          });
        }
      });
    } catch (error) {
      if (error instanceof Error) {
      }
    }
  };

  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [coverSelected, setCoverSelected] = useState<Cover>(Cover.cover);

  const editHandler = () => {
    setCoverSelected(cover);
    setIsOpenEdit(true);
  };

  const submitUpdateHandler = async (e: any) => {
    setStatus(!status);
    e.preventDefault();
    try {
      dispatch(updateCover({ ...cover, status: status }) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className={styles.container_cover}>
        <Link
          className={styles.clickable}
          to={`${PrivateRoutes.COVERS}/${uuid}`}
        ></Link>
        <div className={styles.image_cover}>
          {image ? (
            <img src={image} alt="Image" />
          ) : (
            <img src={fiesta} alt="Image" />
          )}
        </div>
        <div className={styles.info_cover_container}>
          <div className={styles.info_cover}>
            <div className={styles.data_cover}>
              <h4 className={styles.name_cover}>{name}</h4>
              <p>{description}</p>
            </div>

            <div className={styles.data_cover_list}>
              <span>
                <strong> Cupos:</strong> {limit}
              </span>
              <span>
                <strong> Fecha:</strong> {date}
              </span>
              <span>
                <strong> Hora:</strong> {hour}
              </span>
            </div>
            <div className={styles.data_cover_price}>
              <h5>VIP</h5>
              <h4> {DivisaFormater(price)}</h4>
            </div>
          </div>
          <div className={styles.icon_cover}>
            <button
              className={
                cover.status
                  ? styles.card_btn_status_active
                  : styles.card_btn_status_inactive
              }
              onClick={submitUpdateHandler}
            >
              {cover.status ? "activo" : "inactivo"}
            </button>
            <button className={styles.btn_icon_card_cover}>
              <p className="" onClick={() => editHandler()}>
                Editar
              </p>
            </button>
            <button
              className={styles.btn_icon_card_cover_delete}
              onClick={submitDeleteHandler}
            >
              <p className="">Borrar</p>
            </button>
          </div>
        </div>
      </div>
      <EditCoverModal
        openModal={isOpenEdit}
        setOpenModal={setIsOpenEdit}
        Cover={coverSelected}
      />
    </>
  );
};

export default CardCover;
