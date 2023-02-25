import InputCloudinary from "@/components/Layout/InputCloudinary/InputCloudinary";
import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import Input from "@/components/shared/Input";
import { PublicRoutes } from "@/constants-definitions/Routes";
import { signup } from "@/redux/states/admins/admin";
import { AppStore } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signin.module.css";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import ContainerModal from "@/components/Layout/ContainerModal";
import TermsAndConditions from "@/components/signup/TermsAndConditions";

const Signup = () => {
  const [openModal, setOpenModal] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const HandlerOpenModal = () => {
    setOpenModal(!openModal);
  };

  const {
    loading,
    admin: adminUser,
    successSignup,
    error,
  } = useSelector((state: AppStore) => state.admins);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [imageUrlSignup, setImageUrlSignup] = useState("");
  console.log("si llego la url es esta ==>", imageUrlSignup);

  const [admin, setAdmin] = useState({
    name: "",
    lastname: "",
    email: "",
    identification_type: "CC",
    identification: 0,
    password: "",
    age: 0,
    phone: 0,
    birthdate: "",
    gender: "M",
    address: "",
    photo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAdmin((prev) => ({ ...prev, [name]: value }));
    setAdmin((prev) => ({ ...prev, image: imageUrlSignup }));
  };

  const handleAcceptTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTerms(e.target.checked);
  };

  const submitRegisterHandler = async (e: any) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert("Debe aceptar los términos y condiciones para continuar");
      return;
    }
    try {
      dispatch(signup(admin) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  console.log({ successSignup });
  console.log({ error });

  useEffect(() => {
    if (successSignup) {
      navigate("/verification", { replace: true });
    }
  }, [admin, successSignup, navigate]);

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={submitRegisterHandler}>
          <div className={styles.header_image_logo}>
            <img src="/logo-parti.svg" alt="Log Partiaf" />
          </div>
          <div className={styles.grid}>
            <div>
              <Field label="Nombre*">
                <Input
                  name="name"
                  placeholder="Introduce tu nombre"
                  value={admin.name}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Apellido*">
                <Input
                  name="lastname"
                  placeholder="ingresa tu apellido"
                  value={admin.lastname}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Correo electronico*">
                <Input
                  name="email"
                  placeholder="Ingresa tu correo electronico"
                  value={admin.email}
                  onChange={handleChange}
                />
              </Field>
            </div>

            <div className={styles.cnt_upload_view}>
              <Field label="foto de perfil">
                <InputCloudinary
                  idInput="file-signup"
                  setImageUrl={setImageUrlSignup}
                />
              </Field>
            </div>
          </div>
          <Field label="Direccion*">
            <Input
              name="address"
              placeholder="Ingresa tu direccion"
              value={admin.address}
              onChange={handleChange}
            />
          </Field>
          <div className={styles.grid}>
            <Field label="Edad*">
              <Input
                name="age"
                type="number"
                placeholder="Ingresa tu edad"
                value={admin.age}
                onChange={handleChange}
              />
            </Field>
            <Field label="Telefono*">
              <Input
                name="phone"
                type="number"
                placeholder="Ingresa tu telefono"
                value={admin.phone}
                onChange={handleChange}
              />
            </Field>

            <Field label="Fecha de nacimiento*">
              <Input
                name="birthdate"
                type="date"
                placeholder="Contrasena"
                value={admin.birthdate}
                onChange={handleChange}
              />
            </Field>
            <Field label="Genero*">
              <select name="" id="" onChange={handleChange}>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
                <option value="O">Otro</option>
              </select>
            </Field>
            <Field label="Tipo de documento*">
              <select name="identification_type" id="" onChange={handleChange}>
                <option value="CC">Cedula de ciudadania</option>
                <option value="CE">Cedula de extranjeria</option>
                <option value="PASSPORT">Pasaporte</option>
              </select>
            </Field>
            <Field label="Documento*">
              <Input
                name="identification"
                type="number"
                placeholder="Ingresa tu numero de documento"
                value={admin.identification}
                onChange={handleChange}
              />
            </Field>
          </div>

          <div className={styles.grid}>
            <Field label="Ingresa una contrasena">
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
            <Field label="Confirmar contrasena">
              <Input
                placeholder="Confirmar contrasena"
                type={showPasswordConfirm ? "text" : "password"}
              />
              <div
                onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                className={styles.passconfirm}
              >
                {showPasswordConfirm ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </Field>
          </div>
          <div className={styles.terms}>
            <input
              className={styles.acceptTerms}
              type="checkbox"
              id="terms"
              checked={acceptTerms}
              onChange={handleAcceptTermsChange}
            />
            <div className={styles.sec_terms}>
              <label htmlFor="terms">Acepto los </label>
              <button onClick={HandlerOpenModal}>
                <strong>términos y condiciones</strong>
              </button>
            </div>
          </div>
          <div className={styles.grid}>
            <Field>
              <Button>
                <Link to={PublicRoutes.SIGNIN}>Ir a iniciar sesion</Link>
              </Button>
            </Field>
            <Field>
              <Button backgroundColor="#333" color="#f2f2f2">
                Registrarse
              </Button>
            </Field>
          </div>
        </form>
      </div>
      <ContainerModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title={"Terminos y condiciones de uso"}
      >
        <TermsAndConditions />
      </ContainerModal>
    </>
  );
};

export default Signup;
