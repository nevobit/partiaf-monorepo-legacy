import Loader from "@/components/Layout/Loader";
import React, { useState } from "react";
import UpdateBooking from "../Update";
import styles from "./bookingList.module.css";

const BookingList = (props: any) => {
  const { dataBooking } = props;
  return (
    <div className={styles.cover__list}>
      {dataBooking.map((booking: any) => (
        <div className={styles.card}>
       
          <div className={styles.card_header}>
          <span className={styles.icon}>
            <i className='bx bx-chair'></i>
          </span>
          <div>
            <p>
              Pedro Picasso
            </p>
            <h4 className={styles.chair}>MESA: 5 | SILLAS: 6</h4>
          </div>

          </div>
          <ul>
            <li>Hora: {booking.hour}</li>
            <li>Fecha: {booking.day}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
