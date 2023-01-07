import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import Input from "@/components/shared/Input";
import { PublicRoutes } from "@/constants-definitions/Routes";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signin.module.css";
import { useDispatch, useSelector } from "react-redux";

const Signin = () => {
  const dispatch = useDispatch();

  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <img src="/logo-parti.svg" alt="Log Partiaf" />
        <Field label="Correo electronico">
          <Input placeholder="Introduce tu correo electronico" />
        </Field>
        <Field label="Contrasena">
          <Input type="password" placeholder="Contrasena" />
        </Field>
        <Field>
          <Button backgroundColor="#333" color="#f2f2f2">
            Entrar
          </Button>
        </Field>

        <div className={styles.signin_options}>
          <label>
            <input type="checkbox" name="" id="" />
            Recuerdame
          </label>
          <Link to="/">¿Has olvidado tu contraseña?</Link>
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
  );
};

export default Signin;
