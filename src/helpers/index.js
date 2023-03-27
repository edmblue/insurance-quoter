export const calculateYearDiff = (seguro) => {
  const actualYear = new Date().getFullYear();

  return actualYear - Number(seguro.year);
};

export const formatearCantidad = (value) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
