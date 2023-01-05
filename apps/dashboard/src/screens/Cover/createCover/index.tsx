import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import ImageInput from "@/components/shared/ImageInput";
import Input from "@/components/shared/Input";
import React from "react";
import styles from "./createCover.module.css";

const CreateCover = () => {
  return (
    <div className={styles.screen}>
     
      <div className={styles.container_form}>
        <div className={styles.form}>
          <img src="/logo-parti.svg" alt="Log Partiaf" />
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

export default CreateCover;
