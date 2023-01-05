import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import React, { useState } from "react";
import styles from "./product.module.css";

const Product = () => {
  // ------------ search process ------------------>
  const [search, setSearch] = useState("");
  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const dataProduct = [
    {
      id: "1",
      name: "Monitor",
      category: "Tecnologia",
      cost: 300000,
      price: 600000,
      stock: 20,
      sales: 10,
      removed: 2,
      initial_stock: 50,
      image:
        "https://img01.huaweifile.com/sg/ms/co/pms/uomcdn/CO_HW_B2C/pms/202205/gbom/6941487214969/800_800_CBDC68A805677FB27A9CECFEC129C80Fmp.png",
    },
    {
      id: "2",
      name: "CPU",
      category: "Tecnologia",
      cost: 300000,
      price: 600000,
      stock: 20,
      sales: 10,
      removed: 2,
      initial_stock: 50,
      image: "sin image",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const [item, setItem] = useState("");

  return (
    <div className={styles.screen}>
      <div className={styles.header_product}>
        <div>
          <div className={styles.searchbar}>
            <div className={styles.searchbar_wrapper}>
              <div className={styles.searchbar_left}>
                <div className={styles.search_icon_wrapper}>
                  <span
                    className={`${styles.search_icon} ${styles.searchbar_icon}`}
                  >
                    <i className="bx bx-search"></i>
                  </span>
                </div>
              </div>
              <div className={styles.searchbar_center}>
                <div className={styles.searchbar_input_spacer}></div>
                <input
                  type="text"
                  className={styles.searchbar_input}
                  name="q"
                  title="Search"
                  role="combobox"
                  value={search}
                  onChange={handleSearch}
                  placeholder="Buscar..."
                />
              </div>
            </div>
          </div>
        </div>
        <Field>
          <Button>Nuevo Producto</Button>
        </Field>
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Acciones</th>
              <th>Producto</th>
              <th>Categoria</th>
              <th>Costo</th>
              <th>Precio de venta</th>
              <th>Existencias</th>
              <th>Ventas</th>
              <th>Descartados</th>
              <th>Stock inicial</th>
              <th>Imagen</th>
              <th>Vender</th>
              <th>Descartar</th>
            </tr>
          </thead>
          <tbody>
            {dataProduct?.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className={styles.actions_table}>
                    <button
                      className={styles.btn_context}
                      onClick={() => {
                        setOpenMenu(!openMenu);
                        setItem(product.id);
                      }}
                      // onClick={}
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div
                      className={
                        openMenu && item == product.id
                          ? `${styles.context_menu} ${styles.active_menu_actions}`
                          : styles.context_menu
                      }
                    >
                      <button>Editar</button>
                      <button>Eliminar</button>
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.cost}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.sales}</td>
                <td>{product.removed}</td>
                <td>{product.initial_stock}</td>
                <td>
                  <button>
                    <i className="bx bx-image-alt"></i>
                  </button>
                </td>
                <td className={styles.td_sell}>
                  <div className={styles.group_button}>
                    <input
                      id="id-sales"
                      className={styles.cart_input}
                      type="number"
                      required
                    />
                    <button className={styles.cart}>
                      <i className="bx bx-cart"></i>
                    </button>
                  </div>
                </td>
                <td className={styles.td_sell}>
                  <div className={styles.group_button}>
                    <input
                      id="id-sales"
                      className={styles.cart_input}
                      type="number"
                      required
                    />
                    <button className={styles.remove}>
                      <i className="bx bxs-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
