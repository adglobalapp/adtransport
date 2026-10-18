import type { CardsContent } from '../types';
import './Cards.css';

export function Cards({ id, data }: { id: string; data: CardsContent }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="section__head reveal">
          <span className="label label--brand">{data.label}</span>
          <h2 className="section__title">{data.title}</h2>
          {data.lead && <p className="section__lead">{data.lead}</p>}
        </div>

        <div className="cards">
          {data.items.map((item, i) => (
            <article key={item.title} className="card reveal">
              <span className="card__index">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="card__title">{item.title}</h3>
              <span className="card__meta">{item.meta}</span>
              <p className="card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
