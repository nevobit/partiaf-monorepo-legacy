import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardCover from "./component/CardCover";
import styles from "./cover.module.css";
import CreateCoverModal from "./create";

const Cover = () => {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);

  const dataCover = [
    {
      name_business: "Discotk Medellin",
      name_cover: "Fiesta navideña",
      description:
        "Fiesta de navidad organizada por partiaf, Fiesta de navidad organizada por partiaf, Fiesta de navidad organizada por partiaf",
      cupo: 200,
      date: "24/12/2022",
      hour: "08:00 Pm",
      cost: "50,000",
    },
    {
      name_business: "Discotk Medellin",
      name_cover: "Fiesta navideña",
      description:
        "Fiesta de navidad organizada por partiaf, Fiesta de navidad organizada por partiaf, Fiesta de navidad organizada por partiaf",
      cupo: 200,
      date: "24/12/2022",
      hour: "08:00 Pm",
      cost: "50,000",
    },
    {
      name_business: "Discotk Medellin",
      name_cover: "Fiesta navideña",
      description:
        "Fiesta de navidad organizada por partiaf, Fiesta de navidad organizada por partiaf, Fiesta de navidad organizada por partiaf",
      cupo: 200,
      date: "24/12/2022",
      hour: "08:00 Pm",
      cost: "50,000",
    },
    {
      name_business: "Discotk Medellin",
      name_cover: "Fiesta navideña",
      description:
        "Fiesta de navidad organizada por partiaf, Fiesta de navidad organizada por partiaf, Fiesta de navidad organizada por partiaf",
      cupo: 200,
      date: "24/12/2022",
      hour: "08:00 Pm",
      cost: "50,000",
    },
    {
      name_business: "Discotk Medellin",
      name_cover: "Fiesta navideña",
      description:
        "Fiesta de navidad organizada por partiaf, Fiesta de navidad organizada por partiaf, Fiesta de navidad organizada por partiaf",
      cupo: 200,
      date: "24/12/2022",
      hour: "08:00 Pm",
      cost: "50,000",
    },
    {
      name_business: "Discotk Medellin",
      name_cover: "Fiesta navideña",
      description:
        "Fiesta de navidad organizada por partiaf, Fiesta de navidad organizada por partiaf, Fiesta de navidad organizada por partiaf",
      cupo: 200,
      date: "24/12/2022",
      hour: "08:00 Pm",
      cost: "50,000",
    },
  ];
  return (
    <>
      <div className={styles.screen}>
        <div className={styles.center__screen}>
          <div className={styles.screen_header_principal}>
            <div className={styles.box}>
              <h3>Total Entradas</h3>
              <p>40</p>
            </div>
            <div className={styles.box}>
              <h3>Entradas Efectivas</h3>
              <p>35</p>
            </div>
            <div className={styles.box}>
              <h3>Entradas no Efectivas </h3>
              <p>5</p>
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
          {dataCover?.map((cover) => (
            <CardCover props={cover} />
          ))}
        </div>
      </div>
      <CreateCoverModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Cover;
