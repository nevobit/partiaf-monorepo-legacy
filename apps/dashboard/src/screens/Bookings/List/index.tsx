import Loader from "@/components/Layout/Loader";
import React, { useState } from "react";
import UpdateBooking from "../Update";
import styles from "./bookingList.module.css";
import { usersByDatabaseMook } from '../index';

const BookingList = (props: any) => {
  const { dataBooking , setBooking} = props;

  const getUserData:any = (uuid: string) => {
    // Axios
    const user = usersByDatabaseMook.filter((user) => user.uuid === uuid);
    console.log({user});
    return user;
  }
  return (
    <div className={styles.cover__list}>
      {dataBooking.map((booking: any) => (
        <div className={styles.card} onClick={() => setBooking(booking)}>
       
          <div className={styles.card_header}>
          <span className={styles.icon}>
            <i className='bx bx-chair'></i>
          </span>
          <div>
            <p>
              {booking.name}
            </p>
            <h4 className={styles.chair}>MESA: {booking.table} | SILLAS: {booking.chairs}</h4>
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
