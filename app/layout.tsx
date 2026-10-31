import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Chaotic Gaming - Community built by gamers, for gamers",
  description: "Chaotic Gaming: game servers, events, and community for 7 Days to Die, ARK, Atlas and more. A Chaotic Minds Collective division.",
};

const nav = [
  { href: "/games", label: "Games" },
  { href: "/events", label: "Events" },
  { href: "/discord", label: "Discord" },
  { href: "/support", label: "Support" },
  { href: "/about", label: "About" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-ink/95 px-6 py-4 md:px-10">
          <Link href="/" className="text-lg font-extrabold tracking-widest grad-text">
            CHAOTIC GAMING
          </Link>
          <ul className="hidden gap-7 md:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-xs uppercase tracking-wider text-zinc-400 hover:text-pulse">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="#" className="rounded-md bg-riot px-5 py-2 text-sm font-semibold text-white hover:shadow-riot">
            Join Discord
          </a>
        </nav>
        <main>{children}</main>
        <footer className="border-t border-white/10 bg-coal px-6 py-10 text-center text-sm text-zinc-500">
          <p className="mb-2 text-base font-extrabold tracking-widest grad-text">CHAOTIC GAMING</p>
          <p>A Chaotic Minds Collective division - "The Method To Your Madness"</p>
          <p className="mt-2">chaoticmindsgaming.com</p>
        </footer>
      </body>
    </html>
  );
}
