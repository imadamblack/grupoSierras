import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i01 from '../../public/landing/02.png';
import i02 from '../../public/landing/28.png';
import i03 from '../../public/landing/03.png';
import i04 from '../../public/landing/08.png';
import i06 from '../../public/landing/27.png';
import testimonial01 from '../../public/landing/testimonio01.png';
import testimonial02 from '../../public/landing/testimonio02.png';
import testimonial03 from '../../public/landing/testimonio04.png';
import icoAduana from '../../public/landing/icons/aduana.png';
import icoAvion from '../../public/landing/icons/avion.png';
import icoMundo from '../../public/landing/icons/mundo.png';
import Faqs from '../components/faqs';

export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Obtén una asesoría gratuita',
    description: 'Comienza a agilizar la importación o exportación de tus mercancías',
  };

  return (
    <>
      <section
        className="relative h-[80vh] w-full flex flex-col justify-center items-center bg-[url('/landing/16.png')] bg-cover bg-bottom">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50 z-10"/>

        <div className="container w-full text-center md:text-left text-white z-10 p-8">
          <h1
            className="md:w-2/3 relative ft-10 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            Entender las reglas aduanales debería ser un castigo, no tu trabajo.
          </h1>
          <p className="md:w-2/3 ft-4 font-medium md:text-left my-12">Somos tu nueva comercializadora internacional.</p>
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start mt-12">
            <Link href="#contact">
              <a
                onClick={() => setLastClick('hero')}
                className="button"
              >
                {cta.main}
              </a>
            </Link>
            <p className="md:w-2/3 -ft-2 md:text-left mt-4">{cta.description}</p>
          </div>
        </div>
        <div className="absolute flex flex-col justify-center items-center text-white bottom-8 mt-8 md:mt-20 z-10">
          <p className="ft-1">Sigue leyendo</p>
          <div className="animate-bounce">
            <div className="ft-3 material-icons mx-auto">expand_more</div>
          </div>
        </div>
        <div className="w-full h-full absolute bg-black/30 -z-1"/>
      </section>

      <section className="reading-container mb-16">
        <div className="flex border-b border-brand-1 pb-4 mb-8">
          <span className="material-icons mr-2 -ft-2">timer</span>
          <p className="-ft-2" style={{marginBlockEnd: 0}}>Conoce los principales beneficios en 4 min</p>
        </div>
        <p className="ft-2">
          Queremos ser tu solución en la <nobr>compra-venta</nobr> de productos a nivel internacional y quitarte todo el
          desgaste de
          la logística y los trámites aduanales.<br/><br/>
          Desde hace 10 años vi como muchas empresas se estancaban con su comercialización en el extranjero o les
          retenían mucho la mercancía en aduana por falta de conocimiento, por falta de tiempo o por miedo a realizar
          mal algún trámite.<br/><br/>
          Entonces decidí integrar desde la documentación hasta la
          entrega de la mercancía para que tú solo te encargues de hacer lo que mejor sabes:
          <br/><br/>
          dirigir tu negocio y liberarte de la logística.
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a
              onClick={() => setLastClick('promise')}
              className="button mb-4"
            >{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="Simplificamos el caos aduanal para que tú no tengas que hacerlo"
        image={i01}
      />
      <section className="my-16">
        <div className="reading-container">
          <p>Sabemos lo cansado y complicado que puede ser para ti realizar trámites aduanales, ahora súmale tener que
            enseñarle a alguien a realizar mil trámites, que revise las NOM’s, los Incoterms y todo lo que implica este
            proceso aduanal.<br/><br/>
            Así que, <b>decidimos integrar todos los procesos de logística y comercialización</b>, con el único objetivo
            de
            ayudarte a recibir o enviar mercancía sin que pierdas la cabeza ni tu dinero en trámites pesados.<br/><br/>
            Ahora sí, aquí te doy 3 razones de por qué trabajar con nosotros:</p>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-gray-300 shadow-lg p-16 flex flex-col items-center text-center">
            <div className="relative w-2/3 pt-[40%] mb-8">
              <Image src={icoAvion} layout="fill" objectFit="contain"/>
            </div>
            <p className="ft-2 serif">Optimizamos la cadena logística</p>
            <p>Nos encargamos de todo, desde la compra - venta de mercancía hasta la gestión de los servicios aduanales
              y de flete.</p>
          </div>
          <div className="rounded-xl border border-gray-300 shadow-lg p-16 flex flex-col items-center text-center">
            <div className="relative w-2/3 pt-[40%] mb-8">
              <Image src={icoAduana} layout="fill" objectFit="contain"/>
            </div>
            <p className="ft-2 serif">Optimizamos la cadena logística</p>
            <p>Nos encargamos de todo, desde la compra - venta de mercancía hasta la gestión de los servicios aduanales
              y de flete.</p>
          </div>
          <div className="rounded-xl border border-gray-300 shadow-lg p-16 flex flex-col items-center text-center">
            <div className="relative w-2/3 pt-[40%] mb-8">
              <Image src={icoMundo} layout="fill" objectFit="contain"/>
            </div>
            <p className="ft-2 serif">Optimizamos la cadena logística</p>
            <p>Nos encargamos de todo, desde la compra - venta de mercancía hasta la gestión de los servicios aduanales
              y de flete.</p>
          </div>
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center mt-16">
            <Link href="#contact">
              <a
                onClick={() => setLastClick('benefits')}
                className="button mb-4"
              >{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="¿Qué esperar?"
        title="Déjanos la chamba dura a nosotros mientras tú te ocupas de tu negocio"
        image={i02}
      />
      <section>
        <div className="reading-container my-16">
          <p className="ft-2">
            Es muy común que nuestros clientes tengan la duda de <b>cómo vamos a solucionar todos los trámites aduanales
            y de logística de su negocio</b>.<br/><br/>
            Y como te decía antes, somos más que una comercializadora de exportaciones e importaciones.<br/><br/>
            Pues alcanzar una solución 100% a la medida requiere 6 pasos:
          </p>
          <ol className="space-y-4">
            <li>Tenemos una cita y revisamos cuál servicio requieres.</li>
            <li>Definimos el plan de requerimientos específicos para el traslado de tu mercancía.</li>
            <li>Una vez aprobada, reunimos toda la documentación necesaria.</li>
            <li>Coordinamos y ejecutamos, tú despreocúpate del transporte, permisos y cumplimiento de normas.</li>
            <li>Llevamos la mercancía al destino final y te mantenemos informado de la entrega.</li>
            <li>Revisamos cualquier saldo contable para finalizar con el servicio.</li>
          </ol>
          <p className="ft-2">Contamos con un equipo con <b>más de 10 años de experiencia</b> en comercio exterior y
            logística
            para asegurar que todo salga en orden.</p>
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a
                onClick={() => setLastClick('deliverables')}
                className="button mb-4"
              >{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Target"
        title="Si no tienes tiempo de aprenderte todas las reglas aduanales, sí hacemos match"
        image={i03}
      />
      <section className="reading-container my-16">
        <p>
          Lo más seguro es que hayas llegado aquí por 2 razones:<br/><br/>
          1. Porque no tienes idea de cómo hacer exportaciones y te agobian los mil trámites y permisos que necesitas.
          <br/>
          2. Ya perdiste mucho dinero y mercancía porque te valió uno que otro permiso.
          <br/><br/>
          Ahora bien, nuestros costos normalmente van desde el 3% del valor de la mercancía y nunca han excedido el 8%.
          <br/><br/>
          De lo que sí puedes estar seguro, es que por fin vas a dejar de frustrarte por los trámites, el
          padrón de importadores y los permisos.
          <br/><br/>
          Y si hablamos de volúmenes muy grandes, agendemos una llamada y podemos negociar.
        </p>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a
                onClick={() => setLastClick('target')}
                className="button mb-4"
              >{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Testimonios"
        title="Tu paciencia no debería ponerse a prueba por la aduana"
        image={i04}
      />
      <section className="container my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative w-full">
            <div className="relative pt-[87%] w-full mb-8 shadow-xl border border-brand-3 rounded-xl overflow-hidden">
              <Image src={testimonial01} layout="fill" objectFit="cover"/>
            </div>
          </div>
          <div className="relative w-full">
            <div className="relative pt-[87%] w-full mb-8 shadow-xl border border-brand-3 rounded-xl overflow-hidden">
              <Image src={testimonial02} layout="fill" objectFit="cover"/>
            </div>
          </div>
          <div className="relative w-full">
            <div className="relative pt-[87%] w-full mb-8 shadow-xl border border-brand-3 rounded-xl overflow-hidden">
              <Image src={testimonial03} layout="fill" objectFit="cover"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a
              onClick={() => setLastClick('testimonials')}
              className="button mb-4"
            >{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      {/*<Blockbuster*/}
      {/*  overhead="Garantías"*/}
      {/*  title="No somos magos pero pagar multas y perder mercancía es para amateurs"*/}
      {/*  image={i05}*/}
      {/*/>*/}
      {/*<section className="container my-16">*/}
      {/*  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">*/}
      {/*    <div className="relative flex flex-col items-center rounded-2xl border border-brand-1 p-16">*/}
      {/*      <div className="relative w-1/2 pt-[50%]">*/}
      {/*        <Image src={icoProveedor} layout="fill" objectFit="contain"/>*/}
      {/*      </div>*/}
      {/*      <h4 className="text-center my-8 text-brand-3">Seguimiento y contacto con proveedores o clientes en el*/}
      {/*        extranjero</h4>*/}
      {/*    </div>*/}
      {/*    <div className="relative flex flex-col items-center rounded-2xl border border-brand-1 p-16">*/}
      {/*      <div className="relative w-1/2 pt-[50%]">*/}
      {/*        <Image src={icoLlamada} layout="fill" objectFit="contain"/>*/}
      {/*      </div>*/}
      {/*      <h4 className="text-center my-8 text-brand-3">Soporte continuo durante todo el proceso de*/}
      {/*        importación/exportación</h4>*/}
      {/*    </div>*/}
      {/*    <div className="relative flex flex-col items-center rounded-2xl border border-brand-1 p-16">*/}
      {/*      <div className="relative w-1/2 pt-[50%]">*/}
      {/*        <Image src={icoSoporte} layout="fill" objectFit="contain"/>*/}
      {/*      </div>*/}
      {/*      <h4 className="text-center my-8 text-brand-3">Asistencia post-compra para resolver cualquier consulta*/}
      {/*        adicional</h4>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="reading-container">*/}
      {/*    <div className="flex flex-col justify-center items-center">*/}
      {/*      <Link href="#contact">*/}
      {/*        <a*/}
      {/*          onClick={() => setLastClick('guarantees')}*/}
      {/*          className="button mb-4"*/}
      {/*        >{cta.main}</a>*/}
      {/*      </Link>*/}
      {/*      <p className="-ft-2 text-center">{cta.description}</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}


      <Blockbuster
        overhead="Preguntas frecuentes"
        title="Si tienes dudas, probablemente estén aquí"
        image={i06}
      />
      <section className="container py-8">
        <Faqs/>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t-4 border-brand-1 bg-brand-3 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="text-white tracking-wide">
              Obtén una sesión gratuita para evaluar tus necesidades de logística aduanal.
            </h2>
            <div className="my-12">
              <p className="ft-1 text-white">
                Ya llegaste hasta acá, <br/>
                ya le dedicaste unos minutos de tu valioso tiempo a conocernos.
                <br/><br/>
                Regálanos unos datos y platiquemos.
              </p>
            </div>
            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
