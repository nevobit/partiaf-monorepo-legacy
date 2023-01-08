import styles from "./bussiness.module.css";
import perfil from "../../assets/LS.jpg";
import { Link } from "react-router-dom";
import Button from "@/components/shared/Button";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

const Bussiness = () => {

  const {
    loading,
    admin: adminUser,
    success,
    error,
  } = useSelector((state: AppStore) => state.admins);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.info_welcome}>
          <h1>¡Bienvenido!</h1>
          <img src={adminUser.photo} alt="" />
          <p>{adminUser.name} {adminUser.lastname}</p>
          <span>Por favor selecciona tu negocio</span>
          <Button backgroundColor="#333" color="#ccc">
            <Link to="/store">Añadir negocio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Bussiness;
