import { Button, Field, Input } from "@/components/shared";
import { reset, updateStore } from "@/redux/states/stores/storesSlice";
import { getStoreById } from "@/redux/states/stores/thunks";
import { AppStore } from "@/redux/store";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./bookings.module.css";
import CardBooking from "./Component/CardBooking";
import BookingList from "./List";

export const usersByDatabaseMook = [
  {
    uuid: "1234",
    name: "Camilo Castro",
    age: 18,
  },
  {
    uuid: "2198",
    name: "Pablo Picasso",
    age: 50,
  },
  {
    uuid: "5679",
    name: "Pedro Palacio",
    age: 33,
  },
]

const Bookings = () => {
  const dataBooking = [
    {
      uuid: "1234",
      name: "Camilo Castro",
      chairs: 5,
      table: 1,
      day: "31/12/2022",
      number: "1",
      state: true,
    },
    {
      uuid: "2198",
      name: "Pablo Picasso",
      chairs: 8,
      table: 2,
      day: "31/12/2022",
      hour: "08:00",
      number: "2",
      state: true,
    }
  ];

  const { store, success, oneStore } = useSelector((state: AppStore) => state.stores);

  const [storeUpdate, setStoreUpdate] = useState({
    uuid: store.uuid,
    chairs: oneStore.chairs || store.chairs,
    tables: oneStore.tables || store.tables,
    chairs_per_table: oneStore.chairs_per_table || store.chairs_per_table,
    max_per_table: oneStore.max_per_table || store.max_per_table,
    min_per_table: oneStore.min_per_table || store.min_per_table 
  });

  const [openModal, setOpenModal] = useState(false);

  const submitUpdateHandler = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(updateStore(storeUpdate) as any);
      setOpenModal(!openModal);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setStoreUpdate((prev) => ({ ...prev, [name]: value }));
  };


  const [bookingSelected, setBookingSelected] = useState<any>();

  const totalBookingsTable = dataBooking.reduce((a, c) => a + c.table * 1, 0)
  const totalBookingsChairs = dataBooking.reduce((a, c) => a + c.chairs * 1, 0)

  const dispatch = useDispatch();
  
  const [bookings, setBookings] = useState([]);
  const getBookings = async () => {
    const {data} = await axios.get(`http://localhost:5000/api/v3/bookings/${store.uuid}`)
    console.log(data)
    setBookings(data)
  }
  
  useEffect(() => {
    dispatch(getStoreById(store.uuid) as any);
    getBookings();
    if (success) {
      dispatch(reset() as any);
    }
  }, [dispatch, success]);
  return (
    <div className={styles.screen}>
      <div className={styles.center__screen}>
        <div className={`${styles.flex} ${styles.border}`}>
          <div className={styles.box}>
            <h3>Total Reservas</h3>
            <p>{dataBooking.length}</p>
          </div>
          <div className={styles.box}>
            <h3>Sillas Disponibles</h3>
            <p>{oneStore.chairs && oneStore.chairs - totalBookingsChairs}</p>
          </div>
          <div className={styles.box}>
            <h3>Mesas Disponibles</h3>
            <p>{oneStore.tables && oneStore.tables - totalBookingsTable}</p>
          </div>
          <div className={styles.box}>
            <h3>Reservas Efectivas</h3>
            <p>0</p>
          </div>
          <div className={styles.box}>
            <h3>Historial de Reservas </h3>
            <p>0</p>
          </div>
        </div>
        <div className={styles.booking_header}>
            <h3>Reservas</h3>
            <div>
              <button onClick={() => setOpenModal(true)}>Configuracion</button>
            </div>
        </div>
        <div className={styles.booking_container}>
          <div className={styles.booking}>
            <BookingList dataBooking={bookings} setBooking={setBookingSelected} />
          </div>
          <div className={styles.booking_details}>
            <div className={styles.details_header}>
              <div>
                <p>{bookingSelected?.name}</p>
                <h4>MESA {bookingSelected?.tables} | SILLAS {bookingSelected?.chairs}</h4>
              </div>
              <button>CHECK-IN</button>
            </div>
            <div className={styles.editor}>
              {bookingSelected? (
              <div>
                <ul>
                  <li>Nombre: {bookingSelected.name}</li>
                  <li>Mesa #: {bookingSelected.table}</li>
                  <li>Mesas: {bookingSelected.tables}</li>
                  <li>Sillas: {bookingSelected.chairs}</li>
                  <li>Hora: {bookingSelected.time}</li>
                  <li>Fecha: {bookingSelected.date.substring(0,10)}</li>
                  <li>Fecha de creacion: {bookingSelected.createdAt.substring(0,10)}</li>
                </ul>
              </div>

              ): (
                <h4>No hay nignuna reserva seleccionada</h4>
              )}
            </div>
            <div className={styles.footer}>
              <button>
                ELIMINAR RESERVA
              </button>
              <button>CHECK-OUT</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right__screen}>
        {dataBooking.map((booking) => (
          <button key={booking.uuid} className={styles.button__none}>
          </button>
        ))}
      </div>
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
            <Field label="Sillas disponibles">
              <Input name="chairs" type="number" value={storeUpdate.chairs} onChange={handleChange} />
            </Field>
            <Field label="Mesas disponibles">
                <Input
                  name="tables"
                  type="number"
                  value={storeUpdate.tables}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Sillas por mesa">
                <Input
                  name="chairs_per_table"
                  type="number"
                  value={storeUpdate.chairs_per_table}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Maximo de sillas por mesa">
                <Input
                  name="max_per_table"
                  type="number"
                  value={storeUpdate.max_per_table}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Minimo de sillas por mesa">
                <Input
                  name="min_per_table"
                  type="number"
                  value={storeUpdate.min_per_table}
                  onChange={handleChange}
                />
              </Field>
          </div>
          <Button onClick={submitUpdateHandler}>Guardar</Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Bookings;
