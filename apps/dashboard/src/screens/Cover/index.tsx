import Loader from "@/components/Layout/Loader";
import { getCoverById } from "@/redux/states/covers/thunks";
import { AppStore } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCover from "./component/CardCover";
import styles from "./cover.module.css";
import CreateCover from "./create";

const Cover = () => {
  const dispatch = useDispatch();
  const {
    covers = [],
    success,
    loading,
  } = useSelector((state: AppStore) => state.covers);

  const { uuid: coverUUID } = localStorage.getItem("store")
    ? JSON.parse(localStorage.getItem("store") || "")
    : "";

  const { store, stores } = useSelector((state: AppStore) => state.stores);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getCoverById(coverUUID) as any);
  }, [dispatch, store, success]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.screen}>
            <div className={styles.center__screen}>
              <div className={styles.screen_header_principal}>
                <div className={styles.box}>
                  <h3>Total de entradas</h3>
                  <p>{covers.length}</p>
                </div>
                <div className={styles.box}>
                  <h3>Entradas efectivas</h3>
                  <p>0</p>
                </div>
                <div className={styles.box}>
                  <h3>Entradas no efectivas </h3>
                  <p>0</p>
                </div>
              </div>
              <div className={styles.screen_title}>
                <h3>Entradas creadas</h3>
                <button
                  className={styles.Link_create}
                  onClick={() => setOpenModal(!openModal)}
                >
                  Nuevo ticket
                </button>
              </div>
            </div>
            <div className={styles.container_card_cover}>
              {covers.map((obj) => (
                <CardCover key={obj.uuid} cover={obj} />
              ))}
            </div>
          </div>
          <CreateCover openModal={openModal} setOpenModal={setOpenModal} />
        </>
      )}
    </>
  );
};

export default Cover;
