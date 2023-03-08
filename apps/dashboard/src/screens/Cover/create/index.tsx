import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import { useDispatch, useSelector } from "react-redux";
import { createCover, reset } from "@/redux/states/covers/covers";
import { AppStore } from "@/redux/store";

import DragCloudinary from "@/components/Layout/drag-cloudinary";
import { Button, Field, Input, MapForLocation } from "@/components/shared";

import { convertToNumber, currencyMask } from "@/utils/currencyMask";
// import { Discount } from "@/utils/percentage";
import styles from "./createcover.module.css";

import useForm from "@/hooks/useForm";
import type { Cover } from "@partiaf/types";
import coverShemas from "../shemas";
import Textarea from "@/components/shared/Textarea";
import SelectInput from "@/components/shared/SelectInput";
import InvalidFeedback from "@/components/shared/InvalidFeedback";

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
  price: "$",
  location: { lat: 4.6871722714242, lng: -74.05391727207545 },
};

function CreateCoverModal({ openModal, setOpenModal }: CreateCoverModalProps) {
  const { store } = useSelector((state: AppStore) => state.stores);
  const { success } = useSelector((state: AppStore) => state.covers);
  const [urlimage, setUrlImage] = useState<string | undefined>(undefined);

  const [discount, setDiscount] = useState(false);
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
    setCover({ ...cover, price: event.target.value });
  };

  const handleImageChange = (imageUrl: string) => {
    setUrlImage(imageUrl ?? undefined);
    setCover({ ...cover, image: imageUrl ?? undefined });
  };

  const {
    values: cover,
    setValues: setCover,
    handleChange,
    handleSubmit,
    handleBlur,
    formState: { errors, isValid },
  } = useForm({
    schema: coverShemas,
    initialState: { ...INITIAL_COVER, store: store.uuid, image: urlimage },
  });

  const handleDiscount = (event: ChangeEvent<HTMLInputElement>) => {
    setDiscount(event.target.checked);
  };

  const submitCreateHandler = async (coversValues: Cover) => {
    const PriceConvert = convertToNumber(price);
    // const percentage = Discount(PriceConvert, cover.percentage);
    try {
      dispatch(
        createCover({
          ...coversValues,
          price: PriceConvert,
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

  const hanadledIsError = useCallback(
    (name: string) => {
      return Boolean(errors[name]);
    },
    [errors]
  );

  const TYPE_OPTIONS = ["General", "VIP"];

  return (
    <>
      <div className={openModal ? styles.open_modal : styles.close_modal}>
        <div className={styles.container_form}>
          <form
            onSubmit={handleSubmit(submitCreateHandler)}
            className={styles.form}
          >
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
                <Input
                  name="name"
                  isError={hanadledIsError("name")}
                  invalidFeedback={errors.name}
                  value={cover.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>
              <div className={styles.data_fields}>
                <Field label="Cupo total">
                  <Input
                    name="limit"
                    type="number"
                    isError={hanadledIsError("limit")}
                    invalidFeedback={errors.limit}
                    onBlur={handleBlur}
                    value={cover.limit}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Tipo">
                  <SelectInput
                    isError={hanadledIsError("type")}
                    invalidFeedback={errors.type}
                    name="type"
                    onChange={handleChange}
                    options={TYPE_OPTIONS}
                  />
                </Field>
                <Field label="Fecha">
                  <Input
                    isError={hanadledIsError("date")}
                    invalidFeedback={errors.date}
                    type="date"
                    name="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Field>
              </div>
              <div className={styles.data_fields}>
                <Field label="Hora">
                  <Input
                    type="time"
                    name="hour"
                    isError={hanadledIsError("hour")}
                    invalidFeedback={errors.hour}
                    onBlur={handleBlur}
                    value={cover.hour}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Precio">
                  <Input
                    type="text"
                    name="price"
                    isError={hanadledIsError("price")}
                    invalidFeedback={errors.price}
                    value={"$" + price}
                    onBlur={handleBlur}
                    onChange={(event) => handlePriceChange(currencyMask(event))}
                  />
                </Field>
                {discount ? (
                  <Field label="Ingrese el porcentaje a descontar">
                    <Input
                      isError={hanadledIsError("percentage")}
                      invalidFeedback={errors.percentage}
                      type="number"
                      name="percentage"
                      value={cover.percentage}
                      onBlur={handleBlur}
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
                      onBlur={handleBlur}
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
                  <Textarea
                    name="description"
                    isError={hanadledIsError("description")}
                    invalidFeedback={errors.description}
                    value={cover.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={styles.text_area_cover}
                  />
                </Field>
                <Field>
                  <DragCloudinary
                    idInput="image"
                    setImageUrl={handleImageChange}
                  />
                  <InvalidFeedback isError={hanadledIsError("image")}>
                    {errors.image}
                  </InvalidFeedback>
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
            <Button type="submit" disabled={!isValid}>
              Crear Cover
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateCoverModal;
