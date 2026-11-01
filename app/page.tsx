import Link from "next/link";
import { games, statusLabel } from "@/lib/games";

const INVITE = "https://discord.gg/SPJ42PCAvD";

const events = [
  { day: "07", month: "NOV", title: "Blood Moon Horde Night", meta: "7 Days to Die - 7PM PST - Discord event" },
  { day: "14", month: "NOV", title: "ARK Base Building Contest", meta: "Community vote - winner gets featured" },
];

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
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href={INVITE} target="_blank" rel="noopener noreferrer" className="btn-cta">Join Our Discord</a>
          <Link href="/games" className="btn-ghost">See Our Servers</Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <h2 className="section-title text-3xl font-bold">Our Game Communities</h2>
        <p className="mb-9 mt-3 text-zinc-400">Pick your poison. Each game runs its own hub, events, and server.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {games.map((g) => (
            <Link key={g.slug} href={`/games/${g.slug}`} className="card block">
              <span className="text-xs uppercase tracking-widest text-pulse">{g.genre}</span>
              <h3 className="mb-2 mt-2 text-xl font-bold">{g.name}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{g.blurb}</p>
              <span className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${g.status === "online" ? "bg-pulse/10 text-pulse" : "bg-vio/15 text-vio"}`}>
                {statusLabel[g.status]}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 md:px-10">
        <h2 className="section-title text-3xl font-bold">Upcoming Events</h2>
        <p className="mb-9 mt-3 text-zinc-400">Game nights, community events, and blood moon parties.</p>
        {events.map((e) => (
          <div key={e.title} className="mb-4 flex items-center gap-6 rounded-lg border-l-[3px] border-pulse bg-coal px-6 py-5">
            <div className="min-w-[90px] text-center text-3xl font-extrabold text-riot">
              {e.day}
              <small className="block text-xs tracking-widest text-zinc-500">{e.month}</small>
            </div>
            <div>
              <strong>{e.title}</strong>
              <br />
              <span className="text-sm text-zinc-400">{e.meta}</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
