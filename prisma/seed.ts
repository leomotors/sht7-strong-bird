import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

await prisma.ticket.createMany({
  data: [
    {
      gameId: 'flowchart',
      title: 'Flowchart นรก',
      code: 'MOCK_FLOWCHART',
    },
    {
      gameId: 'anime_captcha',
      title: 'Anime Captcha',
      code: 'MOCK_ANIME_CAPTCHA',
    },
    {
      gameId: 'yellow_quiz',
      title: 'แบบทดสอบความรักชาติ',
      code: 'MOCK_YELLOW_QUIZ',
    },
  ],
});
