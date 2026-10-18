import { useState, type FormEvent } from 'react';
import { brand } from '../brand';
import type { ContactContent } from '../types';
import { Icon } from './Icon';
import './Contact.css';

const API_URL = (import.meta.env.VITE_CONTACT_API_URL ?? '').replace(/\/$/, '');

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error';

export function Contact({ contact }: { contact: ContactContent }) {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Amíg nincs API beállítva: a levelezőprogramot nyitjuk meg kitöltött üzenettel.
    if (!API_URL) {
      const body = `${data.get('message')}\n\n— ${data.get('name')} <${data.get('email')}>`;
      window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(contact.subject)}&body=${encodeURIComponent(body)}`;
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
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div className="reveal">
          <span className="label label--brand">{contact.label}</span>
          <h2 className="contact__title">{contact.title}</h2>
          <p className="section__lead">{contact.text}</p>

          <ul className="contact__direct">
            <li>
              <Icon name="mail" size={18} />
              <span className="contact__key">{contact.direct.email}</span>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <span className="contact__key">{contact.direct.phone}</span>
              <span className="contact__values">
                {brand.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`}>
                    {phone}
                  </a>
                ))}
              </span>
            </li>
            <li>
              <Icon name="pin" size={18} />
              <span className="contact__key">{contact.direct.location}</span>
              <span>{brand.location}</span>
            </li>
          </ul>
        </div>

        <form className="form reveal" onSubmit={onSubmit}>
          <label className="field">
            <span>{contact.name}</span>
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label className="field">
            <span>{contact.email}</span>
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label className="field">
            <span>{contact.message}</span>
            <textarea name="message" rows={5} required />
          </label>
          {/* Csapda mező a spam botoknak: ember nem látja, nem tölti ki. */}
          <input className="form__trap" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
            {status === 'sending' ? contact.sending : contact.submit} <Icon name="arrow" size={16} />
          </button>
          <p className={`form__status ${status === 'error' ? 'is-error' : ''}`} role="status">
            {status === 'sent' && contact.sent}
            {status === 'mailto' && contact.success}
            {status === 'error' && contact.error}
          </p>
        </form>
      </div>
    </section>
  );
}
