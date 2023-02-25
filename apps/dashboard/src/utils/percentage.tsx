export const Discount = (totalPrice: number, discountPercentage: number) => {
  const discountValue = (totalPrice * discountPercentage) / 100;
  return discountValue;
};
