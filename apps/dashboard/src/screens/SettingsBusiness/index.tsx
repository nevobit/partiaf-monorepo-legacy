import Field from "@/components/shared/Field";
import ImageInput from "@/components/shared/ImageInput";
import Input from "@/components/shared/Input";
import React from "react";
import styles from "./settingsBusiness.module.css";

const SettingsBusiness = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.settings}>
        <div className={styles.header_setting}>
          <h2>General</h2>
          <button>Guardar</button>
        </div>

        <div className={styles.setting_grid}>
          <div>
            <div className={styles.card}>
              <h4 className={styles.card_title}>Detalles del negocio</h4>
              <div className={styles.colums_card}>
                <Field label="Nombre del negocio">
                  <Input />
                </Field>
                <Field label="Numero de identificacion">
                  <Input />
                </Field>

                <Field label="Correo Electronico">
                  <Input />
                </Field>

                <Field label="Telefono">
                  <Input />
                </Field>

                <Field label="Capacidad del negocio">
                  <Input />
                </Field>

                <Field label="Tipo discoteca">
                  <select name="" id="" required>
                    <option value="Discoteca">Discoteca</option>
                    <option value="Bar">Bar</option>
                    <option value="Gastrobar">Gastrobar</option>
                  </select>
                </Field>
              </div>
            </div>

            <div className={styles.card}>
              <h4 className={styles.card_title}>
                Detalles de fiscales y de facturacion
              </h4>
              <div className={styles.width_input}>
                <Field label="Direccion">
                  <Input />
                </Field>
              </div>
              <div className={styles.colums_card}>
                <Field label="Ciudad">
                  <Input />
                </Field>
                <Field label="Codigo postal">
                  <Input />
                </Field>
                <Field label="Departamento">
                  <Input />
                </Field>
                <Field label="Pais">
                  <Input />
                </Field>
                <Field label="Tipo de regimen">
                  <Input />
                </Field>
                <Field label="Tipo de factura">
                  <Input />
                </Field>
              </div>
            </div>
            <div className={styles.card}>
              <h4 className={styles.card_title}>Terminos y condiciones</h4>
              <div className={styles.colums_card}>
                <Field label="Nombre del negocio">
                  <Input />
                </Field>
                <Field label="Numero de identificacion">
                  <Input />
                </Field>
                <Field label="Correo Electronico">
                  <Input />
                </Field>
                <Field label="Telefono">
                  <Input />
                </Field>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.image_input}>
              <h4 className={styles.card_title}>Subir imagen</h4>
              <ImageInput />
              <p className={styles.no_image_text}>No hay imagenes, sube una!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsBusiness;
