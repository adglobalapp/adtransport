/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * A kapcsolati üzeneteket fogadó API címe (az AdReuse Laravel backendje), pl. https://api.adreuse.uk.
   * Ha üres, az űrlap a látogató levelezőprogramját nyitja meg.
   */
  readonly VITE_CONTACT_API_URL?: string;
}
