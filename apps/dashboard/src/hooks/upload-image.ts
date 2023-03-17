import axios from "axios";
import { useDispatch } from "react-redux";

export const uploadHandler = async (e:any, imageField = "image", images: any, setImages: Function, dispatch: any) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);

    try {
      dispatch({ type: "UPLOAD_REQUEST" });
      const { data } = await axios.post(
        "http://localhost:4300/api/v1/upload",
        bodyFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch({ type: "UPLOAD_SUCCESS" });
    
      const image = data.secure_url;
      setImages([...images, image]);
    } catch (err) {
      console.log(err);
    }
  };
