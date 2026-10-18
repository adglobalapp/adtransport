import { brand } from '../brand';
import type { HeroContent, Stat } from '../types';
import { Button } from './Button';
import { Icon } from './Icon';
import { Media } from './Media';
import './Hero.css';

export function ProfileHero({ hero, stats }: { hero: HeroContent; stats: Stat[] }) {
  const [first, middle, last] = hero.lines;

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div>
          <span className="label label--brand reveal">{hero.eyebrow}</span>
          <h1 className="hero__title reveal">
            <span>{first}</span>
            <span className="accent">{middle}</span>
            <span>{last}</span>
          </h1>
          <blockquote className="hero__quote reveal">{hero.quote}</blockquote>
          <div className="hero__ctas reveal">
            <Button href="#contact">
              {hero.primaryCta} <Icon name="arrow" size={16} />
            </Button>
            <Button href="#about" variant="outline">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>

        <Media className="hero__portrait reveal" src={brand.images.portrait} alt={hero.portraitAlt} ratio="4 / 5" />
      </div>

      <div className="container">
        <dl className="hero__stats reveal">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
