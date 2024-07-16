'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Radio } from '../components/form/formAtoms';
import { useRouter } from 'next/router';
import { setCookie, getCookie } from 'cookies-next';

const formSteps = [
  'intention',
  'timeframe',
  'budget',
  'state',
  'commitment',
];

const intentionOpts = [
  {value: 'inversion', label: 'Inversión'},
  {value: 'segundo-hogar', label: 'Segundo Hogar'},
  {value: 'residencia', label: 'Residencia'},
];
const timeframeOpts = [
  {value: 'inmediato', label: 'De inmediato'},
  {value: '3-meses', label: 'Dentro de 3 meses'},
  {value: '6-meses', label: 'Al menos 6 meses'},
];
const budgetOpts = [
  {value: '350000-400000', label: 'De $300mil a $400mil usd'},
  {value: '400000-500000', label: 'De $400mil a $500mil usd'},
  {value: '500000', label: 'Más de $500mil usd'},
];
const stateOpts = [
  {value: 'texas', label: 'Texas'},
  {value: 'california', label: 'California'},
  {value: 'fllorida', label: 'Florida'},
  {value: 'otro', label: 'Otro'},
];
const commitmentOpts = [
  {value: 'si', label: 'Claro, estaré atento'},
  {value: 'tal-vez', label: 'No estoy seguro'},
  {value: 'recordar', label: 'Recuérdame antes por favor'},
];

export default function Survey() {
  const [formStep, setFormStep] = useState(0);
  const [inputError, setInputError] = useState(null);
  const [sending, setSending] = useState(false);
  const methods = useForm({mode: 'all'});
  const {handleSubmit, setError, formState: {errors}} = methods;

  const router = useRouter();

  useEffect(() => {
    formSteps.map((fs) => setError(fs, {}));
  }, [setError]);


  const handleNext = () => {
    const formStepName = formSteps[formStep];
    if (errors[formStepName]) {
      setInputError(formStep);
      return;
    }
    setInputError(null);
    window.scrollTo(0, 0);
    return formStep < 4 && setFormStep(formStep + 1);
  };

  const onSubmit = (data) => {
    setSending(true);
    const lead = getCookie('lead');
    const {id, email, phone} = JSON.parse(lead);
    const _fbc = getCookie('_fbc');
    const _fbp = getCookie('_fbp');
    const payload = {...data, id, email, phone, _fbc, _fbp};

    fetch('https://hook.us1.make.com/an9tc915o5bnowb5dtpgpipb3vkugok8', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response)
      .then(() => {
        fbq('track', 'Lead');
        const url = 'https://compracasasusa.pipedrive.com/scheduler/Gk5k7xFK/asesoria-inmobiliaria-internacional';

        const forwardLink = document.createElement('a');
        forwardLink.href = url;
        forwardLink.target = '_blank';
        forwardLink.click();

        router.push('/thankyou');
      });
  };

  return (
    <div className="relative flex flex-grow bg-brand-1/20 pointer-events-none">
      <div className="container !p-0 flex flex-col flex-grow items-center pointer-events-auto touch-auto">
        <div className="survey-card">
          <div className="w-full absolute left-0 bottom-0 bg-gray-100">
            <div className={`h-6 bg-brand-1`} style={{width: `${((formStep + 1) / 5) * 100}%`}}/>
          </div>
          <p className="-ft-1">Pregunta {formStep + 1} de 5</p>

          <FormProvider {...methods}>
            <form className="flex flex-col flex-grow" onSubmit={handleSubmit(onSubmit)}>
              <div className={`my-20 ${formStep === 0 ? 'block' : 'hidden'}`}>
                <p className="ft-4 font-semibold mb-6">¿Con qué fin estás buscando una propiedad en USA?</p>
                <Radio
                  name="intention"
                  inputOptions={{required: 'Selecciona una opción'}}
                  placeholder="selecciona uno por fa"
                  options={intentionOpts}
                  optCols={1}
                  className={inputError === 0 ? '!border-brand-2' : undefined}
                />
              </div>

              <div className={`my-20 ${formStep === 1 ? 'block' : 'hidden'}`}>
                <p className="ft-4 font-semibold mb-6">¿Cuándo tienes pensado hacer tu inversión?</p>
                <Radio
                  name="timeframe"
                  inputOptions={{required: 'Selecciona una opción'}}
                  placeholder="selecciona uno por fa"
                  options={timeframeOpts}
                  optCols={1}
                  className={inputError === 1 ? '!border-brand-2' : undefined}
                />
              </div>
              <div className={`my-20 ${formStep === 2 ? 'block' : 'hidden'}`}>
                <p className="ft-4 font-semibold mb-6">¿En cuál de estos rangos te sientes cómodo para realizar tu
                  inversión?</p>
                <Radio
                  name="budget"
                  inputOptions={{required: 'Selecciona una opción'}}
                  placeholder="selecciona uno por fa"
                  options={budgetOpts}
                  optCols={1}
                  className={inputError === 2 ? '!border-brand-2' : undefined}
                />
              </div>
              <div className={`my-20 ${formStep === 3 ? 'block' : 'hidden'}`}>
                <p className="ft-4 font-semibold mb-6">¿En qué estado de USA te interesa comprar?</p>
                <Radio
                  name="state"
                  inputOptions={{required: 'Selecciona una opción'}}
                  placeholder="selecciona uno por fa"
                  options={stateOpts}
                  optCols={1}
                  className={inputError === 3 ? '!border-brand-2' : undefined}
                />
              </div>
              <div className={`my-20 ${formStep === 4 ? 'block' : 'hidden'}`}>
                <p className="ft-2">Dado al volumen de solicitudes que tenemos, en ocasiones es complicado
                  re-agendar.</p>
                <p className="ft-2 font-bold">¿Contamos con tu asistencia puntual el día y hora que selecciones?</p>
                <Radio
                  name="commitment"
                  inputOptions={{required: 'Selecciona una opción'}}
                  placeholder="selecciona uno por fa"
                  options={commitmentOpts}
                  optCols={1}
                  className={inputError === 4 ? '!border-brand-2' : undefined}
                />
              </div>

              <div className="flex justify-between w-full mt-auto">
                <button
                  onClick={() => setFormStep(formStep - 1)}
                  className="button-secondary !bg-transparent border-none hover:text-brand-1 disabled:text-gray-100"
                  disabled={formStep <= 0}
                >Atrás
                </button>
                <button
                  type={formStep < 4 ? 'button' : 'submit'}
                  onClick={() => handleNext()}
                  disabled={sending}
                  className="mt-auto"
                >{
                  formStep === 4
                    ? 'Agendar cita'
                    : sending
                      ? <><span className="material-symbols-outlined animate-spin mr-4">progress_activity</span><span>Abriendo Calendario</span></>
                      : 'Siguiente'
                }</button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const {req, res, query: {id}} = ctx;
  const lead = getCookie('lead', {req, res});

  if (!lead || lead === 'null' || Object.keys(lead).length === 0) {
    if (!id) {
      return {
        redirect: {
          permanent: false,
          destination: '/#contact',
        },
      };
    } else {
      setCookie('lead', {...lead, id}, {req, res});
      return {props: {}};
    }
  }

  return {props: {}}
}
