import React from "react";
import styles from "./NoImage.module.css";

const ImageNotFound = () => {
  return (
    <div>
      <img src="/noimage.png" alt="icons-no-image" />
      <p>Aun No tienes imagenes de tu negocio, agregalas aqui</p>
      <button>Agregar Imagenes</button>
    </div>
  );
};

export default ImageNotFound;
