import CloudinaryUploader from "@/utils/cloudinaryUpload";
import React, { useEffect, useState, ChangeEvent } from "react";
import styles from "./DragCloudinary.module.css";

interface Props {
  setImageUrl: (url: string) => void;
  idInput: string;
}

const DragCloudinary = ({ idInput, setImageUrl }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploader] = useState<CloudinaryUploader>(new CloudinaryUploader());
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  useEffect(() => {
    if (uploadedUrl) {
      setImageUrl(uploadedUrl);
    }
  }, [uploadedUrl]);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files.item(0);
    if (file) {
      setFile(file);
      uploader.setFile(file);
    }
    await uploader.upload();
    setUploadedUrl(uploader.getUrl());
  };

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

  return (
    <div
      className={`${styles.container_input_cloudinary} ${
        isDragging ? styles.dragging : ""
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {uploadedUrl ? (
        <>
          <div className={styles.image_cover_form}>
            <img src={uploadedUrl} alt="Uploaded Image" />
            <button className={styles.btn_remove} onClick={handleChangeImage}>
              <i className="bx bx-x-circle"></i>
            </button>
          </div>
        </>
      ) : (
        <div className={styles.formbold_file_input}>
          <input
            type="file"
            name={idInput}
            hidden
            id={idInput}
            onChange={handleChange}
          />
          <label htmlFor={idInput}>
            <div>
              <span className={styles.formbold_drop_file}>
                Arrastra el archivo aquí
              </span>
              <span className={styles.formbold_or}>O</span>
              <span className={styles.formbold_browse}>Busca el archivo</span>
            </div>
          </label>
        </div>
      )}
    </div>
  );
};

export default DragCloudinary;
