import DragCloudinary from "@/components/Layout/drag-cloudinary";
import Field from "@/components/shared/Field";
import Input from "@/components/shared/Input";
import { reset, updateAdmin } from "@/redux/states/admins/admin";
import { getAdminByIdThunks } from "@/redux/states/admins/thunks";
import { AppStore } from "@/redux/store";
import { showSuccessMessage } from "@/utils/swal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./settings.module.css";

const Settings = () => {
  const dispatch = useDispatch();
  const { success, admin } = useSelector((state: AppStore) => state.admins);
  console.log(admin);

  const { uuid: uuidAdmin } = localStorage.getItem("admin")
    ? JSON.parse(localStorage.getItem("admin") || "")
    : "";

  let photoUser = "";
  console.log(photoUser);
  const [imageUrl, setImageUrl] = useState("");
  const [isChanged, setIsChanged] = useState(false);

  const [adminUpdate, setAdminUpdate] = useState({
    uuid: "",
    name: "",
    lastname: "",
    identification: 0,
    email: "",
    phone: 0,
    age: 0,
    address: "",
    identification_type: "",
    birthdate: "",
    gender: "",
    password: "",
    verification_code: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setAdminUpdate((prev) => ({ ...prev, [name]: value }));
  };

  const updateUser = async (e: any) => {
    e.preventDefault();

    if (imageUrl != "") {
      photoUser = imageUrl;
    }
    try {
      dispatch(updateAdmin({ ...adminUpdate, photo: "" }) as any);
      localStorage.setItem(
        "admin",
        JSON.stringify({
          ...adminUpdate,
          photo: photoUser,
        })
      );
      showSuccessMessage("Registros actualizados con éxito.");
      setImageUrl("");
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
    console.log(success);
    dispatch(getAdminByIdThunks(uuidAdmin) as any);
  }, [dispatch, success]);

  return (
    <div className={styles.screen}>
      <div className={styles.settings}>
        <div className={styles.header_setting}>
          <h2>General</h2>
          <button onClick={updateUser}>Guardar</button>
        </div>

        <div className={styles.setting_grid}>
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
          <Field>
            <div className={styles.container_cld}>
              {imageUrl == "" && !isChanged ? (
                <div className={styles.quit_image}>
                  <img src={photoUser} />
                  <button onClick={() => setIsChanged(!isChanged)}>
                    <i className="bx bxs-trash-alt"></i>
                  </button>
                </div>
              ) : (
                <Field>
                  <div className={styles.image_settings_upload}>
                    <DragCloudinary
                      idInput="file-settings-user"
                      setImageUrl={setImageUrl}
                    />
                  </div>
                </Field>
              )}
            </div>
          </Field>
        </div>
      </div>
    </div>
  );
};

export default Settings;
