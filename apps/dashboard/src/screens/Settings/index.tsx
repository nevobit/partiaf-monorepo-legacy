import Field from "@/components/shared/Field";
import ImageInput from "@/components/shared/ImageInput";
import Input from "@/components/shared/Input";
import { AppStore } from "@/redux/store";
import { Admin } from "@partiaf/types";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./settings.module.css";

const Settings = () => {

  const {admin} = useSelector((state: AppStore) => state.admins);

  const [adminUpdate, setAdminUpdate] = useState<Partial<Admin>>({
    name: admin.name,
    lastname: admin.lastname,
    identification: admin.identification,
    email: admin.email,
    phone: admin.phone,
    age: admin.age,
    address: admin.address,
    notifications: admin.notifications
  })

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
                  <Input value={adminUpdate.name} />
                </Field>
                <Field label="Apellido">
                  <Input value={adminUpdate.lastname} />
                </Field>
                <Field label="Numero de identificacion">
                  <Input value={adminUpdate.identification} />
                </Field>
                <Field label="Correo Electronico">
                  <Input value={adminUpdate.email} />
                </Field>
                <Field label="Telefono">
                  <Input value={adminUpdate.phone} />
                </Field>
                <Field label="Edad">
                  <Input value={adminUpdate.age} />
                </Field>
                <Field label="Direccion">
                  <Input value={adminUpdate.address} />
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
          <div className={styles.image_input}>
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
