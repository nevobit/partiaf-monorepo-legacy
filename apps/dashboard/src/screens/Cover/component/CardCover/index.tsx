import React, { useEffect, useState } from "react";
import styles from "./cardCover.module.css";
import fiesta from "../../../../assets/fiesta.webp";
import { useDispatch } from "react-redux";
import {
  deleteCover,
  PartialCover,
  updateCover,
} from "@/redux/states/covers/covers";
import { Cover } from "@partiaf/types";
import { DivisaFormater } from "@/utils/DivisaFormater";
import { Link } from "react-router-dom";
import { PrivateRoutes } from "@/constants-definitions/Routes";
import swal from "sweetalert";
import CoverForm from "../../CoverForm";

const CardCover = (Cover: any) => {
  const dispatch = useDispatch();
  const { name, description, limit, date, hour, price, uuid, type, image } =
    Cover.cover;
  const { cover } = Cover;

  const [status, setStatus] = useState(false);

  const submitDeleteHandler = async (e: any) => {
    e.preventDefault();
    try {
      swal({
        text: "¿Está seguro que desea eliminar el cover?",
        icon: "warning",
        buttons: ["Cancelar", "Eliminar"],
        dangerMode: true,
      }).then((willDelete: any) => {
        if (willDelete) {
          dispatch(deleteCover(uuid) as any);
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
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
      dispatch(updateCover({ ...cover, status: !cover.status }) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className={styles.container_cover}>
        <div
          className={type == "VIP" ? styles.middle_line : styles.no_middle_line}
        ></div>
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
          <span className={styles.sumer}>
            #SUMER
            <span>2023</span>
          </span>

          <div className={styles.info_cover}>
            <div className={styles.data_cover}>
              <h4
                className={`${styles.name_cover} ${
                  type == "VIP" ? styles.name_vip : ""
                }`}
              >
                {name}
              </h4>
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
              <h5>{type}</h5>
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
      <CoverForm
        openModal={isOpenEdit}
        setOpenModal={setIsOpenEdit}
        editCover={coverSelected}
      />
    </>
  );
};

export default CardCover;
