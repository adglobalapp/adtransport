# adtransport

Portfólió oldal egy szállítási / fuvarozó vállalkozás és annak vezetője számára: bemutatkozás, szolgáltatások, flotta-galéria, tapasztalat és képesítések, ajánlatkérés. Az [adlanding](https://github.com/adglobalapp/adlanding) letisztult fekete–piros arculatára épül.

**Stack:** React 19 · TypeScript · CSS (custom property tokenek) · Vite

## Futtatás

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # típusellenőrzés + production build a dist/ mappába
npm run preview   # a build kiszolgálása
```

## Arculat cseréje

Minden lecserélhető dolog egy-egy helyen van:

- **Színek, betűk, méretek:** `src/styles/tokens.css` – az egész oldal ezekből a változókból dolgozik. A betűtípusokat az `index.html` tölti be (Google Fonts).
- **Logó:** `src/brand.ts` → `logoSrc` (pl. `'/logo.svg'` a `public/` mappából). Amíg üres, a szöveges placeholder logó látszik. A favicon: `public/favicon.svg`.
- **Név, elérhetőségek, közösségi linkek:** `src/brand.ts`.
- **Képek:** tedd a fájlokat a `public/images/` mappába, és írd be az útvonalukat a `src/brand.ts` `images` részébe (pl. `portrait: '/images/portre.jpg'`). Amíg egy útvonal üres, csíkos placeholder jelenik meg a helyén.
- **Szövegek:** a `src/content.ts`-ben a `[szögletes zárójeles]` részek placeholderek (név, évszámok, tanulmányok stb.).

## Felépítés

```
src/
  brand.ts            # név, logó, elérhetőségek, közösségi linkek, képek útvonala
  content.ts          # a teljes szöveges tartalom 3 nyelven (EN · ES · HU)
  types.ts            # a szekciók tartalmának típusai
  styles/tokens.css   # design tokenek (szín, tipográfia, spacing, radius, motion)
  styles/base.css     # reset, globális elemek, utility osztályok
  components/         # ProfileHero, About, Cards, Timeline, Gallery, Contact, Media (kép/placeholder) …
```

A kapcsolati űrlapnak nincs backendje: beküldéskor a látogató levelezőprogramja nyílik meg kitöltött üzenettel a `brand.ts`-ben megadott e-mail címre.
