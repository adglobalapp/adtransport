import { brand } from '../brand';
import type { ContactContent } from '../types';
import { ContactForm } from './ContactForm';
import { Icon } from './Icon';
import './Contact.css';

export function Contact({ contact }: { contact: ContactContent }) {
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

        <div className="reveal">
          <ContactForm text={contact} />
        </div>
      </div>
    </section>
  );
}
