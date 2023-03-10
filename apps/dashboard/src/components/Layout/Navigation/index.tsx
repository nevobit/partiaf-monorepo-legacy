import { PrivateRoutes } from "@/constants-definitions/Routes";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

const Navigation = () => {
  const [active, setActive] = useState("");
  return (
    <aside>
      <div className={styles.logo_navigation}>
        <img src="/logo-parti.svg" alt="logo" />
      </div>
      <ul>
        <Link
          to="/dashboard"
          onClick={() => setActive("dashboard")}
          className={
            active === "dashboard"
              ? `${styles.navigation__item} ${styles.active}`
              : styles.navigation__item
          }
        >
          <div className={styles.item_dash}>
            <img src="/newAssets/dash.svg" alt="" />
            <h5>Dashboard</h5>
          </div>
        </Link>
        <Link
          to="/covers"
          onClick={() => setActive("covers")}
          className={
            active === "covers"
              ? `${styles.navigation__item} ${styles.active}`
              : styles.navigation__item
          }
        >
          <div className={styles.item_dash}>
            <img src="/newAssets/icono-cover.svg" alt="" />
            <h5>Covers</h5>
          </div>
        </Link>
        <Link
          to={PrivateRoutes.BOOKINGS}
          onClick={() => setActive("bookings")}
          className={
            active === "bookings"
              ? `${styles.navigation__item} ${styles.active}`
              : styles.navigation__item
          }
        >
          <div className={styles.item_dash}>
            <img src="/newAssets/icono-reserva.svg" alt="" />
            <h5>Reservas</h5>
          </div>
        </Link>
        <Link
          to="/waiters"
          onClick={() => setActive("waiters")}
          className={
            active === "waiters"
              ? `${styles.navigation__item} ${styles.active}`
              : styles.navigation__item
          }
        >
          <div className={styles.item_dash}>
            <img src="/newAssets/icono-gastos-1.svg" alt="" />
            <h5>Colaboradores</h5>
          </div>
        </Link>
      </ul>
    </aside>
  );
};

export default Navigation;
