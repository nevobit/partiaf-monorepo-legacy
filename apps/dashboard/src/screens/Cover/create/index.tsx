import DragCloudinary from "@/components/Layout/drag-cloudinary";
import {
  Button,
  Field,
  ImageInput,
  Input,
  MapForLocation,
} from "@/components/shared";
import { createCover, reset } from "@/redux/states/covers/covers";
import { AppStore } from "@/redux/store";
import { convertToNumber, currencyMask } from "@/utils/currencyMask";
import { Discount } from "@/utils/percentage";
import { LatLngExpression } from "leaflet";
import React, { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./createcover.module.css";

const CreateCoverModal = (props: any) => {
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(false);
  const { openModal, setOpenModal } = props;
  const { store } = useSelector((state: AppStore) => state.stores);
  const { success } = useSelector((state: AppStore) => state.covers);
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const [cover, setCover] = useState({
    name: "",
    type: "General",
    date: "",
    limit: 0,
    initial_limit: 0,
    hour: "",
    description: "",
    image: imageUrl,
    store: store.uuid,
    percentage: 0,
    status: true,
    location: { lat: 4.6871722714242, lng: -74.05391727207545 },
  });
  console.log({ cover }, "cover desde createcover");
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "price") {
      const formattedPrice = currencyMask(e);
      setCover((prev) => ({ ...prev, [name]: formattedPrice }));
    } else {
      setCover((prev) => ({ ...prev, [name]: value }));
    }
    setCover((prev) => ({ ...prev, initial_limit: prev.limit }));
    setCover((prev) => ({ ...prev, image: imageUrl }));
  };
  const handleDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(e.target.checked);
  };
  const submitCreateHandler = async (e: any) => {
    e.preventDefault();
    let PriceConvert = convertToNumber(price);
    let percentage = Discount(PriceConvert, cover.percentage);
    try {
      console.log({ cover });
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
                    onChange={(e) => handlePriceChange(currencyMask(e))}
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
};

export default CreateCoverModal;
