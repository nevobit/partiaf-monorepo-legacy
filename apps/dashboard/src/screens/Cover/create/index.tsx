import { Button, Field, ImageInput, Input } from "@/components/shared";
import { createCover } from "@/redux/states/covers/thunks";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./createcover.module.css";

const CreateCoverModal = (props: any) => {
  const dispatch = useDispatch();
  const { openModal, setOpenModal } = props;

  const [cover, setCover] = useState({
    name: "",
    type: "",
    price: 0,
    date: new Date(),
    limit: 0,
    initial_limit: 0,
    hour: "",
    description: "",
    image: "",
    peoples: "",
    store: "",
    status: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCover((prev) => ({ ...prev, [name]: value }));
  };

  const submitCreateHandler = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(createCover(cover) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={openModal ? styles.open_modal : styles.close_modal}>
      <div className={styles.container_form}>
        <div className={styles.form}>
          <div className={styles.header_cover_form}>
            <img src="/logo-parti.svg" alt="Log Partiaf" />
            <button
              className={styles.btn_header_cover}
              onClick={() => setOpenModal(!openModal)}
            >
              {" "}
              Cerrar
            </button>
          </div>
          <div className={styles.container_fields}>
            <Field label="Nombre del evento">
              <Input></Input>
            </Field>
            <div className={styles.data_fields}>
              <Field label="Cupo total">
                <Input />
              </Field>
              <Field label="Precio">
                <Input />
              </Field>
              <Field label="Fecha">
                <Input />
              </Field>
            </div>
            <div className={styles.data_fields}>
              <Field label="Hora">
                <Input />
              </Field>
              <Field label="General">
                <Input />
              </Field>
              <Field label="VIP">
                <Input />
              </Field>
            </div>
            <div className={styles.description_form}>
              <Field label="Descripcion">
                <textarea></textarea>
              </Field>
              <Field>
                <ImageInput />
              </Field>
            </div>
          </div>
          <Button>Crear Cover</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCoverModal;
