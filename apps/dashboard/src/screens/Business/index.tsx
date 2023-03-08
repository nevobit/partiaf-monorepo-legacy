import styles from "./bussiness.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { PrivateRoutes } from "../../constants-definitions/Routes/index";
import { useEffect, useState } from "react";
import { logout } from "@/redux/states/admins/admin";
import Loader from "@/components/Layout/Loader";
import { getStoresById, signinStore } from "@/redux/states/stores/thunks";
import { Field, Input } from "@/components/shared";
import { loginStore, PartialStore } from "@/redux/states/stores/storesSlice";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Bussiness = () => {
  const { admin, loading } = useSelector((state: AppStore) => state.admins);

  const [showPassword, setShowPassword] = useState(false);

  const {
    loading: loadingStores,
    stores = [],
    successSignin,
    error,
  } = useSelector((state: AppStore) => state.stores);

  const [storeSelected, setStoreSelected] = useState<PartialStore>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signoutHandler = () => {
    try {
      dispatch(logout() as any);
      // navigate(PublicRoutes.SIGNIN, {replace: true});
    } catch (err) {
      console.log(err);
    }
  };

  const storeHandler = (store: PartialStore) => {
    setOpenModal(true);
    setStoreSelected(store);
  };

  const signninStoreHandler = () => {
    dispatch(loginStore({ uuid: storeSelected?.uuid || "", password }) as any);
  };

  useEffect(() => {
    if (admin && !admin.status) {
      navigate(PrivateRoutes.VERIFICATION);
    }
  }, [navigate, dispatch]);

  useEffect(() => {
    dispatch(getStoresById(admin.uuid) as any);
  }, []);

  useEffect(() => {
    if (successSignin) {
      navigate(PrivateRoutes.COVERS);
    }
  }, [navigate, successSignin]);

  if (loading || loadingStores) return <Loader />;

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.header}>
          <img src="/logo-partiaf.svg" alt="Logo Partiaf" />

          <Button backgroundColor="transparent" onClick={signoutHandler}>
            <img src="/logout.svg" alt="Logout Partiaf" />
            <p>Cerrar sesion</p>
          </Button>
        </div>
        <div className={styles.info_welcome}>
          <h1>¡Bienvenido!</h1>
          <img src={admin?.photo ? admin.photo : "/default.jpg"} alt="" />
          <p>
            {admin?.name} {admin?.lastname}
          </p>
          <span className={styles.span}>Por favor selecciona tu negocio</span>
          <Button backgroundColor="#333" color="#ccc">
            <Link to={PrivateRoutes.REGISTER_BUSINESS}>Añadir negocio</Link>
          </Button>
          <div className={styles.stores}>
            {stores?.map((store) => (
              <Button key={store.uuid} onClick={() => storeHandler(store)}>
                {store.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {openModal && (
        <div className={styles.modal_store}>
          <div className={styles.container_modal}>
            <div className={styles.header_modal}>
              <h4 className={styles.modal_title}>{storeSelected?.name}</h4>
              <Button onClick={() => setOpenModal(false)}>
                <i className="bx bx-x"></i>
              </Button>
            </div>
            <div className={styles.content_modal}>
              <Field error={error}>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  placeholder="Ingrese la contrasena del negocio"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.pass}
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </Field>
              <Button
                onClick={signninStoreHandler}
                backgroundColor="#333"
                color="#f2f6fa"
              >
                Entrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bussiness;
