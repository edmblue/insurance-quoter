import useCotizador from '../hooks/useCotizador';
import { TIPOSEGURO, TIPOPLAN } from '../constants';
import Spinner from './spinner';

const Resultado = () => {
  const { seguro, priceTotal, spinner, setSpinner } = useCotizador();
  const { marca, plan, year } = seguro;

  return (
    <div className="p-6 flex justify-center">
      {spinner ? (
        <Spinner />
      ) : (
        <div className="bg-slate-300 p-6">
          <p className="font-bold text-xl">
            Marca:{' '}
            <span className="font-normal text-md">{TIPOSEGURO[marca]}</span>
          </p>
          <p className="font-bold text-xl">
            Año: <span className="font-normal text-md"> {year} </span>
          </p>
          <p className="font-bold text-xl">
            Tipo de Plan:
            <span className="font-normal text-md">{TIPOPLAN[plan]} </span>
          </p>
          <p className="font-bold text-xl">
            Total: <span className="font-normal text-md">{priceTotal} </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Resultado;
