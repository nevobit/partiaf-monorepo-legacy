import React, { useEffect, useState } from "react";
import Loader from "@/components/Layout/Loader";
import { getWaitersByIdThunk } from "@/redux/states/waiters/thunks";
import {
  deleteWaiter,
  PartialWaiter,
  reset,
} from "@/redux/states/waiters/waiters";
import { AppStore } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import CreateWaiterModal from "./create";
import UpdateWaiterModal from "./update";
import styles from "./Waiter.module.css";

const Waiters = () => {
  const dispatch = useDispatch();
  const {
    waiters = [],
    success,
    loading,
  } = useSelector((state: AppStore) => state.waiters);
  const { store } = useSelector((state: AppStore) => state.stores);
  const { uuid: storeUUID } = localStorage.getItem("store")
    ? JSON.parse(localStorage.getItem("store") || "")
    : "";
  const [openModal, setOpenModal] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [item, setItem] = useState<string | undefined>("");

  const handlerOpenModal = () => {
    setOpenModal(!openModal);
  };

  const [waiterSelected, setWaiterSelected] = useState<PartialWaiter>({
    uuid: "",
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    code: 0,
    last_login: new Date(),
    admin: "",
    store: "",
  });
  const handlerOpenModalUpdate = (waiter: PartialWaiter) => {
    setOpenModalUpdate(!openModalUpdate);
    setWaiterSelected(waiter);
  };

  const handlerOpenMenu = (uuid: any) => {
    setOpenMenu(!openMenu);
    setItem(uuid);
  };

  const submitDeleteHandler = async (uuid: any) => {
    try {
      swal({
        text: "¿Está seguro que desea eliminar el colaborador?",
        icon: "warning",
        buttons: ["Cancelar", "Eliminar"],
        dangerMode: true,
      }).then((willDelete: any) => {
        if (willDelete) {
          dispatch(deleteWaiter(uuid) as any);
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    dispatch(getWaitersByIdThunk(storeUUID) as any);
    if (success) {
      dispatch(reset() as any);
    }
  }, [dispatch, store, success]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.screen_waiter}>
          <div className={styles.header_screen_waiter}>
            <h2>Colaboradores</h2>            
            <button onClick={handlerOpenModal}>Nuevo Colaborador</button>
          </div>
          <div className={styles.container_table}>
            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Usuario</th>
                  <th>Correo</th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                {waiters?.map((waiter) => (
                  <tr key={waiter.uuid}>
                    <td>{waiter.firstname}</td>
                    <td>{waiter.lastname}</td>
                    <td>{waiter.username}</td>
                    <td>{waiter.email}</td>
                    <td>
                      <div className={styles.actions}>
                        <button
                          className={styles.btn_context}
                          onClick={() => handlerOpenMenu(waiter.uuid)}
                        >
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div
                          className={
                            openMenu && item == waiter.uuid
                              ? `${styles.context_menu} ${styles.active}`
                              : styles.context_menu
                          }
                        >
                          <button
                            className={styles.action_edit}
                            onClick={() => handlerOpenModalUpdate(waiter)}
                          >
                            Editar
                          </button>
                          <button
                            className={styles.action_trash}
                            onClick={() => submitDeleteHandler(waiter.uuid)}
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <CreateWaiterModal openModal={openModal} setOpenModal={setOpenModal} />
      <UpdateWaiterModal
        openModal={openModalUpdate}
        setOpenModal={setOpenModalUpdate}
        Waiter={waiterSelected}
      />
    </>
  );
};

export default Waiters;
