---
// src/components/Over.astro
interface Props {
  lang?: 'nl' | 'en';
}
const { lang = 'nl' } = Astro.props;

const copy = {
  nl: {
    kicker: 'Over de founder',
    heading: { a: 'Wie we voor gewerkt hebben', b: 'zeggen we niet verder.' },
    principes: [
      'Ik werk voor organisaties die precisie niet onderhandelen.',
      'Ik lever wat ik zeg, op tijd, en leg alles uit.',
      'Wat ik bouw blijft van jou. Geen afhankelijkheid, geen praatjes.',
    ],
    location: 'Gevestigd in Eindhoven · Beschikbaar voor heel Nederland',
  },
  en: {
    kicker: 'About the founder',
    heading: { a: 'Who we have worked for', b: 'we do not say further.' },
    principes: [
      'I work for organisations that do not negotiate on precision.',
      'I deliver what I say, on time, and explain everything.',
      'What I build stays yours. No dependency, no promises.',
    ],
    location: 'Based in Eindhoven · Available across the Netherlands',
  },
};
const t = copy[lang];
---

<section class="over section" id="over">
  <div class="container over-inner">

    <div class="over-left fade-in">
      <p class="t-kicker">{t.kicker}</p>
      <h2 class="t-h2 over-h2">
        {t.heading.a}<br>
        <em>{t.heading.b}</em>
      </h2>
    </div>

    <div class="over-right fade-in">
      {t.principes.map((p) => (
        <p class="om-principe">{p}</p>
      ))}
      <p class="om-location">{t.location}</p>
    </div>

  </div>
</section>

<style>
.over-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  align-items: center;
}

.over-h2 { margin-top: 1rem; }

.om-principe {
  font-family: var(--ff-head);
  font-style: italic;
  font-weight: 200;
  font-size: clamp(1rem, 1.8vw, 1.3rem);
  color: rgba(240,235,226,0.7);
  padding-left: 1.2rem;
  border-left: 1px solid rgba(201,169,110,0.22);
  line-height: 1.5;
  margin-bottom: 1.4rem;
  transition: border-color 0.3s, color 0.3s;
}
.om-principe:hover {
  border-left-color: rgba(201,169,110,0.55);
  color: rgba(240,235,226,0.9);
}

.om-location {
  font-family: var(--ff-mono);
  font-size: 0.46rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(201,169,110,0.22);
  margin-top: 2rem;
}

@media (max-width: 1024px) {
  .over-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
