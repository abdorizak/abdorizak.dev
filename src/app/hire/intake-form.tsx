'use client';

import { type FormEvent, useId, useState } from 'react';

import cx from '@/utils/cx';

const CONTACT_EMAIL = 'info@abdorizak.dev';
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const services = [
  'App Store / Play Store publishing',
  'Mobile app development',
  'Backend & web',
  'Consulting & code review',
  'Something else',
];

const budgets = [
  'Not sure yet',
  'Under $500',
  '$500 – $2,000',
  '$2,000 – $5,000',
  '$5,000+',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldClasses = cx(
  'w-full rounded-2 px-3 py-2 text-sm',
  'border border-divider bg-toolbar text-primary-txt',
  'outline-none transition-colors',
  'placeholder:text-tertiary-txt',
  'focus-visible:ring-2 focus-visible:ring-accent',
  'focus-visible:ring-offset-1 focus-visible:ring-offset-background',
);

const labelClasses = 'text-2xs font-semibold text-secondary-txt';

// Build a mailto link as a graceful fallback when no form backend is set up.
const buildMailto = (data: Record<string, string>): string => {
  const subject = `Project inquiry — ${data.service || 'General'}`;
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Service: ${data.service}`,
    `Budget: ${data.budget}`,
    `Timeline: ${data.timeline}`,
    '',
    data.message,
  ].join('\n');
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
};

export const IntakeForm = () => {
  const formId = useId();
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot — if filled, silently treat as success and bail.
    if (formData.get('botcheck')) {
      setStatus('success');
      return;
    }

    const data = Object.fromEntries(
      Array.from(formData.entries()).map(([k, v]) => [k, String(v)]),
    ) as Record<string, string>;

    // No backend configured → fall back to the user's mail client.
    if (!WEB3FORMS_KEY) {
      window.location.href = buildMailto(data);
      setStatus('success');
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New project inquiry — ${data.service}`,
          from_name: data.name,
          ...data,
        }),
      });
      const result = await response.json();
      setStatus(result.success ? 'success' : 'error');
      if (result.success) form.reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        className={cx(
          'rounded-3 border border-dashed border-divider',
          'bg-brand-500/[0.024] dark:bg-brand-100/5',
          'p-5 text-sm text-secondary-txt',
        )}
        role={'status'}
      >
        <p className={'font-semibold text-primary-txt'}>
          Thanks — your request is on its way.{' '}
          <span role={'img'} aria-label={'rocket'}>
            🚀
          </span>
        </p>
        <p className={'mt-1'}>
          I&apos;ll get back to you at the email you provided. For anything
          urgent, message me on{' '}
          <a
            href={'https://wa.me/252618125834'}
            target={'_blank'}
            rel={'noopener noreferrer'}
            className={'font-medium text-accent hocus:text-accent-dark'}
          >
            WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={'flex flex-col gap-4'}>
      {/* Honeypot field, hidden from real users */}
      <input
        type={'checkbox'}
        name={'botcheck'}
        tabIndex={-1}
        autoComplete={'off'}
        aria-hidden
        className={'hidden'}
      />

      <div className={'grid grid-cols-1 mobile-lg:grid-cols-2 gap-4'}>
        <div className={'flex flex-col gap-1.5'}>
          <label htmlFor={`${formId}-name`} className={labelClasses}>
            Name
          </label>
          <input
            id={`${formId}-name`}
            name={'name'}
            type={'text'}
            required
            autoComplete={'name'}
            placeholder={'Your name'}
            className={fieldClasses}
          />
        </div>
        <div className={'flex flex-col gap-1.5'}>
          <label htmlFor={`${formId}-email`} className={labelClasses}>
            Email
          </label>
          <input
            id={`${formId}-email`}
            name={'email'}
            type={'email'}
            required
            autoComplete={'email'}
            placeholder={'you@example.com'}
            className={fieldClasses}
          />
        </div>
      </div>

      <div className={'grid grid-cols-1 mobile-lg:grid-cols-3 gap-4'}>
        <div className={'flex flex-col gap-1.5'}>
          <label htmlFor={`${formId}-service`} className={labelClasses}>
            What do you need?
          </label>
          <select
            id={`${formId}-service`}
            name={'service'}
            defaultValue={services[0]}
            className={fieldClasses}
          >
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div className={'flex flex-col gap-1.5'}>
          <label htmlFor={`${formId}-budget`} className={labelClasses}>
            Budget
          </label>
          <select
            id={`${formId}-budget`}
            name={'budget'}
            defaultValue={budgets[0]}
            className={fieldClasses}
          >
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
        <div className={'flex flex-col gap-1.5'}>
          <label htmlFor={`${formId}-timeline`} className={labelClasses}>
            Timeline
          </label>
          <input
            id={`${formId}-timeline`}
            name={'timeline'}
            type={'text'}
            placeholder={'e.g. 2 weeks, ASAP'}
            className={fieldClasses}
          />
        </div>
      </div>

      <div className={'flex flex-col gap-1.5'}>
        <label htmlFor={`${formId}-message`} className={labelClasses}>
          Tell me about your project
        </label>
        <textarea
          id={`${formId}-message`}
          name={'message'}
          required
          rows={5}
          placeholder={'What are you building, and how can I help?'}
          className={cx(fieldClasses, 'resize-y min-h-28')}
        />
      </div>

      {status === 'error' ? (
        <p className={'text-2xs text-red'} role={'alert'}>
          Something went wrong sending your request. Please email{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={'font-medium text-accent hocus:text-accent-dark'}
          >
            {CONTACT_EMAIL}
          </a>{' '}
          directly.
        </p>
      ) : null}

      <button
        type={'submit'}
        disabled={status === 'submitting'}
        data-umami-event={'Hire intake submit'}
        className={cx(
          'self-start rounded-2 px-5 py-2.5 text-sm font-semibold',
          'bg-accent text-white transition-colors',
          'hocus:bg-accent-dark',
          'outline-none focus-visible:ring-2 focus-visible:ring-accent',
          'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:opacity-60 disabled:cursor-not-allowed',
        )}
      >
        {status === 'submitting' ? 'Sending…' : 'Send request'}
      </button>
    </form>
  );
};
