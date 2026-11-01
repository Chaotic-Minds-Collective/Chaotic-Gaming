const INVITE = "https://discord.gg/SPJ42PCAvD";

export default function Discord() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:px-10">
      <h1 className="section-title text-3xl font-bold">Join the Discord</h1>
      <p className="mb-8 mt-5 text-zinc-300">
        The Discord is where the community lives: game hubs, LFG channels, events, and direct support from staff.
      </p>
      <a href={INVITE} target="_blank" rel="noopener noreferrer" className="btn-cta">Join Our Discord</a>
      <h2 className="mt-12 text-xl font-bold text-pulse">How Onboarding Works</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-300">
        <li>Click the invite and accept the server rules.</li>
        <li>Pick the games you play - you get access to those hubs automatically.</li>
        <li>Say hi in #introduce-yourself and jump into voice.</li>
      </ol>
      <h2 className="mt-12 text-xl font-bold text-pulse">Community Rules (Short Version)</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
        <li>Be decent. No harassment, hate speech, or targeting.</li>
        <li>No spam, ads, or self-promotion without staff approval.</li>
        <li>Keep game talk in the right hubs.</li>
        <li>Staff decisions are final - appeal in a support ticket.</li>
      </ul>
    </section>
  );
}
