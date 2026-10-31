import { games } from "@/lib/games";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return games.map((g) => ({ game: g.slug }));
}

export default function GamePage({ params }: { params: { game: string } }) {
  const game = games.find((g) => g.slug === params.game);
  if (!game) notFound();
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:px-10">
      <span className="text-xs uppercase tracking-widest text-pulse">{game.genre}</span>
      <h1 className="section-title mt-2 text-4xl font-bold">{game.name}</h1>
      <p className="mb-8 mt-5 text-zinc-300">{game.blurb}</p>
      <h2 className="text-xl font-bold text-pulse">Server Details</h2>
      <ul className="mb-8 mt-4 list-disc space-y-2 pl-5 text-zinc-300">
        {game.serverInfo.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <h2 className="text-xl font-bold text-pulse">In-Game Items</h2>
      <p className="mt-4 text-zinc-400">
        Item guides and reference pages for {game.name} are coming soon. Join the Discord hub for community-written tips in the meantime.
      </p>
      <a href="#" className="btn-cta mt-8">Join the {game.name} Hub</a>
    </section>
  );
}
