export type Game = {
  slug: string;
  name: string;
  genre: string;
  blurb: string;
  status: "online" | "coming-soon" | "planned";
  serverInfo: string[];
};

export const games: Game[] = [
  {
    slug: "7-days-to-die",
    name: "7 Days to Die",
    genre: "Survival Horror",
    blurb: "Blood moon survival with a chaotic crew. Community server with custom settings.",
    status: "online",
    serverInfo: [
      "Community server, PVE-friendly with PVP zones",
      "Custom loot and blood moon settings",
      "Active staff and admin support",
    ],
  },
  {
    slug: "ark",
    name: "ARK: Survival Evolved",
    genre: "Survival",
    blurb: "Tame, build, conquer. PVE-focused cluster for builders and tamers.",
    status: "online",
    serverInfo: [
      "PVE-focused cluster",
      "Boosted taming and breeding rates",
      "Community votes on map rotations",
    ],
  },
  {
    slug: "atlas",
    name: "ATLAS",
    genre: "Pirates",
    blurb: "Sail, raid, and build empires across the open seas with the fleet.",
    status: "coming-soon",
    serverInfo: ["Server in planning - join the Discord to vote on settings"],
  },
];

export const statusLabel: Record<Game["status"], string> = {
  online: "SERVER ONLINE",
  "coming-soon": "COMING SOON",
  planned: "PLANNED",
};
