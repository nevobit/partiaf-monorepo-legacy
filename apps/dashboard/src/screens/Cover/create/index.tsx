import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { useDispatch, useSelector } from "react-redux";
import { createCover, reset } from "@/redux/states/covers/covers";
import { AppStore } from "@/redux/store";

import DragCloudinary from "@/components/Layout/drag-cloudinary";
import { Button, Field, Input, MapForLocation } from "@/components/shared";

import { convertToNumber, currencyMask } from "@/utils/currencyMask";
import { Discount } from "@/utils/percentage";

import styles from "./createcover.module.css";

interface CreateCoverModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const INITIAL_COVER = {
  name: "",
  type: "General",
  date: "",
  limit: 0,
  initial_limit: 0,
  hour: "",
  description: "",
  percentage: 0,
  status: true,
  location: { lat: 4.6871722714242, lng: -74.05391727207545 },
};

function CreateCoverModal({ openModal, setOpenModal }: CreateCoverModalProps) {
  const { store } = useSelector((state: AppStore) => state.stores);
  const { success } = useSelector((state: AppStore) => state.covers);

  const [discount, setDiscount] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const [cover, setCover] = useState({
    ...INITIAL_COVER,
    image: imageUrl,
    store: store.uuid,
  });

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    if (name === "price") {
      const formattedPrice = currencyMask(
        event as ChangeEvent<HTMLInputElement>
      );
      setCover((prev) => ({ ...prev, [name]: formattedPrice }));
    } else {
      setCover((prev) => ({ ...prev, [name]: value }));
    }
    setCover((prev) => ({
      ...prev,
      initial_limit: prev.limit,
      image: imageUrl,
    }));
  };

  const handleDiscount = (event: ChangeEvent<HTMLInputElement>) => {
    setDiscount(event.target.checked);
  };

  const submitCreateHandler = async (
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    const PriceConvert = convertToNumber(price);
    const percentage = Discount(PriceConvert, cover.percentage);

    try {
      dispatch(
        createCover({
          ...cover,
          price: PriceConvert,
          image: imageUrl,
        }) as any
      );
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (success) {
      setOpenModal(false);
      dispatch(reset());
    }
  }, [success]);

  return (
    <>
      <div className={openModal ? styles.open_modal : styles.close_modal}>
        <div className={styles.container_form}>
          <div className={styles.form}>
            <div className={styles.header_cover_form}>
              <img src="/logo-parti.svg" alt="Log Partiaf" />
              <button
                className={styles.btn_header_cover}
                onClick={() => {
                  setOpenModal(!openModal);
                  reset();
                }}
              >
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
                <Field label="Tipo">
                  <select name="type" onChange={handleChange}>
                    <option value="VIP">VIP</option>
                    <option value="General">General</option>
                  </select>
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

                <Field label="Precio">
                  <Input
                    type="text"
                    value={"$" + price}
                    onChange={(event) => handlePriceChange(currencyMask(event))}
                  />
                </Field>
                {discount ? (
                  <Field label="Ingrese el porcentaje a descontar">
                    <Input
                      type="number"
                      name="percentage"
                      value={cover.percentage}
                      onChange={handleChange}
                    />
                  </Field>
                ) : (
                  <div className={styles.discount}>
                    <input
                      className={styles.select_check}
                      type="checkbox"
                      id="terms"
                      checked={discount}
                      onChange={handleDiscount}
                    />
                    <div className={styles.sec_terms}>
                      <label htmlFor="terms">Agregar descuento</label>
                    </div>
                  </div>
                )}
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
                    idInput="file-create-cover"
                    setImageUrl={setImageUrl}
                  />
                </Field>
              </div>
            </div>
            <div className={styles.location_form}>
              <Field label="Ubicacion del evento">
                <MapForLocation
                  setState={setCover}
                  state={cover.location}
                  className={styles.location_map}
                />
              </Field>
            </div>
            <Button onClick={submitCreateHandler}>Crear Cover</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateCoverModal;
