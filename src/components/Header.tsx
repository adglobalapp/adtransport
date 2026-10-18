import { useState } from 'react';
import { languages } from '../content';
import { useI18n } from '../i18n';
import { Icon } from './Icon';
import { Logo } from './Logo';
import './Header.css';

export function Header() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  // Az aloldalakon (pl. /privacy) a horgonyok a főoldalra mutassanak
  const onHome = window.location.pathname === '/';

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo href={onHome ? '#top' : '/'} />

        <div className="header__right">
          <div className="lang" role="group" aria-label="Language">
            {languages.map((l) => (
              <button
                key={l}
                type="button"
                className={l === lang ? 'is-active' : ''}
                aria-pressed={l === lang}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {t.nav.length > 0 && (
            <>
              <nav className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Main">
                {t.nav.map((link) => (
                  <a key={link.href} href={onHome ? link.href : `/${link.href}`} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                ))}
              </nav>

              <button
                type="button"
                className="header__toggle"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-label="Menu"
              >
                <Icon name={open ? 'close' : 'menu'} size={24} />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
