import swal from "sweetalert";

export const confirmDelete = async (
  message: string,
  onDelete: (param: any) => void,
  deleteParam: any
) => {
  try {
    swal({
      text: message,
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
      dangerMode: true,
    }).then((willDelete: any) => {
      if (willDelete) {
        onDelete(deleteParam);
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
};

export const showSuccessMessage = (message: string) => {
  try {
    swal({
      text: message,
      icon: "success",
      buttons: ["Aceptar"],
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
};
