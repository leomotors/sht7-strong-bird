import { error, json, type RequestHandler } from '@sveltejs/kit';

import { getQuizById, hashAnswer } from './quiz';
import { prisma } from '$lib/db';
import { isGoodSlug } from '$lib/slug';

export const POST = (async ({ params, request }) => {
  const req = await request.json();

  if (
    !isGoodSlug(params.id, 'ABC') ||
    typeof req !== 'object' ||
    !('answers' in req) ||
    typeof req.answers !== 'string'
  ) {
    throw error(400, 'Bad request');
  }

  const answersHash = req.answers;

  const quiz = getQuizById(params.id);

  const keys = quiz.questions.map((q) => q.correct);
  const keysHash = await hashAnswer(keys);

  const correct = answersHash === keysHash;

  if (correct) {
    const ticket = await prisma.ticket.findFirstOrThrow({
      where: {
        challengeId: 'quiz',
        name: params.id,
      },
    });

    await prisma.ticket.update({
      where: {
        code: ticket.code,
      },
      data: {
        exposed: true,
      },
    });

    return json({ correct: true, code: ticket.code });
  } else {
    return json({ correct: false });
  }
}) satisfies RequestHandler;
