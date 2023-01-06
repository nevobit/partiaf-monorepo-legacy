import React, { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import perfil from "../../../assets/LS.jpg";

const Header = () => {
  const [drop, setDrop] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <nav>
        <div className={`${styles.dropdown} ${styles.active}`}>
          <div className={styles.container_info_header}>
            <div className={styles.notification_container}>
              <img src="./newAssets/icono-notificacion.svg" />
            </div>

            <div className={styles.header_user_info}>
              <h3
                className={styles.user_name}
                onClick={() => setOpenMenu(!openMenu)}
              >
                Usuario Partiaf
              </h3>
              <img className={styles.user_image} src={perfil} alt="" />
            </div>
          </div>

          <div className={openMenu ? styles.open_menu : styles.close_menu}>
            <div className={styles.menu_content}>
              <Link to="/settings">Mi perfil</Link>
              <Link to="/settings-business">Configurar negocio</Link>
              <button>Cambiar de negocio</button>
              <button>Cerrar Sesion</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
