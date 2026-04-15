---
// src/components/Filosofie.astro
interface Props {
  lang?: 'nl' | 'en';
}
const { lang = 'nl' } = Astro.props;

const copy = {
  nl: {
    label: 'Filosofie',
    quote: ['Waarheid weegt', 'lichter', 'dan aanname.'],
    sig: "Maker · Ma'at Analytics",
  },
  en: {
    label: 'Philosophy',
    quote: ['Truth weighs', 'lighter', 'than assumption.'],
    sig: "Maker · Ma'at Analytics",
  },
};
const t = copy[lang];
---

<section class="filosofie section">
  <div class="container filosofie-inner">

    <!-- Decoratieve weegschaal -->
    <div class="weegschaal" aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="60" y1="10" x2="60" y2="108" stroke="#d4a853" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="20" y1="28" x2="100" y2="28" stroke="#d4a853" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="20" y1="28" x2="20" y2="42" stroke="#d4a853" stroke-width="1" stroke-linecap="round"/>
        <line x1="100" y1="28" x2="100" y2="42" stroke="#d4a853" stroke-width="1" stroke-linecap="round"/>
        <path d="M6 28 Q20 54 34 28" stroke="#d4a853" stroke-width="1.4" fill="none"/>
        <path d="M86 28 Q100 48 114 28" stroke="#d4a853" stroke-width="1.4" fill="none"/>
        <line x1="46" y1="108" x2="74" y2="108" stroke="#d4a853" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="60" cy="10" r="3" fill="#d4a853"/>
      </svg>
    </div>

    <div class="filosofie-content fade-in">
      <p class="t-kicker">{t.label}</p>
      <blockquote class="filosofie-quote">
        {t.quote[0]} <em>{t.quote[1]}</em> {t.quote[2]}
      </blockquote>
      <p class="filosofie-sig">{t.sig}</p>
    </div>

  </div>
</section>

<style>
.filosofie {
  background: rgba(255,255,255,0.015);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.filosofie-inner {
  display: flex;
  align-items: center;
  gap: 8rem;
}

.weegschaal {
  width: clamp(140px, 18vw, 240px);
  flex-shrink: 0;
  opacity: 0.18;
}

.filosofie-content { flex: 1; }

.filosofie-quote {
  font-family: var(--ff-head);
  font-weight: 200;
  font-style: normal;
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--white);
  margin: 1.2rem 0 1.8rem;
  border: none;
  padding: 0;
}
.filosofie-quote em {
  display: block;
  font-style: italic;
  color: var(--gold);
}

.filosofie-sig {
  font-family: var(--ff-mono);
  font-size: 0.52rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(201,169,110,0.3);
}

@media (max-width: 768px) {
  .filosofie-inner { flex-direction: column; gap: 2.5rem; }
  .weegschaal { width: 80px; }
}
</style>
