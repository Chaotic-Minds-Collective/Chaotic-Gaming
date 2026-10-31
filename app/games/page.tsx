import Link from "next/link";
import { games, statusLabel } from "@/lib/games";

export default function Games() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
      <h1 className="section-title text-3xl font-bold">Game Communities</h1>
      <p className="mb-9 mt-3 text-zinc-400">Every game runs its own hub with servers, events, and item guides.</p>
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
  );
}
