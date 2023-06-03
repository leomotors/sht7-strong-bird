import { error, json, type RequestHandler } from '@sveltejs/kit';

import { prisma } from '$lib/db';

import yellowQuiz from '$data/yellow_quiz.json';

export const POST = (async ({ request, locals }) => {
  const answers = await request.json();

  if (!Array.isArray(answers) || answers.some((a) => typeof a !== 'string')) {
    throw error(400, 'Bad request');
  }

  const yellow = await prisma.yellowQuiz.findUniqueOrThrow({
    where: { userId: locals.userId },
  });

  const quiz = yellowQuiz[yellow.currentQuiz];

  const keys = quiz.questions.map((q) => q.correct);

  const correct = answers.every((a, i) => a === keys[i]);

  if (correct) {
    if (yellow.currentQuiz === yellowQuiz.length - 1) {
      await prisma.yellowQuiz.update({
        where: { userId: locals.userId },
        data: { completed: true },
      });

      return json({ correct, completed: true });
    } else {
      await prisma.yellowQuiz.update({
        where: { userId: locals.userId },
        data: { currentQuiz: yellow.currentQuiz + 1 },
      });

      return json({ correct, completed: false });
    }
  } else {
    await prisma.yellowQuiz.update({
      where: { userId: locals.userId },
      data: { currentQuiz: 0 },
    });

    return json({ correct, completed: false });
  }
}) satisfies RequestHandler;
