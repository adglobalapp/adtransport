import { useState, type FormEvent } from 'react';
import { brand } from '../brand';
import type { ContactContent } from '../types';
import { Icon } from './Icon';
import './Contact.css';

export function Contact({ contact }: { contact: ContactContent }) {
  const [sent, setSent] = useState(false);

  // Nincs backend: a levelezőprogramot nyitjuk meg kitöltött üzenettel a brand.ts e-mail címére.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `${data.get('message')}\n\n— ${data.get('name')} <${data.get('email')}>`;
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(contact.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
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
              <a href={`tel:${brand.phone.replace(/\s+/g, '')}`}>{brand.phone}</a>
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
          <button type="submit" className="btn btn--primary">
            {contact.submit} <Icon name="arrow" size={16} />
          </button>
          {sent && (
            <p className="form__success" role="status">
              {contact.success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
