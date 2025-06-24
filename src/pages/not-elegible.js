import Link from 'next/link';

export default function NotElegible() {

  return (
    <div className="flex flex-col relative flex-grow">
      <section className="container py-24 flex flex-col items-center justify-center">
        <h1 className="">Lo siento</h1>
        <p className="text-center ft-3 mt-8">Dado el monto de tu operación, es muy seguro que te salga más cara la gestión con nosotros que el paquete que esperas.</p>
        <p className="text-center ft-3 mt-8"><b>Nuestra sugerencia:</b> revisa y da seguimiento con tu paquetería.</p>
        <div className="mt-16 flex flex-col items-center border-t border-brand-3 pt-16">
          <p className="text-center ft-3 mb-8">O si crees que seleccionaste mal el monto de tu operación:</p>
          <Link href="/survey">
            <a className="button ft-2">Regresa al formulario</a>
          </Link>
        </div>
      </section>
    </div>
  );
}