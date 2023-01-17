import InputCloudinary from "@/components/Layout/InputCloudinary/InputCloudinary";
import Field from "@/components/shared/Field";
import ImageInput from "@/components/shared/ImageInput";
import Input from "@/components/shared/Input";
import { AppStore } from "@/redux/store";
<<<<<<< HEAD
=======
import { Admin } from "@partiaf/types";
>>>>>>> e03c2c73cae046383802d0f443fc766b98ae86e1
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./settings.module.css";

const Settings = () => {
<<<<<<< HEAD
  const { admin, loading } = useSelector((state: AppStore) => state.admins);
  console.log("ADMIN =======> ", admin);
  const { name } = admin;
  console.log("ADMIN 0=======> ", name);
  const [imageUrl, setImageUrl] = useState("");

  const [Admin, setAdmin] = useState({
    name: "",
    lastname: "General",
    identification: 0,
    email: "",
    phone: 0,
    age: 0,
    address: "",
    photo: imageUrl,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setAdmin((prev) => ({ ...prev, [name]: value }));
    setAdmin((prev) => ({ ...prev, photo: imageUrl }));
  };
=======

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
>>>>>>> e03c2c73cae046383802d0f443fc766b98ae86e1

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
<<<<<<< HEAD
                  <Input
                    name="name"
                    value={admin.name}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Apellido">
                  <Input
                    name="lastname"
                    value={admin.lastname}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Numero de identificacion">
                  <Input
                    name="identification"
                    value={admin.identification}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Correo Electronico">
                  <Input
                    name="email"
                    value={admin.email}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Telefono">
                  <Input
                    name="phone"
                    value={admin.phone}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Edad">
                  <Input name="age" value={admin.age} onChange={handleChange} />
                </Field>
                <Field label="Direccion">
                  <Input
                    name="address"
                    value={admin.address}
                    onChange={handleChange}
                  />
=======
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
>>>>>>> e03c2c73cae046383802d0f443fc766b98ae86e1
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
              <InputCloudinary
                idInput="file-settings"
                setImageUrl={setImageUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
