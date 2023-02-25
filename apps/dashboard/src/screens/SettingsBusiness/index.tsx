import DragCloudinary from "@/components/Layout/drag-cloudinary";
import Field from "@/components/shared/Field";
import ImageInput from "@/components/shared/ImageInput";
import Input from "@/components/shared/Input";
import { reset } from "@/redux/states/admins/admin";
import { updateStore } from "@/redux/states/stores/storesSlice";
import { AppStore } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./settingsBusiness.module.css";

const SettingsBusiness = () => {
  const { store } = useSelector((state: AppStore) => state.stores);

  const { success } = useSelector((state: AppStore) => state.stores);

  console.log(store);

  const [imageUrl, setImageUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [storeUpdate, setStoreUpdate] = useState({
    uuid: store.uuid,
    name: store.name,
    nit: store.nit,
    email: store.email,
    phone: store.phone,
    limit: store.limit,
    type: store.type,
    photos: store.photos,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setStoreUpdate((prev) => ({ ...prev, [name]: value }));
  };

  const submitUpdateHandler = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(updateStore(storeUpdate) as any);
      localStorage.setItem("store", JSON.stringify(storeUpdate));
      setOpenModal(!openModal);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (success) {
      dispatch(reset() as any);
    }
  }, [dispatch, success]);

  return (
    <div className={styles.screen}>
      <div className={styles.settings}>
        <div className={styles.header_setting}>
          <h2>General</h2>
          <button onClick={submitUpdateHandler}>Guardar</button>
        </div>

        <div className={styles.setting_grid}>
          <div>
            <div className={styles.card}>
              <h4 className={styles.card_title}>Detalles del negocio</h4>
              <div className={styles.colums_card}>
                <Field label="Nombre del negocio">
                  <Input
                    name="name"
                    value={storeUpdate.name}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="NIT">
                  <Input
                    name="nit"
                    value={storeUpdate.nit}
                    onChange={handleChange}
                  />
                </Field>

                <Field label="Correo Electronico">
                  <Input
                    name="email"
                    value={storeUpdate.email}
                    onChange={handleChange}
                  />
                </Field>

                <Field label="Telefono">
                  <Input
                    name="phone"
                    value={storeUpdate.phone}
                    onChange={handleChange}
                  />
                </Field>

                <Field label="Capacidad del negocio">
                  <Input
                    name="limit"
                    value={storeUpdate.limit}
                    onChange={handleChange}
                  />
                </Field>

                <Field label="Tipo discoteca">
                  <select
                    name="type"
                    id=""
                    required
                    value={storeUpdate.type}
                    onChange={handleChange}
                  >
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
                  <select name="" id="">
                    <option value="Regimen Comun">Regimen Comun</option>
                    <option value="Regimen Simplificado">
                      Regimen Simplificado
                    </option>
                    <option value="Regimen Especial">Regimen Especial</option>
                  </select>
                </Field>
                <Field label="Tipo de factura">
                  <select name="" id="">
                    <option value="Nacional">Nacional</option>
                    <option value="Cuenta de cobro">Cuenta de cobro</option>
                  </select>
                </Field>
              </div>
            </div>
            <div className={styles.card}>
              <h4 className={styles.card_title}>Terminos y condiciones</h4>
              <div className={styles.colums_card}></div>
            </div>
          </div>
          <div className={styles.image_input}>
            <h4 className={styles.card_title}>Subir imagen</h4>
            <div className={styles.container_input_image_upload}>
              <DragCloudinary
                idInput="file-settings-bussiness"
                setImageUrl={setImageUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsBusiness;
