import { brand } from '../brand';
import type { AboutContent } from '../types';
import { Media } from './Media';
import './About.css';

export function About({ about }: { about: AboutContent }) {
  return (
    <section className="section" id="about">
      <div className="container about">
        <Media className="reveal" src={brand.images.about} alt={about.imageAlt} ratio="1 / 1" />

        <div>
          <div className="reveal">
            <span className="label label--brand">{about.label}</span>
            <h2 className="section__title">{about.title}</h2>
          </div>
          {about.paragraphs.map((p) => (
            <p key={p} className="about__text reveal">
              {p}
            </p>
          ))}
          <dl className="about__facts reveal">
            {about.facts.map((f) => (
              <div key={f.term}>
                <dt>{f.term}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
