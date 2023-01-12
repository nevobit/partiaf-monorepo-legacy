import { Button, Field, ImageInput, Input } from "@/components/shared";
import { CreateCover } from "@/redux/states/covers/covers";
import { createCover } from "@/redux/states/covers/thunks";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./createcover.module.css";

const CreateCoverModal = (props: any) => {
  const dispatch = useDispatch();
  const { openModal, setOpenModal } = props;

  const [cover, setCover] = useState({
    name: "",
    type: "General",
    price: 0,
    date: "",
    limit: 0,
    initial_limit: 0,
    hour: "",
    description: "",
    image: "",
    store: "",
    status: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setCover((prev) => ({ ...prev, [name]: value }));
  };

  const submitCreateHandler = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(CreateCover(cover) as any);
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
                <Input
                  name="limit"
                  value={cover.limit}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Precio">
                <Input
                  name="price"
                  value={cover.price}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Fecha">
                <Input type="date" name="date" onChange={handleChange} />
              </Field>
            </div>
            <div className={styles.data_fields}>
              <Field label="Hora">
                <Input
                  type="time"
                  name="hour"
                  value={cover.hour}
                  onChange={handleChange}
                />
              </Field>
              <Field label="General">
                <select name="type" onChange={handleChange}>
                  <option value="VIP">VIP</option>
                  <option value="General">General</option>
                </select>
              </Field>
            </div>
            <div className={styles.description_form}>
              <Field label="Descripcion">
                <textarea
                  name="description"
                  value={cover.description}
                  onChange={handleChange}
                ></textarea>
              </Field>
              <Field>
                <ImageInput />
              </Field>
            </div>
          </div>
          <Button onClick={submitCreateHandler}>Crear Cover</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCoverModal;
