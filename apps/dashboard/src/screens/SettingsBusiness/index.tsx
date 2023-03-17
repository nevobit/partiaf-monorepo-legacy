import { ImageInput } from "@/components/shared";
import Field from "@/components/shared/Field";
import Input from "@/components/shared/Input";
import {
  deleteImageStoreByUrl,
  reset,
  updateStore,
} from "@/redux/states/stores/storesSlice";
import { getStoreById } from "@/redux/states/stores/thunks";
import { AppStore } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import styles from "./settingsBusiness.module.css";

const SettingsBusiness = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [urlPhotos, setUrlPhotos] = useState<string[] | undefined>([]);
  const { store, success } = useSelector((state: AppStore) => state.stores);

  const storeLocal = localStorage.getItem("store")
    ? JSON.parse(localStorage.getItem("store") || "")
    : "";

  console.log(storeLocal);

  const [storeUpdate, setStoreUpdate] = useState({
    uuid: storeLocal?.uuid,
    name: storeLocal?.name,
    nit: storeLocal?.nit,
    email: storeLocal?.email,
    phone: storeLocal?.phone,
    limit: storeLocal?.limit,
    type: storeLocal?.type,
    photos: [],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setStoreUpdate((prev) => ({ ...prev, [name]: value }));
  };

  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/matosr96/image/upload";
  const uploadHandler = async (e: any, imageField = "image") => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    bodyFormData.append("upload_preset", "r9rqkvzr");
    bodyFormData.append("cloud_name", "matosr96");
    console.log(bodyFormData);
    try {
      fetch(CLOUDINARY_URL, {
        method: "post",
        body: bodyFormData,
      })
        .then((resp) => resp.json())
        .then((data) => {
          const image = data.url || "";
          console.log(image);
          const images = storeLocal.photos || [];
          images.push(image);
          setUrlPhotos({ ...images });
          console.log(urlPhotos);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
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

  const submitDeleteHandler = async (url: string) => {
    try {
      swal({
        text: "¿Está seguro que desea eliminar el cover?",
        icon: "warning",
        buttons: ["Cancelar", "Eliminar"],
        dangerMode: true,
      }).then((willDelete: any) => {
        if (willDelete) {
          dispatch(deleteImageStoreByUrl({ uuid: store.uuid, url }) as any);
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (success) {
      dispatch(reset() as any);
    }
    setUrlPhotos(storeLocal?.photos);
    dispatch(getStoreById(storeLocal?.uuid) as any);
  }, [dispatch, success, store]);

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

          <div className={styles.section}>
            <div className={styles.image_input}>
              <h4 className={styles.card_title}>Subir imagen</h4>
              <div className={styles.container_input_image_upload}>
                <ImageInput
                  name="photos"
                  onChange={(e) => uploadHandler(e, "featurephoto")}
                />
              </div>
            </div>

            <div className={styles.container_image}>
              {storeLocal.photos.map((photo: string) => (
                <div className={styles.cnt_img}>
                  <img src={photo} alt="image" />
                  <button className={styles.button_show}>
                    <i className="bx bx-show-alt"></i>
                  </button>
                  <button
                    className={styles.button_trash}
                    onClick={() => submitDeleteHandler(photo)}
                  >
                    <i className="bx bxs-trash-alt"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsBusiness;
