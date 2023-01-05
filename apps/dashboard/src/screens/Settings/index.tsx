import Field from "@/components/shared/Field";
import ImageInput from "@/components/shared/ImageInput";
import Input from "@/components/shared/Input";
import React from "react";
import styles from "./settings.module.css";

const Settings = () => {
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
              <h4 className={styles.card_title}>Datos personales</h4>
              <div className={styles.colums_card}>
                <Field label="Nombre">
                  <Input />
                </Field>
                <Field label="Apellido">
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
                <Field label="Edad">
                  <Input />
                </Field>
                <Field label="Direccion">
                  <Input />
                </Field>
              </div>
            </div>

            <div className={styles.card}>
              <h4 className={styles.card_title}>Seguridad</h4>
              <div className={styles.colums_card}>
                <Field label="Contraseña">
                  <Input />
                </Field>
                <Field label="Confirmar Contraseña">
                  <Input />
                </Field>

                <div>
                  <label htmlFor="">Notificaciones</label>
                  <input type="checkbox" />
                  {/* checked={notification == "active"? true : false} */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={`${styles.card} ${styles.card_logo}`}>
              <h4 className={styles.card_title}>Subir imagen</h4>
              <ImageInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
