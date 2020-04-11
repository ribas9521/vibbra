const getShortDescription = (description) =>
  description.split(' ').slice(0, 3).join(' ');

const toReais = (value) => `R$${value.toFixed(2)}`;

export { getShortDescription, toReais };
