import { createContext, useEffect, useState } from 'react';
import { calculateYearDiff, formatearCantidad } from '../helpers';
import { MARCAFEE, PLANFEE } from '../constants';

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [seguro, setSeguro] = useState({});
  const [priceTotal, setPriceTotal] = useState(0);
  const [spinner, setSpinner] = useState(false);

  const calculoSeguro = () => {
    console.log(seguro);

    let resultado = 2000;

    const yearDiff = calculateYearDiff(seguro);

    resultado -= resultado * 0.03 * yearDiff;

    resultado *= MARCAFEE[seguro.marca] * PLANFEE[seguro.plan];

    setSpinner(true);

    console.log(spinner);

    setTimeout(() => {
      setSpinner(false);
      setPriceTotal(formatearCantidad(resultado));
    }, 3000);
  };

  useEffect(() => {
    if (Object.keys(seguro).length > 0) {
      calculoSeguro();
    }
  }, [seguro]);

  return (
    <CotizadorContext.Provider
      value={{
        seguro,
        setSeguro,
        priceTotal,
        spinner,
        setSpinner,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
