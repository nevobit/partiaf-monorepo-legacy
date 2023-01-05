import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import Input from "@/components/shared/Input";
import React from "react";
import styles from "./verification.module.css";

const Verification = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <img src="/logo-parti.svg" alt="Log Partiaf" />

        <div className={styles.info_verification}>
          <p>Te enviamos un codigo para verificar tu correo electronico</p>
          <span>Enviado a correoquemado</span>
          <div>
            <form className={styles.form_code}>
              <Input
                type="number"
              />
            </form>
          </div>
          <p>¡No recibi un codigo!</p>
          <a className="text-reenviar"> Reenviar</a>
          <Field>
            <Button backgroundColor="#333" color="#f2f2f2">
              Continuar
            </Button>
          </Field>
        </div>
      </div>
    </div>
  );
};

export default Verification;
