export const MARCAS = [
  {
    id: 1,
    marca: 'Europeo',
  },
  {
    id: 2,
    marca: 'Americano',
  },
  {
    id: 3,
    marca: 'Asiático',
  },
];

export const calculateYears = () => {
  const actualYear = new Date().getFullYear();

  return Array.from(new Array(20), (v, i) => actualYear - i);
};

export const PLANES = [
  {
    id: 0,
    plan: 'Basico',
  },
  {
    id: 1,
    plan: 'Completo',
  },
];

export const MARCAFEE = {
  1: 1.3,
  2: 1.15,
  3: 1.05,
};

export const PLANFEE = {
  0: 1.2,
  1: 1.5,
};

export const TIPOSEGURO = {
  1: 'Europeo',
  2: 'Americano',
  3: 'Asiatico',
};

export const TIPOPLAN = {
  0: 'Basico',
  1: 'Completo',
};
