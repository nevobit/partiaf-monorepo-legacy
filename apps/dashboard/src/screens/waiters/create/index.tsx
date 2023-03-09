import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import styles from "./NewWaiter.module.css";
import {
  createWaiter,
  deleteWaiter,
  PartialWaiter,
  reset,
} from "@/redux/states/waiters/waiters";
import { Button, Field, Input } from "@/components/shared";
import Loader from "@/components/Layout/Loader";
import swal from "sweetalert";

interface CreateWaiterModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const CreateWaiterModal = ({
  openModal,
  setOpenModal,
}: CreateWaiterModalProps) => {
  const dispatch = useDispatch();
  const { store } = useSelector((state: AppStore) => state.stores);
  const { admin } = useSelector((state: AppStore) => state.admins);
  const { success, loading } = useSelector((state: AppStore) => state.waiters);

  const [waiter, setWaiter] = useState<PartialWaiter>({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    store: store.uuid,
    admin: admin.uuid,
    code: store.employe_code,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setWaiter((prev) => ({ ...prev, [name]: value }));
  };

  const submitCreateHandler = async (
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    try {
      dispatch(createWaiter(waiter) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (success) {
      setOpenModal(false);
      dispatch(reset());
    }
  }, [success]);

  return (
    <>
      {!loading ? (
        <div className={openModal ? styles.open_modal : styles.close_modal}>
          <div className={styles.container_form}>
            <div className={styles.form}>
              <div className={styles.header_cover_form}>
                <img src="/logo-parti.svg" alt="Log Partiaf" />
                <button
                  className={styles.btn_header_cover}
                  onClick={() => {
                    setOpenModal(!openModal);
                    reset();
                  }}
                >
                  Cerrar
                </button>
              </div>
              <div className={styles.container_fields}>
                <Field label="Nombre">
                  <Input
                    name="firstname"
                    value={waiter.firstname}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Apellido">
                  <Input
                    name="lastname"
                    value={waiter.lastname}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Usuario">
                  <Input
                    name="username"
                    value={waiter.username}
                    onChange={handleChange}
                  />
                </Field>
                <Field label="Correo (opcional)">
                  <Input
                    name="email"
                    value={waiter.email}
                    onChange={handleChange}
                  />
                </Field>
                <Button onClick={submitCreateHandler}>Crear Colaborador</Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CreateWaiterModal;
