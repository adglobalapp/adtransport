import type { IconName } from './components/Icon';

/*
 * Arculat és elérhetőségek egy helyen.
 * Színek, betűk, méretek: src/styles/tokens.css
 * Képek: tedd a fájlokat a public/images/ mappába, és írd be az útvonalukat ide.
 * Amíg egy kép útvonala üres, placeholder jelenik meg a helyén.
 */
export const brand = {
  id: 'adtransport',
  name: 'AdTransport',
  /** Szöveges logó két fele a jel előtt és után. */
  logoText: ['Ad', 'Transport'] as [string, string],
  /** Kép logó, pl. '/logo.svg'. Ha meg van adva, a szöveges logó helyett ez jelenik meg. */
  logoSrc: '' as string,

  email: 'hello@adtransport.example',
  phone: '+36 00 000 0000',
  location: 'Budapest, HU',

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
    { label: 'Facebook', href: 'https://www.facebook.com', icon: 'facebook' },
  ] satisfies { label: string; href: string; icon: IconName }[],

  images: {
    portrait: '',
    about: '',
    /** A galéria képei sorrendben; a content.ts galéria elemeihez igazodik. */
    gallery: ['', '', '', '', '', ''] as string[],
  },
};
