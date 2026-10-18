import type { TimelineContent } from '../types';
import './Timeline.css';

export function Timeline({ id, data }: { id: string; data: TimelineContent }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="section__head reveal">
          <span className="label label--brand">{data.label}</span>
          <h2 className="section__title">{data.title}</h2>
        </div>

        <ol className="timeline">
          {data.items.map((item) => (
            <li key={item.period + item.title} className="timeline__item reveal">
              <span className="timeline__period">{item.period}</span>
              <div>
                <h3 className="timeline__title">{item.title}</h3>
                <span className="timeline__place">{item.place}</span>
                <p className="timeline__text">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
