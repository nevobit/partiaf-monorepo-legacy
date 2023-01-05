import Loader from "@/components/Layout/Loader";
import React, { useState } from "react";
import UpdateBooking from "../Update";
import styles from "./bookingList.module.css";

const BookingList = (props: any) => {
  const { dataBooking } = props;
  const [update, setUpdate] = useState(false);

  return (
    <>
      {update ? (
        <UpdateBooking />
      ) : (
        <div className={styles.cover__list}>
          <>
            {dataBooking === undefined ? (
              <h2>NO HAY RESERVAS</h2>
            ) : (
              <>
                {dataBooking.map((booking:any) => (
                  <div className={`${styles.card} ${styles.card_new}`}>
                    <div className={styles.card_header}>
                      <p>
                        Estado de reserva :
                        {booking.state === true ? "Activa" : "Finalizada"}{" "}
                      </p>
                    </div>
                    <div>
                      INFO
                      <h2>{booking.type}</h2>
                    </div>
                    <ul>
                      <li>Cupos: {booking.peoples}</li>
                      <li>Hora: {booking.hour}</li>
                      <li>Fecha: {booking.day}</li>
                    </ul>
                  </div>
                ))}
              </>
            )}
          </>
        </div>
      )}
    </>
  );
};

export default BookingList;
