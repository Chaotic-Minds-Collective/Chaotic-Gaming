import { DISCORD_INVITE, BADGE } from "@/lib/site";

const rules = [
  "Be decent. No harassment, hate speech, or targeting.",
  "No spam, ads, or self-promotion without staff approval.",
  "Keep game talk in the right hubs.",
  "Staff decisions are final - appeal in a support ticket.",
];

/**
 * Discord community page.
 *
 * Renders the public /discord landing page: the join call-to-action, the live
 * Discord server widget (who is online right now), the onboarding walkthrough,
 * and the short version of the server rules.
 */
export default function Discord() {