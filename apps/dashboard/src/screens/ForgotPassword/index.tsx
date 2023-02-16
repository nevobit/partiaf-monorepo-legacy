import { Button, Field, Input } from "@/components/shared";
import { verificationEmail } from "@/redux/states/admins/admin";
import { AppStore } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./forgot.module.css";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAdmin((prev) => ({ ...prev, [name]: value }));
  };

  const {
    loading,
    admin: adminUser,
    successVerificationEmail,
    error,
  } = useSelector((state: AppStore) => state.admins);

  const submitVerificationHandler = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(verificationEmail(admin.email) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (successVerificationEmail) {
      navigate("/verification", { replace: true });
    }
  }, [admin, successVerificationEmail, navigate]);
  return (
    <div className={styles.container_forgot_password_admin}>
      <div className={styles.forgot_password_screen}>
        <div className={styles.header_forgot}>
          <img src="/logo-parti.svg" alt="Log Partiaf" />
          <h2>Recuperar contraseña</h2>
        </div>
        <form onSubmit={submitVerificationHandler}>
          <Field label="Correo electronico">
            <Input
              name="email"
              type="email"
              placeholder="Correo electronico"
              value={admin.email}
              onChange={handleChange}
            />
          </Field>
          <Button>Enviar link para restablecer contraseña</Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
