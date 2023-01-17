import { useState } from "react";

export const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/matosr96/image/upload";

const [Image, setImage] = useState<any>();

export const UploadImage = (
  support: string,
  input: string,
  setSupport: any
) => {
  if (support === "") {
    const data = new FormData();
    data.append("file", Image);
    data.append("upload_preset", "r9rqkvzr");
    data.append("cloud_name", "matosr96");
    if (support === "") {
      fetch(CLOUDINARY_URL, {
        method: "post",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          setSupport(data?.url);
        })
        .catch((err) => console.log(err));
    }
  }

  return false;
};

export default UploadImage;
