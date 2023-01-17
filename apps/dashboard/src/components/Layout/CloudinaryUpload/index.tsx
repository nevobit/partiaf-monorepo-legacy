import CloudinaryUploader from "@/utils/cloudinaryUpload";
import React, { useState, useEffect, ChangeEvent } from "react";
import styles from "./ImageInput.module.css";

interface Props {
  setImageUrl: (url: string) => void;
}

const InputImage = ({ setImageUrl }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploader] = useState<CloudinaryUploader>(new CloudinaryUploader());
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (uploadedUrl) {
      setImageUrl(uploadedUrl);
    }
  }, [uploadedUrl]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (file) {
      setFile(file);
      uploader.setFile(file);
      await uploader.upload();
      setUploadedUrl(uploader.getUrl());
    }
  };

  return (
    <>
      {uploadedUrl ? (
        <>
          <div className={styles.image_cover_form}>
            <img src={uploadedUrl} alt="Uploaded Image" />
          </div>
        </>
      ) : (
        <div>
          <div className={styles.file_select} id="src_file1">
            <input
              name="src_file1"
              id="file"
              type="file"
              onChange={handleChange}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default InputImage;
