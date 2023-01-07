import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import ImageInput from "@/components/shared/ImageInput";
import Input from "@/components/shared/Input";
import { PublicRoutes } from "@/constants-definitions/Routes";
import { signupAdmin } from "@/redux/states/admins/thunks";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Signin.module.css";

const Signup = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [identification_type, setIdentification_type] = useState("CC");
  const [identification, SetIdentification] = useState<any>();
  const [age, SetAge] = useState<any>();
  const [phone, SetPhone] = useState<any>();
  const [birthdate, SetBirthdate] = useState("");
  const [gender, SetGender] = useState("M");
  const [address, SetAdress] = useState("");
  const [password, SetPassword] = useState("");
  const [photo, SetPhoto] = useState("");

  const submitRegisterHandler = (e: any) => {
    e.preventDefault();
    dispatch(
      signupAdmin(
        name,
        lastname,
        email,
        identification_type,
        identification,
        age,
        phone,
        birthdate,
        gender,
        address,
        password,
        photo
      ) as any
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <img src="/logo-parti.svg" alt="Log Partiaf" />
        <div className={styles.grid}>
          <div>
            <Field label="Nombre*">
              <Input
                placeholder="Introduce tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>
            <Field label="Apellido*">
              <Input
                placeholder="ingresa tu apellido"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Field>
            <Field label="Correo electronico*">
              <Input
                placeholder="Ingresa tu correo electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>
          </div>

          <Field label="Foto de perfil">
            <ImageInput />
          </Field>
        </div>

        <div className={styles.grid}>
          <Field label="Tipo de documento*">
            <select
              name=""
              id=""
              onChange={(e) => setIdentification_type(e.target.value)}
            >
              <option value="CC">Cedula de ciudadania</option>
              <option value="CE">Cedula de extranjeria</option>
              <option value="PASSPORT">Pasaporte</option>
            </select>
          </Field>
          <Field label="Documento*">
            <Input
              type="number"
              placeholder="Ingresa tu numero de documento"
              value={identification}
              onChange={(e) => SetIdentification(e.target.valueAsNumber)}
            />
          </Field>

          <Field label="Edad*">
            <Input
              type="number"
              placeholder="Ingresa tu edad"
              value={age}
              onChange={(e) => SetAge(e.target.valueAsNumber)}
            />
          </Field>
          <Field label="Telefono*">
            <Input
              type="number"
              placeholder="Ingresa tu telefono"
              value={phone}
              onChange={(e) => SetPhone(e.target.valueAsNumber)}
            />
          </Field>

          <Field label="Fecha de nacimiento*">
            <Input
              type="date"
              placeholder="Contrasena"
              value={birthdate}
              onChange={(e) => SetBirthdate(e.target.value)}
            />
          </Field>
          <Field label="Genero*">
            <select name="" id="" onChange={(e) => SetGender(e.target.value)}>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="O">Otro</option>
            </select>
          </Field>
        </div>
        <Field label="Direccion*">
          <Input
            placeholder="Ingresa tu direccion"
            value={address}
            onChange={(e) => SetAdress(e.target.value)}
          />
        </Field>
        <div className={styles.grid}>
          <Field label="Ingresa una contrasena">
            <Input
              placeholder="Contrasena"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
            />
          </Field>
          <Field label="Confirmar contrasena">
            <Input placeholder="Confirmar contrasena" />
          </Field>
        </div>

        <div className={styles.grid}>
          <Field>
            <Button>
              <Link to={PublicRoutes.SIGNIN}>Ir a iniciar sesion</Link>
            </Button>
          </Field>
          <Field>
            <Button backgroundColor="#333" color="#f2f2f2" onClick={submitRegisterHandler} >
              Registrarse
            </Button>
          </Field>
        </div>

        <span className={styles.copy}>
          Al registrarse usted acepta los términos y condiciones del servicio de
          PARTIA
        </span>
      </div>
    </div>
  );
};

export default Signup;
