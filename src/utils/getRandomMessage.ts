import { SHARE_MESSAGES } from 'src/constants/shareMessages';

export const getRandomMessage = (rings: number, planeName: string): string => {
  const randomIndex = Math.floor(Math.random() * SHARE_MESSAGES.length);
  const template = SHARE_MESSAGES[randomIndex];

  return template(rings, planeName);
};
