import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import Input from "@/components/shared/Input";
import { verificationCodeAdmin } from "@/redux/states/admins/thunks";
import { AppStore } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./verification.module.css";

const Verification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [verification_code, setVerificationCode] = useState("");

  const { admin } = useSelector((state: AppStore) => state.admins);

  const submitActivateAdmin = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(verificationCodeAdmin(verification_code) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
    navigate("/business", { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <img src="/logo-parti.svg" alt="Log Partiaf" />

        <div className={styles.info_verification}>
          <p>Te enviamos un codigo para verificar tu correo electronico</p>
          <span>
            Enviado a <strong>{admin.email}</strong>
          </span>
          <div>
            <form className={styles.form_code}>
              <Input
                type="number"
                value={verification_code}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
            </form>
          </div>
          <p>¡No recibi un codigo!</p>
          <a className="text-reenviar"> Reenviar</a>
          <Field>
            <Button
              backgroundColor="#333"
              color="#f2f2f2"
              onClick={submitActivateAdmin}
            >
              Continuar
            </Button>
          </Field>
        </div>
      </div>
    </div>
  );
};

export default Verification;
