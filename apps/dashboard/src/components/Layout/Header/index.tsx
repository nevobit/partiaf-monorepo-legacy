import React, { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import perfil from "../../../assets/LS.jpg";

const Header = () => {
  const [drop, setDrop] = useState(false);
  return (
    <header>
      <nav>
        <div className={`${styles.dropdown} ${styles.active}`}>
          <div className={styles.container_info_header}>
            <div className={styles.notification_container}>
              <img src="./newAssets/icono-notificacion.svg" />
            </div>

            <div className={styles.header_user_info}>
              <h3 className={styles.user_name}>Usuario Partiaf</h3>
              <img className={styles.user_image} src={perfil} alt="" />
            </div>
          </div>

          <div className={styles.option}>
            <Link className={styles.btn_menu} to="/settings">
              Mi perfil
            </Link>
            <Link to="/settings-business" className={styles.btn_menu}>
              Configurar negocio
            </Link>

            <button className={styles.btn_menu}>Cambiar de negocio</button>
            <button className={styles.btn_menu}>Cerrar Sesion</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
