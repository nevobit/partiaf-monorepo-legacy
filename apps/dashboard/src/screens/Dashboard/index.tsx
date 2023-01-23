import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./dashboard.module.css";
import { AppStore } from '../../redux/store';
import { getCoverById } from "@/redux/states/covers/thunks";

export const DivisaFormater = (value: any) => {
  const formaterMoney = Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return formaterMoney.format(value);
};

const Dashboard = () => {

  const {covers, success} = useSelector((state: AppStore) => state.covers);
  const {store} = useSelector((state: AppStore) => state.stores);

  let monthsList = [
    { label: "Enero", value: "01", dataset: 0 },
    { label: "Febrero", value: "02", dataset: 0 },
    { label: "Marzo", value: "03", dataset: 0 },
    { label: "Abril", value: "04", dataset: 0 },
    { label: "Mayo", value: "05", dataset: 0 },
    { label: "Junio", value: "06", dataset: 0 },
    { label: "Julio", value: "07", dataset: 0 },
    { label: "Agosto", value: "08", dataset: 0 },
    { label: "Septiembre", value: "09", dataset: 0 },
    { label: "Octubre", value: "10", dataset: 0 },
    { label: "Noviembre", value: "11", dataset: 0 },
    { label: "Diciembre", value: "12", dataset: 0 },
  ];

  let monthsListExpense = [
    { label: "Enero", value: "01", dataset: 0 },
    { label: "Febrero", value: "02", dataset: 0 },
    { label: "Marzo", value: "03", dataset: 0 },
    { label: "Abril", value: "04", dataset: 0 },
    { label: "Mayo", value: "05", dataset: 0 },
    { label: "Junio", value: "06", dataset: 0 },
    { label: "Julio", value: "07", dataset: 0 },
    { label: "Agosto", value: "08", dataset: 0 },
    { label: "Septiembre", value: "09", dataset: 0 },
    { label: "Octubre", value: "10", dataset: 0 },
    { label: "Noviembre", value: "11", dataset: 0 },
    { label: "Diciembre", value: "12", dataset: 0 },
  ];

  const [barData, setBarData] = useState({
    labels: monthsList.map((m) => m.label),
    datasets: [
      {
        label: "",
        data: monthsList.map((m) => m.dataset),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 0,
      },
    ],
  });

  const [barDataExpense, setBarDataExpense] = useState({
    labels: monthsListExpense.map((m) => m.label),
    datasets: [
      {
        label: "",
        data: monthsListExpense.map((m) => m.dataset),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 0,
      },
    ],
  });

  const date = new Date();

  let month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;

      const dispatch = useDispatch();
    
      useEffect(() => {
          dispatch(getCoverById(store.uuid || "") as any);
      }, [dispatch,store, success]);
  return (
    <>
      <div className={styles.board_screen}>
        <div className={styles.board_flex}>
          <div className={styles.board_card}>
            <h3 className={styles.title}>Covers</h3>
            <h4 className={styles.time}>MES ACTUAL</h4>
            <h2 className={styles.left}>{covers.length}</h2>
          </div>
          <div className={styles.board_card}>
            <h3 className={styles.title}>Total Valor en Covers</h3>
            <h4 className={styles.time}>MES ACTUAL</h4>

            <h2 className={styles.left}>{DivisaFormater(covers.reduce((a, c) => a + Number(c.price) * Number(c.limit), 0))}</h2>
          </div>
        </div>

        <div className={styles.board_card}>
          <h3 className={styles.title}>Covers Efectivos</h3>
          <h4 className={styles.time}>AÑO ACTUAL</h4>

          <h2>{DivisaFormater(0)}</h2>
        </div>
        <div className={`${styles.board_card} ${styles.board_banks}`}>
          <i className="bx bxs-bank"></i>
          <h3 className={styles.title_center}>Balance</h3>
          <p>
            {DivisaFormater(store.balance)}
          </p>
        </div>
        <div className={`${styles.board_card} ${styles.span_2}`}>
          <h3 className={styles.title}>Resumen de ventas</h3>
          <h4 className={styles.time}>ÚLTIMOS 12 MESES</h4>

          <h2>{DivisaFormater(monthsList[Number(month) - 1].dataset)}</h2>
          <span className={styles.label_month}>
            {monthsList[Number(month) - 1].label.toUpperCase()} 2022
          </span>
        </div>
        <div className={styles.board_flex_column}>
          <div className={styles.board_card}>
            <h3 className={styles.title}>En lista de espera (Covers)</h3>
            <h4 className={styles.time}>Ultimo Cover</h4>
            <h2>{0}</h2>
          </div>
          <div className={styles.board_card}>
            <h3 className={styles.title}>Salidas</h3>
            <h4 className={styles.time}>Ultimo Cover</h4>
            <h2>{0}</h2>
          </div>
        </div>

        <div className={`${styles.board_card} ${styles.board_bank_report}`}>
          <h3 className={styles.title}>Lista de espera (Covers)</h3>
          <h4 className={styles.time}>Ultimo Covers</h4>
          <ul>
          </ul>
        </div>
        {/* <div className={styles.board_card}>
          <h3 className={styles.title}>Resumen de gastos</h3>
          <h4 className={styles.time}>ÚLTIMOS 12 MESES</h4>
          <h2>
            {DivisaFormater(monthsListExpense[Number(month) - 1].dataset)}
          </h2>
          <span className={styles.label_month}>
            {monthsListExpense[Number(month) - 1].label.toUpperCase()} 2022
          </span>
        </div> */}
        {/* <div className={`${styles.board_card} ${styles.list}`}>
          <h3 className={styles.title}>Cuentas de gasto</h3>
          <h4 className={styles.time}>AÑO ACTUAL</h4>
          <h2>{DivisaFormater(65000000)}</h2>
          <ul className={styles.costs_list}>
            <li>
              <div>
                <h3>General</h3>
                <p>{DivisaFormater(45600000)}</p>{" "}
              </div>
              <span className={styles.bar}>
              </span>
            </li>
            <li>
              <div>
                <h3>Alquiler/Arriendo</h3>
                <p>{DivisaFormater(50000000)}</p>{" "}
              </div>
              <span className={styles.bar}>
              </span>
            </li>
            <li>
              <div>
                <h3>Sueldo/Nomina</h3>
                <p>{DivisaFormater(33000000)}</p>{" "}
              </div>
              <span className={styles.bar}>
              </span>
            </li>
          </ul>
        </div> */}
        {/* <div className={`${styles.board_card} ${styles.board_tasks}`}>
          <h3 className={styles.title}>Mis tareas</h3>
          <h4 className={styles.time}>TODOS LOS PROYECTOS</h4>
          <h3 className={styles.title_center}>No hay tareas asignadas</h3>
        </div> */}
        {/* <div className={`${styles.board_card} ${styles.board_banks}`}>
          <i className="bx bx-envelope"></i>
          <h3 className={styles.title_center}>
            No hay correos electronicos sin leer
          </h3>
          <p>
            Envia facturas y presupuestos por correo electronico y podras saber
            si han sido leidos.
          </p>
        </div> */}
        {/* <div className={styles.board_card}>
          <h4 className={styles.time}>Contactos</h4>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
