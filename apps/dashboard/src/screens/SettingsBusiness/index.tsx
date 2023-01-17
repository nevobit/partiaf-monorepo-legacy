import Field from "@/components/shared/Field";
import ImageInput from "@/components/shared/ImageInput";
import Input from "@/components/shared/Input";
import { AppStore } from "@/redux/store";
import { Store } from "@partiaf/types";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./settingsBusiness.module.css";

const SettingsBusiness = () => {

  const {store} = useSelector((state: AppStore) => state.stores);

  const [storeUpdate, setStoreUpdate] = useState<Partial<Store>>({
    name: store.name,
    nit: store.nit,
    email: store.email,
    phone: store.phone,
    limit: store.limit,
    type: store.type,
    photos: store.photos
  });

  console.log({store})

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
                  <Input value={storeUpdate.name} />
                </Field>
                <Field label="Numero de identificacion">
                  <Input value={storeUpdate.nit} />
                </Field>

                <Field label="Correo Electronico">
                  <Input value={storeUpdate.email} />
                </Field>

                <Field label="Telefono">
                  <Input value={storeUpdate.phone} />
                </Field>

                <Field label="Capacidad del negocio">
                  <Input value={storeUpdate.limit} />
                </Field>

                <Field label="Tipo discoteca">
                  <select name="" id="" required value={storeUpdate.type} >
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
              </div>
            </div>
            <div className={styles.card}>
              <h4 className={styles.card_title}>Terminos y condiciones</h4>
              <div className={styles.colums_card}>
                
              </div>
            </div>
          </div>
          <div>
            <div className={styles.image_input}>
              <h4 className={styles.card_title}>Subir imagen</h4>
              <ImageInput />
              
            </div>
            <div className={styles.image_input_list}>
              {storeUpdate?.photos?.map((photo) => (
                <img src={photo} alt="" />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SettingsBusiness;
