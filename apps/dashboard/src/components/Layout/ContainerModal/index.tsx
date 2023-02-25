import React, { ReactNode } from "react";
import styles from "./ContainerModal.module.css";

interface ContainerModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
}

const ContainerModal = ({
  openModal,
  setOpenModal,
  children,
  title,
}: ContainerModalProps) => {
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className={openModal ? styles.openModal : styles.closeModal}>
      <div className={`${styles.modal} ${styles.scale_up_center}`}>
        <div className={styles.header_modal}>
          <h2>{title}</h2>
          <button className={styles.close_modal} onClick={closeModal}>
            Salir
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ContainerModal;
