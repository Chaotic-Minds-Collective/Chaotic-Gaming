const events = [
  { day: "07", month: "NOV", title: "Blood Moon Horde Night", meta: "7 Days to Die - 7PM PST - Discord event" },
  { day: "14", month: "NOV", title: "ARK Base Building Contest", meta: "Community vote - winner gets featured" },
  { day: "21", month: "NOV", title: "Community Game Night", meta: "Variety night - pick the game in Discord" },
];

export default function Events() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:px-10">
      <h1 className="section-title text-3xl font-bold">Events Calendar</h1>
      <p className="mb-9 mt-3 text-zinc-400">Game nights, contests, and community hangouts. All times in PST.</p>
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
      <p className="mt-8 text-sm text-zinc-500">Events sync with our Discord automatically once the Chaotic Command bot is live.</p>
    </section>
  );
}
