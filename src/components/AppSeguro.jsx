import useCotizador from '../hooks/useCotizador';
import Formulario from './Formulario';
import Resultado from './Resultado';

function App() {
  const { seguro } = useCotizador();

  return (
    <main className="bg-zinc-200 h-screen flex justify-center items-center flex-col">
      <div className="container mx-auto md:w-2/4 w-3/4 space-y-6">
        <h1 className="font-black text-2xl text-center">
          Cotizador de Seguros de Autos
        </h1>
        <div className="bg-white rounded-md">
          <Formulario />
          {Object.keys(seguro).length > 0 && <Resultado />}
        </div>
      </div>
    </main>
  );
}

export default App;
