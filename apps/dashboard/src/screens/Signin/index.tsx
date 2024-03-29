import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import Input from "@/components/shared/Input";
import { PublicRoutes } from "@/constants-definitions/Routes";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import Loader from "@/components/Layout/Loader";
import { login } from "@/redux/states/admins/admin";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const ERRORS: Record<string, string> = {
  "103": "Contrasena incorrecta",
  "101": "Usuario no existe o esta inactivo",
};

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const remenberInfo = localStorage.getItem("remenberInfo")
    ? JSON.parse(localStorage.getItem("remenberInfo") || "")
    : "";

  const [admin, setAdmin] = useState({
    email: remenberInfo?.email,
    password: remenberInfo?.password,
  });

  const [remenber, setRemenber] = useState(
    remenberInfo ? remenberInfo.remenber : false
  );

  const {
    loading,
    admin: adminUser,
    success,
    error,
  } = useSelector((state: AppStore) => state.admins);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      remenberHandler();
      dispatch(login({ email: admin.email, password: admin.password }) as any);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      }
    }
  };

  const remenberHandler = () => {
    if (remenber) {
      localStorage.setItem(
        "remenberInfo",
        JSON.stringify({
          remenber: remenber,
          email: admin.email,
          password: admin.password,
        })
      );
    } else {
      localStorage.removeItem("remenberInfo");
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/business", { replace: true });
    }
  }, [adminUser, error, success, navigate, dispatch]);

  const actualError: string = error;
  if (loading) return <Loader />;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <div className={styles.form}>
            <img src="/logo-parti.svg" alt="Log Partiaf" />
            <Field label="Correo electronico">
              <Input
                name="email"
                placeholder="Introduce tu correo electronico"
                value={admin.email}
                onChange={handleChange}
              />
            </Field>
            <Field label="Contrasena" error={ERRORS[actualError]}>
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Contrasena"
                value={admin.password}
                onChange={handleChange}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className={styles.pass}
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </Field>

            <Field>
              <Button backgroundColor="#333" color="#f2f2f2" onClick={onSubmit}>
                Entrar
              </Button>
            </Field>

            <div className={styles.signin_options}>
              <label>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={remenber}
                  onChange={({ target }) => setRemenber(target.checked)}
                />
                Recuerdame
              </label>
              <Link to="/forgot-password-admin">
                ¿Has olvidado tu contraseña?
              </Link>
            </div>
            <Field>
              <Button>
                <Link to={PublicRoutes.SIGNUP}>Ir a registrarse</Link>
              </Button>
            </Field>
            <span className={styles.copy}>
              &copy; Todos los derechos reservados
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Signin;
