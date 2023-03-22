import { ImageInput, MapForLocation } from "@/components/shared";
import Field from "@/components/shared/Field";
import Input from "@/components/shared/Input";
import {
  reset,
  updateStore,
  PartialStore,
} from "@/redux/states/stores/storesSlice";
import { AppStore } from "@/redux/store";
import { cloudinaryManyUpload } from "@/utils/Cloudinary/many";
import { confirmDelete, showSuccessMessage } from "@/utils/swal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./settingsBusiness.module.css";
import { getStoreByAdminThunk } from "../../redux/states/stores/thunks";

const SettingsBusiness = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { store, success } = useSelector((state: AppStore) => state.stores);
  const storeLocal = localStorage.getItem("store")
    ? JSON.parse(localStorage.getItem("store") || "")
    : "";

  const photosArray = storeLocal.photos.slice();
  const [urlPhotos, setUrlPhotos] = useState<string[]>(photosArray);

  console.log(store);

  const [storeUpdate, setStoreUpdate] = useState<PartialStore>({
    admin: storeLocal?.admin,
    uuid: storeLocal?.uuid,
    name: storeLocal?.name,
    nit: storeLocal?.nit,
    email: storeLocal?.email,
    phone: storeLocal?.phone,
    limit: storeLocal?.limit,
    type: storeLocal?.type,
    employes: storeLocal?.employes,
    employe_code: storeLocal?.employe_code,
    location: storeLocal?.location,
    max_per_table: storeLocal?.max_per_table,
    min_per_table: storeLocal?.min_per_table,
    description: storeLocal.description,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setStoreUpdate((prev) => ({ ...prev, [name]: value }));
  };

  const deleteHandler = (url: string) => {
    const index = photosArray.indexOf(url);
    if (index !== -1) {
      const newPhotosArray = [...photosArray];
      newPhotosArray.splice(index, 1);
      setUrlPhotos(newPhotosArray);
      localStorage.setItem(
        "store",
        JSON.stringify({
          ...storeLocal,
          photos: newPhotosArray,
        })
      );
    }
  };

  const submitDeleteHandler = async (url: string) => {
    const message = "¿Está seguro que desea eliminar la imagen?";
    confirmDelete(
      message,
      (param: any) => dispatch(deleteHandler(param) as any),
      url
    );
  };

  const submitUpdateHandler = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(
        updateStore({
          ...storeUpdate,
          photos: urlPhotos,
          location: storeUpdate.location,
        }) as any
      );
      localStorage.setItem(
        "store",
        JSON.stringify({
          ...storeUpdate,
          photos: urlPhotos,
          location: storeUpdate.location,
        })
      );
      setOpenModal(!openModal);
      showSuccessMessage("Registros actualizados con éxito.");
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
    dispatch(getStoreByAdminThunk(storeLocal?.uuid) as any);
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
                  <Input value={storeUpdate.email} />
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

                <Field label="Numero de empleados">
                  <Input
                    name="employes"
                    value={storeUpdate.employes}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Codigo de empleados">
                  <Input
                    name="employe_code"
                    value={storeUpdate.employe_code}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Latitud">
                  <Input value={storeUpdate.location?.lat} />
                </Field>
                <Field label="Longitud">
                  <Input value={storeUpdate.location?.lng} />
                </Field>
              </div>
            </div>

            <div className={styles.card}>
              <h4 className={styles.card_title}>
                Detalles de fiscales y de facturacion
              </h4>

              <div className={styles.colums_card}>
                {/*
                <div className={styles.width_input}>
                <Field label="Direccion">
                  <Input />
                </Field>
                </div>
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
                </Field>*/}
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
              <Field label="Subir imagen">
                <div className={styles.container_input_image_upload}>
                  <ImageInput
                    name="photos"
                    onChange={(e) =>
                      cloudinaryManyUpload(e, {
                        photosArray,
                        setUrlPhotos,
                        storeLocal,
                      })
                    }
                  />
                </div>
              </Field>
            </div>
            <div className={styles.container_image}>
              {urlPhotos.map((photo: string) => (
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
            <div className={styles.container_map_location}>
              <Field label="Ubicacion">
                <div className={styles.cnt_map}>
                  <MapForLocation setState={setStoreUpdate} />
                </div>
              </Field>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsBusiness;
