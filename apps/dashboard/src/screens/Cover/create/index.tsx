import DragCloudinary from "@/components/Layout/drag-cloudinary";
import { Button, Field, Input, MapForLocation } from "@/components/shared";
import { createCover, reset } from "@/redux/states/covers/covers";
import { AppStore } from "@/redux/store";
import { convertToNumber, currencyMask } from "@/utils/currencyMask";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CoverCreate.module.css";

interface Props {
  openModal: boolean;
  setOpenModal: Function;
}

const CreateCover = ({ openModal, setOpenModal }: Props) => {
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(false);
  const { store } = useSelector((state: AppStore) => state.stores);
  const { success } = useSelector((state: AppStore) => state.covers);
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const { uuid: coverUUID } = localStorage.getItem("store")
    ? JSON.parse(localStorage.getItem("store") || "")
    : "";
  console.log("EN CREATE", store);
  const [cover, setCover] = useState({
    name: "",
    type: "General",
    date: "",
    limit: 0,
    initial_limit: 0,
    hour: "",
    description: "",
    image: imageUrl,
    store: coverUUID,
    percentage: 0,
    status: "",
    location: { lat: 0, lng: 0 },
  });

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

  const handleExit = (e: any) => {
    e.preventDefault();
    setOpenModal(!openModal);
    reset();
  };
  const submitCreateHandler = async (e: any) => {
    e.preventDefault();
    let PriceConvert = convertToNumber(price);

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
            </div>

            <div className={styles.grid_form_cover}>
              <div className={styles.container_fields}>
                <Field label="Nombre del evento">
                  <Input
                    name="name"
                    value={cover.name}
                    onChange={handleChange}
                  />
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
                      <option value="General">General</option>
                      <option value="VIP">VIP</option>
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
                    <div className={styles.container_cld}>
                      <DragCloudinary
                        idInput="file-create-cover"
                        setImageUrl={setImageUrl}
                      />
                    </div>
                  </Field>
                </div>
              </div>
              <div className={styles.location_form}>
                <Field label="Ubicacion del evento">
                  <div className={styles.map_location}>
                    <MapForLocation
                      setState={setCover}
                      state={cover.location}
                      className={styles.location_map}
                    />
                  </div>
                </Field>
              </div>
            </div>
            <div className={styles.cnt_btn}>
              <button
                className={styles.submit_btn}
                onClick={submitCreateHandler}
              >
                Crear Cover
              </button>
              <button className={styles.exit_btn} onClick={handleExit}>
                Salir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCover;
