import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";

export const DivisaFormater = (value: any) => {
  const formaterMoney = Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return formaterMoney.format(value);
};

const Dashboard = () => {
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

  return (
    <>
      <div>
        <div className={styles.board_screen}>
          <div className={styles.board_flex}>
            <div className={styles.board_card}>
              <h3 className={styles.title}>Ventas</h3>
              <h4 className={styles.time}>AÑO ACTUAL</h4>
              <h2 className={styles.left}>{DivisaFormater(9000000)}</h2>
            </div>
            <div className={styles.board_card}>
              <h3 className={styles.title}>Gastos</h3>
              <h4 className={styles.time}>AÑO ACTUAL</h4>

              <h2 className={styles.left}>{DivisaFormater(75000000)}</h2>
            </div>
          </div>

          <div className={styles.board_card}>
            <h3 className={styles.title}>Ganacia bruta</h3>
            <h4 className={styles.time}>AÑO ACTUAL</h4>

            <h2>{DivisaFormater(-20000000)}</h2>
          </div>
          <div className={`${styles.board_card} ${styles.board_banks}`}>
            <i className="bx bxs-bank"></i>
            <h3 className={styles.title_center}>No hay bancos</h3>
            <p>
              Conecta Helebba a tus bancos para relacionar y tener control total
              sobre tus movimientos.
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
              <h3 className={styles.title}>Ganancia neta</h3>
              <h4 className={styles.time}>AÑO ACTUAL</h4>

              <h2>{DivisaFormater(40000000)}</h2>
            </div>
            <div className={styles.board_card}>
              <h3 className={styles.title}>Costos fijos</h3>
              <h4 className={styles.time}>MES ACTUAL</h4>
              <h2>{DivisaFormater(3000000)}</h2>
            </div>
          </div>

          <div className={`${styles.board_card} ${styles.board_bank_report}`}>
            <h3 className={styles.title}>Entradas y salidas de banco</h3>
            <h4 className={styles.time}>MES ACTUAL</h4>
            <ul>
              <li>
                <p>Entradas</p> <span>0</span>
              </li>
              <li>
                <p>Salidas</p> <span>0</span>
              </li>
              <li>
                <p>Saldo</p> <span>0</span>
              </li>
            </ul>
          </div>
          <div className={styles.board_card}>
            <h3 className={styles.title}>Resumen de gastos</h3>
            <h4 className={styles.time}>ÚLTIMOS 12 MESES</h4>
            <h2>
              {DivisaFormater(monthsListExpense[Number(month) - 1].dataset)}
            </h2>
            <span className={styles.label_month}>
              {monthsListExpense[Number(month) - 1].label.toUpperCase()} 2022
            </span>
          </div>
          <div className={`${styles.board_card} ${styles.list}`}>
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
                  {/* {console.log("CALCUL", Math.trunc(expenses?.filter((expense) => expense.status == 'active').reduce((a,c) => a + Number(c.total_price) * 1, 0) / (expenses
                  ?.filter((expense) => expense.status == "active")
                  .reduce((a, c) => a + Number(c.total_price) * 1, 0) + costs?.reduce((a,c) => a + Number(c.price), 0)) * 100))} */}
                </span>
              </li>
              <li>
                <div>
                  <h3>Alquiler/Arriendo</h3>
                  <p>{DivisaFormater(50000000)}</p>{" "}
                </div>
                <span className={styles.bar}>
                  {/* {console.log("CALCUL", Math.trunc(expenses?.filter((expense) => expense.status == 'active').reduce((a,c) => a + Number(c.total_price) * 1, 0) / (expenses
                  ?.filter((expense) => expense.status == "active")
                  .reduce((a, c) => a + Number(c.total_price) * 1, 0) + costs?.reduce((a,c) => a + Number(c.price), 0)) * 100))} */}
                </span>
              </li>
              <li>
                <div>
                  <h3>Sueldo/Nomina</h3>
                  <p>{DivisaFormater(33000000)}</p>{" "}
                </div>
                <span className={styles.bar}>
                  {/* {console.log("CALCUL", Math.trunc(expenses?.filter((expense) => expense.status == 'active').reduce((a,c) => a + Number(c.total_price) * 1, 0) / (expenses
                  ?.filter((expense) => expense.status == "active")
                  .reduce((a, c) => a + Number(c.total_price) * 1, 0) + costs?.reduce((a,c) => a + Number(c.price), 0)) * 100))} */}
                </span>
              </li>
            </ul>
          </div>
          <div className={`${styles.board_card} ${styles.board_tasks}`}>
            <h3 className={styles.title}>Mis tareas</h3>
            <h4 className={styles.time}>TODOS LOS PROYECTOS</h4>
            <h3 className={styles.title_center}>No hay tareas asignadas</h3>
          </div>
          <div className={`${styles.board_card} ${styles.board_banks}`}>
            <i className="bx bx-envelope"></i>
            <h3 className={styles.title_center}>
              No hay correos electronicos sin leer
            </h3>
            <p>
              Envia facturas y presupuestos por correo electronico y podras
              saber si han sido leidos.
            </p>
          </div>
          <div className={styles.board_card}>
            <h4 className={styles.time}>Contactos</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
