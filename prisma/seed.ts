import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const flowchart = 'flowchart';
const quiz = 'quiz';

await prisma.challenge.createMany({
  data: [
    {
      challengeId: flowchart,
      title: 'Flowchart นรก',
    },
    {
      challengeId: quiz,
      title: 'Stupid Quiz',
    },
  ],
});

await prisma.ticket.createMany({
  data: [
    {
      challengeId: flowchart,
      name: 'A',
      code: 'MOCK_FLOWCHART_A',
    },
    {
      challengeId: flowchart,
      name: 'B',
      code: 'MOCK_FLOWCHART_B',
    },
    {
      challengeId: quiz,
      name: 'A',
      code: 'MOCK_QUIZ_A',
    },
    {
      challengeId: quiz,
      name: 'B',
      code: 'MOCK_QUIZ_B',
    },
    {
      challengeId: quiz,
      name: 'C',
      code: 'MOCK_QUIZ_C',
    },
  ],
});
