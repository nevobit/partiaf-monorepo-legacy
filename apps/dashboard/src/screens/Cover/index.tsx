import { PartialCover, reset } from "@/redux/states/covers/covers";
import { getCoverById } from "@/redux/states/covers/thunks";
import { AppStore } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardCover from "./component/CardCover";
import styles from "./cover.module.css";
import CreateCoverModal from "./create";
import EditCoverModal from "./update";

const Cover = () => {
  const dispatch = useDispatch();
  const {
    covers = [],
    success,
    loading,
  } = useSelector((state: AppStore) => state.covers);
  const { store, stores } = useSelector((state: AppStore) => state.stores);
  const [openModal, setOpenModal] = useState(false);
 

  useEffect(() => {
    dispatch(getCoverById(store.uuid) as any);
  }, [dispatch, store, success]);
  return (
    <>
      <div className={styles.screen}>
        <div className={styles.center__screen}>
          <div className={styles.screen_header_principal}>
            <div className={styles.box}>
              <h3>Total Entradas</h3>
              <p>{covers.length}</p>
            </div>
            <div className={styles.box}>
              <h3>Entradas Efectivas</h3>
              <p>0</p>
            </div>
            <div className={styles.box}>
              <h3>Entradas no Efectivas </h3>
              <p>0</p>
            </div>
          </div>
          <div className={styles.screen_title}>
            <h3>Entradas creadas</h3>
            <button
              className={styles.Link_create}
              onClick={() => setOpenModal(!openModal)}
            >
              Create cover
            </button>
          </div>
        </div>
        <div className={styles.container_card_cover}>
          {covers.map((obj) => (
            <CardCover key={obj.uuid} cover={{ ...obj }} />
          ))}
        </div>
      </div>
      <CreateCoverModal openModal={openModal} setOpenModal={setOpenModal} />
     
    </>
  );
};

export default Cover;
