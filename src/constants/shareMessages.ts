import type { ShareMessageTemplate } from 'src/types/game/sharedMessages';

export const SHARE_MESSAGES: ShareMessageTemplate[] = [
  (rings, plane) =>
    `🚀 I just flew my ${plane} and collected ✨ ${rings} rings in AviaQuest: Endless Skies! 🔥\nCan you beat my score?\n`,

  (rings, plane) =>
    `😎 My ${plane} just survived turbulence and still grabbed ${rings} rings.\nThink you can do better, pilot? 🛫\n`,

  (rings, plane) =>
    `💥 GAME OVER… but not before my ${plane} collected ${rings} rings!\nTry to outfly me in AviaQuest: Endless Skies 🌌\n`,

  (rings, plane) =>
    `Score: ${rings} rings ✨\nPlane: ${plane} 🚀\nBeat me 👉\n`,

  (rings, plane) =>
    `🏆 New record unlocked! I got ${rings} rings with my trusty ${plane}. Join me and let's race! 🏎️💨\n`,
];
