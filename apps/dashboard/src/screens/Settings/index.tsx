import InputCloudinary from "@/components/Layout/InputCloudinary/InputCloudinary";
import Field from "@/components/shared/Field";
import Input from "@/components/shared/Input";
import { reset, updateAdmin } from "@/redux/states/admins/admin";
import { AppStore } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./settings.module.css";

const Settings = () => {
  const dispatch = useDispatch();

  const { admin, loading, success } = useSelector((state: AppStore) => state.admins);
  
  const [imageUrl, setImageUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [adminUpdate, setAdminUpdate] = useState({
    uuid: admin.uuid,
    name: admin.name,
    lastname: admin.lastname,
    identification: admin.identification,
    email: admin.email,
    phone: admin.phone,
    age: admin.age,
    address: admin.address,
    photo: imageUrl,
    identification_type: admin.identification_type,
    birthdate: admin.birthdate,
    gender: admin.gender,
    password: admin.password,
    verification_code: admin.verification_code,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setAdminUpdate((prev) => ({ ...prev, [name]: value }));
  };

  const submitUpdateHandler = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(
        updateAdmin({
          ...adminUpdate,
          photo: imageUrl === "" ? admin.photo : imageUrl,
        }) as any
      );
      setOpenModal(!openModal);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  const [view, setView] = useState(true);

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
              <h4 className={styles.card_title}>Datos personales</h4>
              <div className={styles.colums_card}>
                <Field label="Nombre">
                  <Input
                    name="name"
                    value={adminUpdate.name}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Apellido">
                  <Input
                    name="lastname"
                    value={adminUpdate.lastname}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Numero de identificacion">
                  <Input
                    name="identification"
                    value={adminUpdate.identification}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Correo Electronico">
                  <Input
                    name="email"
                    value={adminUpdate.email}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Telefono">
                  <Input
                    name="phone"
                    value={adminUpdate.phone}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Edad">
                  <Input
                    name="age"
                    value={adminUpdate.age}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Direccion">
                  <Input
                    name="address"
                    value={adminUpdate.address}
                    onChange={handleChange}
                  />
                </Field>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.image_input}>
              <h4 className={styles.card_title}>Subir imagen</h4>

              {view ? (
                <>
                  <img src={admin.photo} alt="Profile Picture" />
                  <button onClick={() => setView(false)}>Cambiar</button>
                </>
              ) : (
                <>
                  <InputCloudinary
                    idInput="file-settings"
                    setImageUrl={setImageUrl}
                  />
                  {imageUrl != "" ? (
                    ""
                  ) : (
                    <button onClick={() => setView(true)}>
                      Ver imagen actual
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
