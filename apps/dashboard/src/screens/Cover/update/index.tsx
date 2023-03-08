import DragCloudinary from "@/components/Layout/drag-cloudinary";
import { Button, Field, Input, MapForLocation } from "@/components/shared";
import { reset, updateCover } from "@/redux/states/covers/covers";
import { AppStore } from "@/redux/store";
import { convertToNumber, currencyMask } from "@/utils/currencyMask";
import { Cover } from "@partiaf/types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  const [Urlimage, setUrlImage] = useState(Cover.image);
  const [imageSelected, setImageSelected] = useState(false);

  const handleImageChange = (imageUrl: string) => {
    setUrlImage(imageUrl);
    setImageSelected(true);
  };

  const [cover, setCover] = useState<Cover>({
    uuid: Cover.uuid,
    name: Cover?.name,
    type: Cover?.type,
    price: Cover?.price,
    date: Cover?.date,
    limit: Cover?.limit,
    initial_limit: Cover?.limit,
    hour: Cover?.hour,
    description: Cover?.description,
    image: Cover.image,
    store: store.uuid || "",
    status: true,
    location: Cover?.location,
  });
  
  const [price, setPrice] = useState<string>(String(cover?.price));
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setCover((prev) => ({ ...prev, [name]: value }));
  };

  const submitUpdateHandler = async (e: any) => {
    e.preventDefault();
    let PriceConvert = convertToNumber(price);
    try {
      if (Urlimage === "") {
        setUrlImage(Cover.image);
      }
      dispatch(
        updateCover({
          ...cover,
          price: PriceConvert,
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
                  type="text"
                  value={"$" + price}
                  onChange={(e) => handlePriceChange(currencyMask(e))}
                />
              </Field>
              <Field label="Fecha">
                <Input type="date" value={cover.date}  name="date" onChange={handleChange} />
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
                <select name="type" value={cover.type} onChange={handleChange}>
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
                <DragCloudinary
                url={cover.image}
                  idInput="file-update-cover"
                  setImageUrl={handleImageChange}
                />
              </Field>
            </div>
            <div className={styles.location_form}>
              <Field label="Ubicacion del evento">
                <MapForLocation
                  state={cover.location}
                  setState={setCover}
                  className={styles.location_map}
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
