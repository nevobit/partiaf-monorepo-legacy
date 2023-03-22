import { useDispatch } from "react-redux";
import swal from "sweetalert";

export const ChangeStatus = (
  dispatch: any,
  functionUpdate: Function,
  obj: any,
  message: string,
  textButton: string
) => {
  try {
    swal({
      text: message,
      icon: "warning",
      buttons: ["Cancelar", textButton],
      dangerMode: true,
    }).then((willDelete: any) => {
      if (willDelete) {
        dispatch(functionUpdate(obj) as any);
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
};
