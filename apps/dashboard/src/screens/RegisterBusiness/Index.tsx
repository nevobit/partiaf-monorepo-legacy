import { Input } from "@/components/shared";
import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./registerBusiness.module.css";

const RegisterBusiness = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <img src="/logo-parti.svg" alt="Log Partiaf" />
        <div className={styles.info_registerBusiness}>
          <p>Datos del establecimiento</p>
          <div className={styles.container_form}>
            <div className={styles.form_div}>
              <Field label="Nombre">
                <Input placeholder=" " />
              </Field>
              <Field label="Nit (Opcional)">
                <Input placeholder=" " />
              </Field>
              <Field label="Cupo total">
                <Input placeholder=" " />
              </Field>
              <Field label="Correo electronico">
                <Input placeholder=" " />
              </Field>
            </div>

            <div className={styles.form_div}>
              <Field label="Telefono">
                <Input placeholder=" " />
              </Field>
              <Field label="Direccion">
                <Input placeholder=" " />
              </Field>
              <Field label="N° de Empleados">
                <Input placeholder=" " />
              </Field>
              <Field label="Tipo establecimiento">
                <Input placeholder=" " />
              </Field>
            </div>
          </div>
          <p>Ingresa una contraseña</p>
          <div className={styles.password_reg_business}>
            <Field label="Contraseña">
              <Input placeholder=" " />
            </Field>
            <Field label="Confirmar contraseña">
              <Input placeholder=" " />
            </Field>
          </div>
          <Field>
            <Button>Registrarme</Button>
          </Field>
        </div>
      </div>
    </div>
  );
};

export default RegisterBusiness;
