import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(0);

  const questions = [
    {
      q: "¿Cómo puede Grupo SierraS garantizar el cumplimiento de normativas tan variadas?",
      a: "Contamos con expertos en regulaciones internacionales y locales preparándose constantemente en el medio logístico para darte la mejor atención."
    },
    {
      q: "¿Por cuales aduanas trabaja Grupo SierraS?",
      a: "Trabajamos con aduanas aéreas, marítimas y terrestres."
    },
    {
      q: "¿Grupo SierraS se encarga de todo el trámite?",
      a: "¡Sí! Nosotros nos encargamos de hacer todo el trámite por ti para que tengas la tranquilidad de que tu mercancía llegue sin ningún problema."
    },
    {
      q: "¿Qué tipo de mercancías puedo importar o exportar por medio de Grupo SierraS?",
      a: "Con nosotros puedes importar y/o exportar: Mercancía en general, Textiles, Calzado, Productos siderúrgicos, Precursores químicos, Armas blancas, Artículos que no se consideren mercancía, Bebidas alcohólicas, cerveza y bebidas energizantes."
    },
    {
      q: "¿Qué beneficios adicionales obtengo al elegir Grupo SierraS?",
      a: "Acceso a redes internacionales, optimización de costos y gestión con proveedores."
    }
  ]

  return (
    <section className='bg-gray-100 py-12'>
      <div className='container'>
        {questions.map((q, i) =>
          <div className="w-full shadow-sm mb-2">
            <p
              id={i}
              className="w-full p-4 font-bold bg-white mb-0 cursor-pointer rounded-lg border border-gray-200"
              onClick={(e) => setFaqOpen(e.target.id)}
            >
              <span className="font-bold mr-4 text-brand-1">›</span>{q.q}
            </p>
            <p className={`${faqOpen == i ? 'flex' : 'hidden'} bg-gray-200 p-12`}>
              {q.a}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}