import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import Input from "@/components/shared/Input";
import { verification } from "@/redux/states/admins/admin";
import { verificationCodeAdmin } from "@/redux/states/admins/thunks";
import { AppStore } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./verification.module.css";
import { PrivateRoutes, PublicRoutes } from '../../constants-definitions/Routes/index';

const Verification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [verification_code, setVerificationCode] = useState("");

  const { admin, successVerification } = useSelector((state: AppStore) => state.admins);

  const submitActivateAdmin = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(verification(verification_code) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };


  console.log({successVerification})

  useEffect(() => {

    if(admin == null || admin.email == ""){
      navigate(PublicRoutes.SIGNIN, {replace: true});
    }
    if(successVerification){
      navigate(PrivateRoutes.BUSINESS, {replace: true});
    }
  }, [successVerification, navigate])

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
                maxLength={6}
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
