import Link from 'next/link';
import { info } from '../../../info';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { getCookie, setCookie } from 'cookies-next';
import { useState } from 'react';
import { restrictNumber, emailRegExp } from '../../utils/formValidators';
import fbEvent from '../../services/fbEvents';

export default function OptInForm() {
  const [sending, setSending] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    setSending(true);
    data.phone = '52' + data.phone.replace(/^(MX)?\+?(52)?\s?0?1?|\s|\(|\)|-|[a-zA-Z]/g, '');
    data.origin = 'Notoriovs Landing';

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
      })
      .catch(() => {
        fbEvent(
          'Lead',
          {email: data.email, phone: data.phone, externalID: ''},
        );
        setCookie('lead', {...data});
      })
      .then(() => {
        if (info.surveyRedirect !== '') {
          const forwardLink = document.createElement('a');
          forwardLink.href = info.surveyRedirect;
          forwardLink.target = '_blank';
          forwardLink.click();
        }
        router.push(`/thankyou`);
      });
  };

  return (
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
          {
            required: true,
          },
        )}
        className={errors.phone && '!bg-red-200'}
        onKeyDown={restrictNumber}
        placeholder="Teléfono de WhatsApp"/>
      <input
        {...register(
          'company',
        )}
        className={errors.company && '!bg-red-200'}
        placeholder="Nombre de tu empresa"/>

      <button
        disabled={sending}
        className={`w-full ${sending ? '!bg-transparent' : 'hover:!bg-brand-1'}`}
      >{
        !sending
          ? 'Programar cita →'
          : <span className="material-symbols-outlined animate-spin">progress_activity</span>
      }</button>

      <div className="mt-4">
        <p className="-ft-3 text-center text-white">Al dar clic aceptas nuestra&nbsp;
          <Link href={info.privacyNotice}>política de privacidad</Link>
        </p>
      </div>
    </form>
  );
}