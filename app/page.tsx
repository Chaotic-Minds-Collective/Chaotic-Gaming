import Link from "next/link";
import { games, statusLabel } from "@/lib/games";

export default function Home() {
  return (
    <>
      <section className="hero-glow px-6 py-24 text-center md:px-10">
        <h1 className="text-4xl font-extrabold md:text-6xl">
          FORGED IN <span className="text-riot">CHAOS</span>
          <br />
          BUILT BY GAMERS
        </h1>
        <p className="mx-auto mt-5 max-w-xl italic text-zinc-400">Community built by gamers, for gamers.</p>
        <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-500">
          We are a brand-new community forming now. Founding members shape our servers, rules, and events.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href="https://discord.gg/SPJ42PCAvD" target="_blank" rel="noopener noreferrer" className="btn-cta">Join Our Discord</a>
          <Link href="/games" className="btn-ghost">See Our Games</Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <h2 className="section-title text-3xl font-bold">Our Game Communities</h2>
        <p className="mb-9 mt-3 text-zinc-400">Every game gets its own Discord hub. Servers launch as each community grows.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {games.map((g) => (
            <Link key={g.slug} href={`/games/${g.slug}`} className="card block">
              <span className="text-xs uppercase tracking-widest text-pulse">{g.genre}</span>
              <h3 className="mb-2 mt-2 text-xl font-bold">{g.name}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{g.blurb}</p>
              <span className="mt-4 inline-block rounded-full bg-vio/15 px-3 py-1 text-xs font-semibold text-vio">
                {statusLabel[g.status]}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 md:px-10">
        <h2 className="section-title text-3xl font-bold">Be a Founding Member</h2>
        <p className="mb-9 mt-3 text-zinc-400">Nothing here is set in stone yet - and that is the point.</p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="mb-2 text-lg font-bold text-pulse">1. Join the Discord</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Grab the invite, agree to the rules, pick your games.</p>
          </div>
          <div className="card">
            <h3 className="mb-2 text-lg font-bold text-pulse">2. Shape the servers</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Vote on which game servers launch first, rates, and rules.</p>
          </div>
          <div className="card">
            <h3 className="mb-2 text-lg font-bold text-pulse">3. Build the events</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Game nights, contests, and traditions start with the founding crew.</p>
          </div>
        </div>
      </section>
    </>
  );
}
