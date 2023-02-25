import React, { useState } from "react";
import { dataTermsAndConditions } from "./data";
import styles from "./TermsAndConditions.module.css";

const TermsAndConditions = () => {
  return (
    <div className={styles.info_terms}>
      <p className={styles.welcome_message}>
        Bienvenido al sitio web de Partiaf. Estos términos y condiciones rigen
        su uso del sitio web y los servicios relacionados que se ofrecen en el
        mismo. Al acceder o utilizar el sitio web de cualquier manera,
        incluyendo la navegación por el sitio, el registro de una cuenta o la
        realización de una compra, usted acepta cumplir con estos términos y
        condiciones.
      </p>
      <div className={styles.terms}>
        {dataTermsAndConditions.map((term) => (
          <>
            <h3>{term.title}</h3>
            <p>{term.description}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
