const getShortDescription = (description) =>
  description.split(' ').slice(0, 3).join(' ');

const toReais = (value) =>
  `R$${parseFloat(value).toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export { getShortDescription, toReais };
