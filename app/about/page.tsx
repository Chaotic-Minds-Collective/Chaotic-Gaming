import { BADGE } from "@/lib/site";

export default function About() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-10">
      <div className="aurora" />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="reveal crest-ring mx-auto h-44 w-44">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BADGE} alt="Chaotic Gaming crest" className="h-full w-full rounded-full" />
        </div>
        <p className="kicker reveal d1 mt-10">Who we are</p>
        <h1 className="section-title reveal d1 mt-3">About Chaotic Gaming</h1>
        <div className="section-rule reveal d1 mx-auto" />
        <p className="reveal d2 mt-8 text-[var(--text)]">
          Chaotic Gaming is the gaming division of Chaotic Minds Collective, built on one philosophy:
        </p>
        <p className="reveal d2 font-gothic mt-5 text-4xl grad-text">Community built by gamers, for gamers.</p>
        <p className="reveal d3 mt-8 text-[var(--muted)]">
          We run community game servers, host events, and keep a welcoming space for players of 7 Days to Die, ARK, Atlas
          and more. No pay-to-win, no gatekeeping - just solid servers and good people.
        </p>
        <p className="reveal d4 mt-8 font-mono2 text-[11px] uppercase tracking-[0.3em] text-[var(--muted)]">
          Part of the Chaotic Minds Collective ecosystem - "The Method To Your Madness"
        </p>
      </div>
    </section>
  );
}
