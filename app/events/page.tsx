import Link from "next/link";

export default function Events() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:px-10">
      <h1 className="section-title text-3xl font-bold">Events</h1>
      <p className="mb-8 mt-5 text-zinc-300">
        We are a brand-new community, so our event calendar is just getting started. The first game nights and contests
        will be voted on and announced in Discord.
      </p>
      <div className="card">
        <h2 className="text-xl font-bold text-pulse">Want a say in our first events?</h2>
        <p className="mt-3 text-zinc-400">
          Join the Discord and drop your ideas in the events channel. Founding members pick what we play first.
        </p>
        <a href="https://discord.gg/SPJ42PCAvD" target="_blank" rel="noopener noreferrer" className="btn-cta mt-6">
          Join the Discord
        </a>
      </div>
      <p className="mt-8 text-sm text-zinc-500">
        This page will fill up with a real event calendar as events are scheduled, and will sync with Discord events
        once the Chaotic Command bot is live.
      </p>
    </section>
  );
}
