import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

await prisma.challenge.createMany({
  data: [
    {
      challengeId: 'flowchart',
      title: 'Flowchart นรก',
    },
    {
      challengeId: 'anime_captcha',
      title: 'Anime Captcha',
    },
  ],
});

await prisma.ticket.createMany({
  data: [
    {
      challengeId: 'flowchart',
      name: 'A',
      code: 'MOCK_FLOWCHART_A',
    },
    {
      challengeId: 'flowchart',
      name: 'B',
      code: 'MOCK_FLOWCHART_B',
    },
    {
      challengeId: 'anime_captcha',
      name: 'A',
      code: 'MOCK_ANIMECAPTCHA_A',
    },
    {
      challengeId: 'anime_captcha',
      name: 'B',
      code: 'MOCK_ANIMECAPTCHA_B',
    },
  ],
});
