import { CLOUDINARY_URL } from "./constants";

interface Props {
  photosArray: string[];
  setUrlPhotos: Function;
  storeLocal: any;
}

export const cloudinaryManyUpload = async (
  e: any,
  { photosArray, setUrlPhotos, storeLocal }: Props
) => {
  const file = e.target.files[0];
  const bodyFormData = new FormData();
  bodyFormData.append("file", file);
  bodyFormData.append("upload_preset", "r9rqkvzr");
  bodyFormData.append("cloud_name", "matosr96");

  try {
    fetch(CLOUDINARY_URL, {
      method: "post",
      body: bodyFormData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        const image = data.url;
        const newPhotosArray = photosArray.concat(image);
        setUrlPhotos(newPhotosArray);
        localStorage.setItem(
          "store",
          JSON.stringify({
            ...storeLocal,
            photos: newPhotosArray,
          })
        );
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};
