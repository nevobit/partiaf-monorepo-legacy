import React from "react";
import styles from "./bookings.module.css";
import CardBooking from "./Component/CardBooking";
import BookingList from "./List";

const Bookings = () => {
  const dataBooking = [
    {
      id: "1",
      name: "reserva1",
      peoples: "20",
      type: "tipo",
      hour: "08:00",
      day: "31/12/2022",
      number: "1",
      state: true,
    },
    {
      id: "2",
      name: "Mesa para 2",
      peoples: "2",
      type: "Cena",
      hour: "08:00",
      day: "31/12/2022",
      number: "2",
      state: true,
    }
  ];
  return (
    <div className={styles.screen}>
      <div className={styles.center__screen}>
        <div className={`${styles.flex} ${styles.border}`}>
          <div className={styles.box}>
            <h3>Total Reservas</h3>
            <p>20</p>
          </div>
          <div className={styles.box}>
            <h3>Sillas Disponibles</h3>
            <p>20</p>
          </div>
          <div className={styles.box}>
            <h3>Mesas Disponibles</h3>
            <p>20</p>
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
        </div>
        <div className={styles.booking_container}>
          <div className={styles.booking}>
            <BookingList dataBooking={dataBooking} />
          </div>
          <div className={styles.booking_details}>
            <div className={styles.details_header}>
              <div>
                <p>Pedro Picasso</p>
                <h4>MESA 5 | SILLAS 6</h4>
              </div>
              <button>CHECK-IN</button>
            </div>
            <div className={styles.editor}>
              <img src="/edit.gif" alt="" />
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
          <button key={booking.id} className={styles.button__none}>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
