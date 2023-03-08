export const DivisaFormater = (value) => {
    const formaterMoney = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });
  
    return formaterMoney.format(value);
  };
  