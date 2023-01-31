import { useState } from "react";
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
          to="/analitica"
          onClick={() => setActive("analitica")}
          className={
            active === "analitica"
              ? `${styles.navigation__item} ${styles.active}`
              : styles.navigation__item
          }
        >
          <div className={styles.item_dash}>
            <img src="" alt="Analitica" />
            <h5>Analitica</h5>
          </div>
        </Link>
        <Link
          to="/usuarios"
          onClick={() => setActive("usuarios")}
          className={
            active === "usuarios"
              ? `${styles.navigation__item} ${styles.active}`
              : styles.navigation__item
          }
        >
          <div className={styles.item_dash}>
            <img src="" alt="usuarios" />
            <h5>Usuarios</h5>
          </div>
        </Link>

        <Link
          to="/administador"
          onClick={() => setActive("administador")}
          className={
            active === "administador"
              ? `${styles.navigation__item} ${styles.active}`
              : styles.navigation__item
          }
        >
          <div className={styles.item_dash}>
            <img src="" alt="administador" />
            <h5>Administador</h5>
          </div>
        </Link>
      </ul>
    </aside>
  );
};

export default Navigation;
