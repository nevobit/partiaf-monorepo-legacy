import { ImageInput, Input, MapForLocation } from "@/components/shared";
import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import { uploadHandler } from "@/hooks/upload-image";
import {
  createStoreSlice,
  PartialStore,
  reset,
} from "@/redux/states/stores/storesSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./registerBusiness.module.css";
import { PrivateRoutes } from "../../constants-definitions/Routes/index";
import { AppStore } from "@/redux/store";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/matosr96/image/upload";
const RegisterBusiness = () => {
  const { admin } = useSelector((state: AppStore) => state.admins);
  const [screen, setScreen] = useState(0);
  const [store, setStore] = useState<PartialStore>({
    name: "",
    admin: admin.uuid,
    email: "",
    phone: 0,
    nit: "",
    employes: 0,
    employe_code: 0,
    limit: 0,
    password: "",
    type: "Discoteca",
    description: "",
    photos: [],
    location: [0, 0],
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const { success } = useSelector((state: AppStore) => state.stores);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setStore((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (confirmPassword !== store.password) {
      setErrorPassword("Las contraseñas no coinciden");
      return;
    }

    dispatch(createStoreSlice(store) as any);
  };
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
          const images = store.photos || [];
          images.push(image);
          setStore((prev) => ({ ...prev, ["photos"]: images }));
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const nextScreen = () => {
    if (confirmPassword !== store.password) {
      setErrorPassword("Las contraseñas no coinciden");
      return;
    } else {
      setErrorPassword("");
    }
    setScreen(1);
  };

  const removePhoto = (image: string) => {
    let images = store.photos || [];
    images = images.filter((i) => i != image);
    setStore((prev) => ({ ...prev, ["photos"]: images }));
  };

  useEffect(() => {
    if (success) {
      dispatch(reset());
      navigate(PrivateRoutes.BUSINESS);
    }
  }, [success, dispatch]);

  return (
    <div className={styles.container}>
      {screen == 0 && (
        <div className={styles.form}>
          <Link to={PrivateRoutes.BUSINESS} className={styles.back}>
            <i className="bx bx-arrow-back"></i>
          </Link>
          <img src="/logo-parti.svg" alt="Log Partiaf" />
          <div className={styles.info_registerBusiness}>
            <p>Datos del establecimiento</p>
            <div className={styles.container_form}>
              <div className={styles.form_div}>
                <Field label="Nombre">
                  <Input
                    name="name"
                    value={store.name}
                    onChange={handleChange}
                  />
                </Field>
                <Field
                  label="Nit (Opcional)"
                  tip="Nit o numero de identificacion del establecimiento"
                >
                  <Input name="nit" value={store.nit} onChange={handleChange} />
                </Field>
                <Field label="Cupo total">
                  <Input
                    name="limit"
                    value={store.limit}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Correo electronico">
                  <Input
                    name="email"
                    value={store.email}
                    onChange={handleChange}
                  />
                </Field>
              </div>

              <div className={styles.form_div}>
                <Field label="Telefono">
                  <Input
                    name="phone"
                    value={store.phone}
                    onChange={handleChange}
                  />
                </Field>
                <Field
                  label="Codigo Empleados"
                  tip="Inserte un codigo de 4 digitos para que sus empleados puedas usar nuestra app"
                >
                  <Input
                    name="employe_code"
                    value={store.employe_code}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="N° de Empleados">
                  <Input
                    name="employes"
                    value={store.employes}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Tipo establecimiento">
                  <select name="" id="">
                    <option value="Discoteca">Discoteca</option>
                    <option value="Bar">Bar</option>
                    <option value="Gastrobar">Gastrobar</option>
                  </select>
                </Field>
              </div>
            </div>
            <p>Ingresa una contraseña</p>
            <div className={styles.password_reg_business}>
              <Field label="Contraseña">
                <Input
                  type="password"
                  name="password"
                  value={store.password}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Confirmar contraseña" error={errorPassword}>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={({ target }) => setConfirmPassword(target.value)}
                />
              </Field>
            </div>
            <Field label="Ubicación del establecimiento">
              <MapForLocation setState={setStore} />
            </Field>
            <Field>
              <Button onClick={nextScreen} backgroundColor="#333" color="#ccc">
                Siguiente
              </Button>
            </Field>
          </div>
        </div>
      )}

      {screen == 1 && (
        <div className={styles.form}>
          <button onClick={() => setScreen(0)} className={styles.back}>
            <i className="bx bx-arrow-back"></i>
          </button>
          <img src="/logo-parti.svg" alt="Log Partiaf" />
          <div className={styles.info_registerBusiness}>
            <p>Imagenes del establecimiento</p>
            <div className={styles.container_images}>
              <div className={styles.container_form}>
                <ImageInput
                  name="photos"
                  onChange={(e) => uploadHandler(e, "featurephoto")}
                />
              </div>
              <div className={styles.images}>
                {store.photos?.map((photo) => (
                  <div key={photo} className={styles.img_item}>
                    <button onClick={() => removePhoto(photo)}>
                      <i className="bx bx-x"></i>
                    </button>
                    <img src={photo} />
                  </div>
                ))}
              </div>
            </div>

            <p>Ingresa una descripcion</p>
            <textarea
              className={styles.store_text}
              cols={20}
              rows={9}
              name="description"
              onChange={handleChange}
            ></textarea>

            <Field>
              <Button
                onClick={handleSubmit}
                backgroundColor="#333"
                color="#ccc"
              >
                Registrar negocio
              </Button>
            </Field>
          </div>
        </div>
      )}

      {/* <div style={{width: '100vw', height: '100vh', zIndex: 5}}>

        <Map />  
      </div> */}
    </div>
  );
};

export default RegisterBusiness;
