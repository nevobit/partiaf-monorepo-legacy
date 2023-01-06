import { Button, Field, ImageInput, Input } from "@/components/shared";
import React from "react";
import styles from "./createcover.module.css";

const CreateCoverModal = (props: any) => {
  const { openModal, setOpenModal } = props;
  return (
    <div className={openModal ? styles.open_modal : styles.closeModal}>
      <div className={styles.container_form}>
        <div className={styles.form}>
          <div className={styles.header_cover_form}>
            <img src="/logo-parti.svg" alt="Log Partiaf" />
            <button
              className={styles.btn_header_cover}
              onClick={() => setOpenModal(!openModal)}
            >
              {" "}
              Cerrar
            </button>
          </div>
          <div className={styles.container_fields}>
            <Field label="Nombre del evento">
              <Input></Input>
            </Field>
            <div className={styles.data_fields}>
              <Field label="Cupo total">
                <Input />
              </Field>
              <Field label="Precio">
                <Input />
              </Field>
              <Field label="Fecha">
                <Input />
              </Field>
            </div>
            <div className={styles.data_fields}>
              <Field label="Hora">
                <Input />
              </Field>
              <Field label="General">
                <Input />
              </Field>
              <Field label="VIP">
                <Input />
              </Field>
            </div>
            <div className={styles.description_form}>
              <Field label="Descripcion">
                <textarea></textarea>
              </Field>
              <Field>
                <ImageInput />
              </Field>
            </div>
          </div>
          <Button>Crear Cover</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCoverModal;
