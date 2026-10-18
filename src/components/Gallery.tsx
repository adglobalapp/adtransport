import { brand } from '../brand';
import type { GalleryContent } from '../types';
import { Media } from './Media';
import './Gallery.css';

export function Gallery({ id, data }: { id: string; data: GalleryContent }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="section__head reveal">
          <span className="label label--brand">{data.label}</span>
          <h2 className="section__title">{data.title}</h2>
        </div>

        <div className="gallery">
          {data.items.map((item, i) => (
            <Media key={item.alt} className="reveal" src={brand.images.gallery[i]} alt={item.alt} ratio="4 / 3" />
          ))}
        </div>
      </div>
    </section>
  );
}
