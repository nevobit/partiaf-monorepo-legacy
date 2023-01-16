import { getCoverById } from "@/redux/states/covers/thunks";
import { AppStore } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardCover from "./component/CardCover";
import styles from "./cover.module.css";
import CreateCoverModal from "./create";

const Cover = () => {
  const dispatch = useDispatch();
  const { covers, loading } = useSelector((state: AppStore) => state.covers);
  console.log("COVERSSSSS =====>", covers);

  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);

  useEffect(() => {
    dispatch(getCoverById("3120273d-0598-4708-9917-c6e03a314967") as any);
  }, []);

  return (
    <>
      <div className={styles.screen}>
        <div className={styles.center__screen}>
          <div className={styles.screen_header_principal}>
            <div className={styles.box}>
              <h3>Total Entradas</h3>
              <p>0</p>
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
          {covers?.map((obj) => (
            <CardCover cover={{...obj}} />
          ))}
        </div>
      </div>
      <CreateCoverModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Cover;
