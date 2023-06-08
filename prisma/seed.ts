import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

await prisma.ticket.createMany({
  data: [
    {
      gameId: 'flowchart_a',
      title: 'Flowchart นรก',
      code: 'MOCK_FLOWCHART_A',
    },
    {
      gameId: 'flowchart_b',
      title: 'Flowchart นรก',
      code: 'MOCK_FLOWCHART_B',
    },
    {
      gameId: 'anime_captcha',
      title: 'Anime Captcha',
      code: 'MOCK_ANIME_CAPTCHA',
    },
  ],
});
