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
  /** A logójel (céltábla) képe a public/ mappából. */
  logoMarkSrc: '/logo-mark.png',
  /** Teljes kép logó, pl. '/logo.svg'. Ha meg van adva, a szöveges logó helyett ez jelenik meg. */
  logoSrc: '' as string,

  email: 'info@adglobalapp.com',
  /** Telefonszámok a kapcsolat részben, egymás alatt. */
  phones: ['+44 7583 056817', '+34 648 010 830'],
  location: 'Budapest, HU',

  social: [
    { label: 'LinkedIn', href: 'https://uk.linkedin.com/company/adglobalapp', icon: 'linkedin' },
  ] satisfies { label: string; href: string; icon: IconName }[],

  images: {
    portrait: '',
    about: '',
    /** A galéria képei sorrendben; a content.ts galéria elemeihez igazodik. */
    gallery: ['', '', '', '', '', ''] as string[],
  },

  /** Anyacég: a láblécben a logója és a cégadatok (Companies House szerint). */
  parent: {
    name: 'AdGlobalApp',
    company: 'ADGLOBALAPP LTD',
    companyNumber: '15251437',
    registeredOffice: '38 Abbott Court, Buckshaw Village, Chorley, England, PR7 7ET',
    url: 'https://www.adglobalapp.com',
    logoSrc: '/adapp-logo.png',
  },
};
