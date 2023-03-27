import { useState } from 'react';
import useCotizador from '../hooks/useCotizador';
import { MARCAS, calculateYears, PLANES } from '../constants';

const Formulario = () => {
  const YEARS = calculateYears();

  const { setSeguro } = useCotizador();

  const [error, setError] = useState(false);
  const [seguroObj, setSeguroObj] = useState({
    marca: '',
    year: '',
    plan: '',
  });

  const handleChange = (target) => {
    setSeguroObj((seguroACotizar) => {
      return { ...seguroACotizar, [target.name]: target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(seguroObj).includes('')) {
      setError(true);
      return;
    }
    setSeguro(seguroObj);
    setError(false);
  };
  return (
    <form className="p-6 space-y-9" onSubmit={handleSubmit}>
      {error && (
        <p className="bg-red-400 text-center py-2 uppercase font-bold text-lg text-red-700">
          Error: Todos los campos son obligatorios
        </p>
      )}
      <div className="space-y-2">
        <label htmlFor="marca" className="uppercase font-black text-xl">
          Marca
        </label>
        <select
          name="marca"
          id="marca"
          className="block bg-gray-200 w-full text-center py-2"
          onChange={(e) => handleChange(e.target)}
        >
          <option value="">-- Seleccione la Marca --</option>
          {MARCAS.map((m) => {
            return (
              <option key={m.id} name="marca" value={m.id}>
                {m.marca}
              </option>
            );
          })}
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="year" className="uppercase font-black text-xl">
          Año
        </label>
        <select
          name="year"
          id="year"
          className="block bg-gray-200 w-full text-center py-2"
          onChange={(e) => handleChange(e.target)}
        >
          <option value="">-- Seleccione el Año de Fabricacion --</option>
          {YEARS.map((y, i) => {
            return (
              <option key={i} value={y}>
                {y}
              </option>
            );
          })}
        </select>
      </div>
      <div className="space-y-2">
        <p htmlFor="" className="uppercase font-black text-xl">
          Elige un Plan
        </p>
        <div className="flex gap-6">
          {PLANES.map((p) => {
            return (
              <div key={p.id} className="flex items-center gap-3 font-bold">
                <label htmlFor={p.plan}>{p.plan}</label>
                <input
                  type="radio"
                  value={p.id}
                  name="plan"
                  id={p.plan}
                  onChange={(e) => handleChange(e.target)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <input
          type="submit"
          value="Cotizar"
          className="uppercase font-bold bg-zinc-500 text-white w-full py-3 cursor-pointer hover:bg-zinc-700"
        />
      </div>
    </form>
  );
};

export default Formulario;
