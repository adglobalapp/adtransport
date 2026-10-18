// A szekciók tartalmának típusai – a content.ts minden nyelve ezeket tölti ki.

export type NavLink = { label: string; href: string };

export type HeroContent = {
  eyebrow: string;
  lines: [string, string, string];
  quote: string;
  primaryCta: string;
  secondaryCta: string;
  portraitAlt: string;
};

export type Stat = { value: string; label: string };

export type AboutContent = {
  label: string;
  title: string;
  paragraphs: string[];
  facts: { term: string; value: string }[];
  imageAlt: string;
};

export type CardsContent = {
  label: string;
  title: string;
  lead?: string;
  items: { title: string; meta: string; text: string }[];
};

export type TimelineContent = {
  label: string;
  title: string;
  items: { period: string; title: string; place: string; text: string }[];
};

export type GalleryContent = {
  label: string;
  title: string;
  items: { alt: string }[];
};

export type ContactContent = {
  label: string;
  title: string;
  text: string;
  name: string;
  email: string;
  message: string;
  submit: string;
  success: string;
  subject: string;
  direct: { email: string; phone: string; location: string };
};

export type FooterContent = { tags: string[]; registered: string; rights: string };
