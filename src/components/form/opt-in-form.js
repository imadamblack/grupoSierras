import Link from 'next/link';
import { info } from '../../../info';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router';
import { getCookie, setCookie } from 'cookies-next';
import { useState } from 'react';
import { restrictNumber, emailRegExp } from '../../utils/formValidators';
import fbEvent from '../../services/fbEvents';
import { Select } from './formAtoms';

export default function OptInForm({lastClick = ''}) {
  const [sending, setSending] = useState(false);
  const router = useRouter();
  const methods = useForm({mode: 'all'});
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = methods;

  const onSubmit = (data) => {
    setSending(true);
    data.phone = '521' + data.phone.replace(/^(MX)?\+?(52)?\s?0?1?|\s|\(|\)|-|[a-zA-Z]/g, '');
    data.origin = 'Notoriovs Landing';
    data.lastClick = lastClick;

    const _fbc = getCookie('_fbc');
    const _fbp = getCookie('_fbp');
    const payload = {...data, _fbc, _fbp};


    fetch(info.optInWebhook, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((result) => result.json())
      // Send FB Event
      .then(({id}) => {
        fbEvent(
          'Lead',
          {email: data.email, phone: data.phone, externalID: id},
        );
        setCookie('lead', {...data, id});
        return id;
      })
      .catch(() => {
        fbEvent(
          'Lead',
          {email: data.email, phone: data.phone, externalID: ''},
        );
        setCookie('lead', {...data});
      })
      .then((id) => router.push(`/survey?id=${id}`));
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register(
            'fullName',
            {
              required: true,
            },
          )}
          className={errors.fullName && '!bg-red-200'}
          placeholder="Tu nombre"/>
        <input
          {...register(
            'email',
            {
              required: true,
              pattern: {
                value: emailRegExp,
                message: 'Revisa tu correo',
              },
            },
          )}
          className={errors.email && '!bg-red-200'}
          placeholder="Un email activo"/>
        <input
          {...register(
            'phone',
            {required: true, maxLength: 10, minLength: 10},
          )}
          className={errors.phone && '!bg-red-200'}
          onKeyDown={restrictNumber}
          placeholder="Teléfono de WhatsApp"/>
        <input
          {...register(
            'company',
            {required: true},
          )}
          className={errors.company && '!bg-red-200'}
          placeholder="Nombre de tu empresa"/>
        <Select
          name="title"
          inputOptions={{required: true}}
          options={[
            {value: 'dueño', name: 'Dueño de la Carga'},
            {value: 'compras', name: 'Compras'},
            {value: 'proveedor', name: 'Proveedor'},
            {value: 'agente-aduanal', name: 'Agente Aduanal'},
            {value: 'agente-carga', name: 'Agente de Carga'},
            {value: 'otro', name: 'Otro'},
          ]}
          placeholder="Cuál es tu puesto/título?"
        />

        <button
          disabled={sending}
          className={`w-full ${sending ? '!bg-transparent' : 'hover:!bg-brand-1'}`}
        >{
          !sending
            ? 'Comenzar →'
            : <span className="material-symbols-outlined animate-spin">progress_activity</span>
        }</button>

        <div className="mt-4">
          <p className="-ft-3 text-center text-white">Al dar clic aceptas nuestra&nbsp;
            <Link href={info.privacyNotice}>política de privacidad</Link>
          </p>
        </div>
      </form>
    </FormProvider>
  );
}