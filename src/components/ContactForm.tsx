import { useRef, useState, type FormEvent } from 'react';
import { brand } from '../brand';
import { useI18n } from '../i18n';
import { privacy } from '../privacy';
import { Icon } from './Icon';
import { Turnstile, type TurnstileHandle } from './Turnstile';
import './Button.css';

export type ContactFormText = {
  name: string;
  email: string;
  message: string;
  submit: string;
  sending: string;
  /** Sikeres küldés után. */
  sent: string;
  /** Levelezőprogramos (mailto) visszajelzés, ha nincs beállítva API. */
  success: string;
  error: string;
  subject: string;
};

const API_URL = (import.meta.env.VITE_CONTACT_API_URL ?? '').replace(/\/$/, '');

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error';

/** Kapcsolati űrlap: az AdReuse backend POST /api/contact végpontjára küld; API nélkül mailto-ra esik vissza. */
export function ContactForm({ text }: { text: ContactFormText }) {
  const { lang } = useI18n();
  const [status, setStatus] = useState<Status>('idle');
  const turnstile = useRef<TurnstileHandle>(null);
  const p = privacy[lang];

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Végső tartalék, amíg nincs API beállítva: levelezőprogram kitöltött üzenettel.
    if (!API_URL) {
      const body = `${data.get('message')}\n\n— ${data.get('name')} <${data.get('email')}>`;
      window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(text.subject)}&body=${encodeURIComponent(body)}`;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(data), site: brand.id }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    } finally {
      turnstile.current?.reset();
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="field">
        <span>{text.name}</span>
        <input name="name" type="text" required maxLength={120} autoComplete="name" />
      </label>
      <label className="field">
        <span>{text.email}</span>
        <input name="email" type="email" required maxLength={255} autoComplete="email" />
      </label>
      <label className="field">
        <span>{text.message}</span>
        <textarea name="message" rows={5} required maxLength={5000} />
      </label>
      {/* Csapda mező a spam botoknak: ember nem látja, nem tölti ki. */}
      <input className="form__trap" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <Turnstile ref={turnstile} />
      <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? text.sending : text.submit} <Icon name="arrow" size={16} />
      </button>
      <p className={`form__status ${status === 'error' ? 'is-error' : ''}`} role="status">
        {status === 'sent' && text.sent}
        {status === 'mailto' && text.success}
        {status === 'error' && (
          <>
            {text.error} <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </>
        )}
      </p>
      <p className="form__note">
        {p.formNote} <a href="/privacy">{p.linkLabel}</a>
      </p>
    </form>
  );
}
