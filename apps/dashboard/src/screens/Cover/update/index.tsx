import InputCloudinary from "@/components/Layout/InputCloudinary/InputCloudinary";
import { Button, Field, ImageInput, Input } from "@/components/shared";
import { reset, updateCover } from "@/redux/states/covers/covers";
import { AppStore } from "@/redux/store";
import { Cover } from "@partiaf/types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingBox } from "../component/CardCover/Loading";
import styles from "./createcover.module.css";

interface Props {
  openModal: boolean;
  setOpenModal: Function;
  Cover: Cover;
}

const EditCoverModal = ({ setOpenModal, openModal, Cover }: Props) => {
  const dispatch = useDispatch();

  const { store } = useSelector((state: AppStore) => state.stores);
  const { success } = useSelector((state: AppStore) => state.covers);

  const [Urlimage, setUrlImage] = useState("");
  const [imageSelected, setImageSelected] = useState(false);

  const handleImageChange = (imageUrl: string) => {
    setUrlImage(imageUrl);
    setImageSelected(true);
  };

  const [cover, setCover] = useState<Cover>({
    uuid: Cover.uuid,
    name: Cover?.name,
    type: "General",
    price: Cover?.price,
    date: Cover?.date,
    limit: Cover?.limit,
    initial_limit: Cover?.limit,
    hour: Cover?.hour,
    description: Cover?.description,
    image: Urlimage,
    store: store.uuid || "",
    status: true,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setCover((prev) => ({ ...prev, [name]: value }));
    //setCover((prev) => ({ ...prev, initial_limit: prev.limit }));
  };

  const submitUpdateHandler = async (e: any) => {
    e.preventDefault();
    try {
      if (Urlimage === "") {
        setUrlImage(Cover.image);
      }
      dispatch(
        updateCover({
          ...cover,
          image: Urlimage === "" ? Cover.image : Urlimage,
        }) as any
      );

      setOpenModal(!openModal);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (success) {
      setUrlImage("");
      dispatch(reset() as any);
    }
  }, [dispatch, success]);

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
              <Input name="name" value={cover.name} onChange={handleChange} />
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
              <Field label="Tipo">
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
                  className={styles.text_area_cover}
                ></textarea>
              </Field>
              <Field>
                <InputCloudinary
                  idInput="file-update-cover"
                  setImageUrl={setUrlImage}
                />
              </Field>
            </div>
          </div>
          <Button onClick={submitUpdateHandler}>Actualizar Cover</Button>
        </div>
      </div>
    </div>
  );
};

export default EditCoverModal;
