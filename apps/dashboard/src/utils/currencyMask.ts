export const percentageMask = (value: string) => {
  const originalLength = value.length;
  value = value.replace(/\D/g, "");
  if (value && value.length > 0) {
    value = value + "%";
  } else if (originalLength > value.length) {
    value = value.slice(0, -1);
  }
  return value;
};

export function parsePercentage(value: string): number {
  const numericValue = value.replace("%", "").trim();
  return parseFloat(numericValue);
}

export const currencyMask = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{3})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ",");
  e.target.value = value;
  return e;
};

export const convertToNumber = (stateUpdate: any): number => {
  let formatBuyPrice = stateUpdate;
  formatBuyPrice = formatBuyPrice.replace(/,/g, "");
  const buyPrice = parseInt(formatBuyPrice);
  return buyPrice;
};

export const currencyMaskString = (amount: string) => {
  amount = amount.replace(/\D/g, "");
  amount = amount.replace(/(\d)(\d{3})$/, "$1,$2");
  amount = amount.replace(/(?=(\d{3})+(\D))\B/g, ",");
  amount = amount;
  return amount;
};
