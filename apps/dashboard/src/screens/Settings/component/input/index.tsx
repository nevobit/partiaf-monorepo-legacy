import CloudinaryUploader from "@/utils/cloudinaryUpload";
import React, { useEffect, useState, ChangeEvent } from "react";
import styles from "./input.module.css";

interface PropsSettingsAdmin {
  setImageUrl: (url: string) => void;
  idInput: string;
}

const ImageSettingsAdmin = ({ idInput, setImageUrl }: PropsSettingsAdmin) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploader] = useState<CloudinaryUploader>(new CloudinaryUploader());
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (file) {
      setFile(file);
      uploader.setFile(file);
    }
    await uploader.upload();
    setUploadedUrl(uploader.getUrl());
  };

  const handleChangeImage = () => {
    setFile(null);
    setUploadedUrl(null);
  };

  useEffect(() => {
    if (uploadedUrl) {
      setImageUrl(uploadedUrl);
    }
  }, [uploadedUrl]);

  return (
    <div className={styles.container_input_cloudinary}>
      {uploadedUrl ? (
        <>
          <div className={styles.image_cover_form}>
            <img src={uploadedUrl} alt="Uploaded Image" />
            <button onClick={handleChangeImage} className={styles.btn_remove}>Remover</button>
          </div>
        </>
      ) : (
        <div className={styles.formbold_file_input}>
          <input
            type="file"
            name={idInput}
            id={idInput}
            onChange={handleChange}
          />
          <label htmlFor={idInput}>
            <div>
              <span className={styles.formbold_drop_file}>
                Arrasta el archivo
              </span>
              <span className={styles.formbold_or}>O</span>
              <span className={styles.formbold_browse}>Buscalo</span>
            </div>
          </label>
        </div>
      )}
    </div>
  );
};

export default ImageSettingsAdmin;
