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
      code: 'ASAHINA_MAFUYU_SENPAI',
    },
    {
      challengeId: flowchart,
      name: 'B',
      code: 'HELLO_IM_EMU_OOTORI_EMU_IS_MEANING_SMILE',
    },
    {
      challengeId: quiz,
      name: 'A',
      code: 'CONGRATULATION_FOR_COMPLETING_STUPID_QUIZ',
    },
    {
      challengeId: quiz,
      name: 'B',
      code: 'CAFFELATTECAFFEMOCHACAPPUCHINO',
    },
    {
      challengeId: quiz,
      name: 'C',
      code: 'MIKASA_HACKERMAN',
    },
  ],
});
